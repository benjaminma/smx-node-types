# smx-node-types
Lithium utility library for working with various activity node types

## Install
```
npm install smx-node-types
```

## Usage
```js
var smxTypes = require('smx-node-types');
smxTypes.getInternalType('board');      // returns "forum"
smxTypes.getAdminType('forum');         // returns "forum-board"
smxTypes.getSlugType('forum');          // returns "bd-p"
smxTypes.getKeyType('survey'):          // returns "common.feature.vovici.surveys.survey"
```

## API

### .getInternalType(type)
Maps internal, admin, and key types to node type used internally by SMX.

### .getAdminType(internalType)
Maps internal type to Lithium admin type used to construct admin dashboard URL.

### .getSlugType(internalType)
Maps internal type to Lithium web slug type used to construct node href URL.

### .getKeyType(internalType)
Maps internal type to Lithium REST API key type to construct CRUD API path.
