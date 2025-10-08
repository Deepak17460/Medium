const { getDB, saveDatabase } = require('../config/database');

class Bookmark {
  // Create a bookmark
  static create(userId, postId) {
    const db = getDB();
    const id = Date.now().toString();
    const now = new Date().toISOString();

    try {
      db.run(`
        INSERT INTO bookmarks (id, user_id, post_id, created_at)
        VALUES (?, ?, ?, ?)
      `, [id, userId, postId, now]);

      saveDatabase();
      return { id, userId, postId, createdAt: now };
    } catch (error) {
      if (error.message && error.message.includes('UNIQUE constraint failed')) {
        throw new Error('Post already bookmarked');
      }
      throw error;
    }
  }

  // Delete a bookmark
  static delete(userId, postId) {
    const db = getDB();
    db.run('DELETE FROM bookmarks WHERE user_id = ? AND post_id = ?', [userId, postId]);
    saveDatabase();
    return true;
  }

  // Check if user has bookmarked a post
  static hasBookmarked(userId, postId) {
    const db = getDB();
    const result = db.exec('SELECT COUNT(*) as count FROM bookmarks WHERE user_id = ? AND post_id = ?', [userId, postId]);

    if (result.length === 0 || result[0].values.length === 0) return false;
    return result[0].values[0][0] > 0;
  }

  // Get user's bookmarks
  static getUserBookmarks(userId) {
    const db = getDB();
    const result = db.exec(`
      SELECT b.id, b.post_id, b.created_at, p.title, p.excerpt, p.author, p.cover_image, p.slug
      FROM bookmarks b
      JOIN posts p ON b.post_id = p.id
      WHERE b.user_id = ?
      ORDER BY b.created_at DESC
    `, [userId]);

    if (result.length === 0) return [];
    return result[0].values.map(row => ({
      id: row[0],
      postId: row[1],
      createdAt: row[2],
      post: {
        id: row[1],
        title: row[3],
        excerpt: row[4],
        author: row[5],
        coverImage: row[6],
        slug: row[7]
      }
    }));
  }

  // Get bookmark count for a post
  static getPostBookmarkCount(postId) {
    const db = getDB();
    const result = db.exec('SELECT COUNT(*) as count FROM bookmarks WHERE post_id = ?', [postId]);

    if (result.length === 0 || result[0].values.length === 0) return 0;
    return result[0].values[0][0];
  }
}

module.exports = Bookmark;

