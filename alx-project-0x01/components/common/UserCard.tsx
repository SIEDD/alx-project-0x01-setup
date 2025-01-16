import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">📧 {email}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🌐 {website}</p>
      <div className="mt-2">
        <p className="font-semibold">Address:</p>
        <p className="text-sm text-gray-600">{address.street}, {address.suite}, {address.city} - {address.zipcode}</p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Company:</p>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;

