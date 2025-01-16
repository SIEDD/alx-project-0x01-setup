// PostProps interface for handling posts
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// GeoProps interface for geo-location details
export interface GeoProps {
  lat: string;
  lng: string;
}

// AddressProps interface for user address
export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

// CompanyProps interface for user company details
export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

// UserProps interface for user details
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

// PostData interface for creating a new post
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// PostModalProps interface for the PostModal component
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// UserData interface for user details (similar to UserProps)
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

// UserModalProps interface for the UserModal component
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void; // Ensure UserProps is used consistently
}
