interface DriveUser {
  kind: string;
  displayName: string;
  photoLink: string;
  me: boolean;
  permissionId: string;
  emailAddress: string;
}

interface DriveFileCapabilities {
  canAcceptOwnership: boolean;
  canAddChildren: boolean;
  canAddMyDriveParent: boolean;
  canChangeCopyRequiresWriterPermission: boolean;
  canChangeSecurityUpdateEnabled: boolean;
  canChangeViewersCanCopyContent: boolean;
  canComment: boolean;
  canCopy: boolean;
  canDelete: boolean;
  canDownload: boolean;
  canEdit: boolean;
  canListChildren: boolean;
  canModifyContent: boolean;
  canModifyContentRestriction: boolean;
  canModifyEditorContentRestriction: boolean;
  canModifyOwnerContentRestriction: boolean;
  canModifyLabels: boolean;
  canMoveChildrenWithinDrive: boolean;
  canMoveItemIntoTeamDrive: boolean;
  canMoveItemOutOfDrive: boolean;
  canMoveItemWithinDrive: boolean;
  canReadLabels: boolean;
  canReadRevisions: boolean;
  canRemoveChildren: boolean;
  canRemoveContentRestriction: boolean;
  canRemoveMyDriveParent: boolean;
  canRename: boolean;
  canShare: boolean;
  canTrash: boolean;
  canUntrash: boolean;
}

interface DriveFileImageMediaMetadata {
  width: number;
  height: number;
  rotation: number;
}

interface DriveFileLinkShareMetadata {
  securityUpdateEligible: boolean;
  securityUpdateEnabled: boolean;
}

export interface DriveFile {
  kind: string;
  id: string;
  name: string;
  mimeType: string;
  starred: boolean;
  trashed: boolean;
  explicitlyTrashed: boolean;
  spaces: string[];
  version: string;
  webContentLink: string;
  webViewLink: string;
  iconLink: string;
  hasThumbnail: boolean;
  thumbnailLink: string;
  thumbnailVersion: string;
  viewedByMe: boolean;
  createdTime: string;
  modifiedTime: string;
  modifiedByMe: boolean;
  owners: DriveUser[];
  lastModifyingUser: DriveUser;
  shared: boolean;
  ownedByMe: boolean;
  capabilities: DriveFileCapabilities;
  viewersCanCopyContent: boolean;
  copyRequiresWriterPermission: boolean;
  writersCanShare: boolean;
  originalFilename: string;
  fullFileExtension: string;
  fileExtension: string;
  md5Checksum: string;
  sha1Checksum: string;
  sha256Checksum: string;
  size: string;
  quotaBytesUsed: string;
  headRevisionId: string;
  imageMediaMetadata: DriveFileImageMediaMetadata;
  linkShareMetadata: DriveFileLinkShareMetadata;
}
