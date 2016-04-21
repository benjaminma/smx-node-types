(function() {
  var root = this;

  var smxTypes = {

    // Node type for internal use
    getInternalType: function getInternalType(type) {
      var typeMap = {
        'community': 'community',
        'category': 'category',
        'survey': 'survey',
        'common.feature.vovici.surveys.survey': 'survey',
        'forum': 'forum',
        'forum-board': 'forum',
        'board': 'forum',
        'tkb': 'tkb',
        'tkb-board': 'tkb',
        'blog': 'blog',
        'blog-board': 'blog',
        'idea': 'idea',
        'idea-board': 'idea',
        'contest': 'contest',
        'contest-board': 'contest',
        'group': 'group',
        'group-board': 'group',
        'chat': 'chat'
      };
      return typeMap[type];
    },

    // Node type for admin dashboard
    getAdminType: function getAdminType(type) {
      var typeMap = {
        // 'community': '',
        'category': 'category',
        'survey': 'common.feature.vovici.surveys.survey',
        'forum': 'forum-board',
        'tkb': 'tkb-board',
        'blog': 'blog-board',
        'idea': 'idea-board',
        'contest': 'contest-board',
        'group': 'group-board',
        'chat': 'chat'
      };
      return typeMap[type];
    },

    // Node type for URL slug
    getSlugType: function getSlugType(type) {
      var typeMap = {
        // 'community': '',
        'category': 'ct-p',
        'survey': 'c-sv-p',
        'forum': 'bd-p',
        'tkb': 'tkb-p',
        'blog': 'bg-p',
        'idea': 'idb-p',
        'contest': 'con-p',
        'group': 'gp-p',
        'chat': 'ch-p'
      };
      return typeMap[type];
    },

    // Node type for REST API key
    getKeyType: function getKeyType(type) {
      var typeMap = {
        // 'community': '',
        'category': 'category',
        'survey': 'common.feature.vovici.surveys.survey',
        'forum': 'board',
        'tkb': 'tkb',
        'blog': 'blog',
        'idea': 'idea',
        'contest': 'contest',
        // 'group': '',
        'chat': 'chat'
      };
      return typeMap[type];
    }
  };

  // Underscore-style module definition for Node.js, old require(), and browser
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = smxTypes;
    }
    exports.smxTypes = smxTypes;
  } else {
    root.smxTypes = smxTypes;
  }

}.call(this));