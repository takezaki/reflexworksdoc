package 
{
	/**
	 * 住所データ構成.
	 */
	[RemoteClass(alias="AddressEntity")]
	[Bindable]
	public class AddressEntity
	{
		public var addressId:int;
		public var zipCode:String;
		public var address1:String;
		public var address2:String;
		public var address3:String;
		public var companyName:String;
		public var department:String;
		public var name:String;
		public var phone:String;
		public var memberId:String;
	}
}