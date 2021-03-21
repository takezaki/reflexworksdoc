package 
{
	import flash.events.Event;
	import mx.collections.ArrayCollection;
	import flash.events.EventDispatcher;
	
	/**
	 * 住所録.
	 */
	public class AddressBook
	{
		/**
		 * 住所データをコレクションとして保持します.
		 */
		[ArrayElementType("AddressEntity")]
		private var data:/*AddressEntity*/ArrayCollection = new ArrayCollection();
		
		/**
		 * 選択中住所データ順番.
		 */
		private var current:int;
		
		/**
		 * コンストラクタ.
		 */
		public function AddressBook()
		{
			var cnt:int = 1;
			var rec:AddressEntity;
			
			rec = new AddressEntity();
			
			rec.addressId = cnt++;
			rec.zipCode = "123-0001"
			rec.address1 = "東京都品川区";
			rec.address2 = "美浜5丁目6-11";
			rec.address3 = "大滝ビル5F";
			rec.companyName = "大滝産業株式会社";
			rec.department = "総務部";
			rec.name = "広田三郎";
			rec.phone = "93-1234-5678";
			rec.memberId = "201110001";
			data.addItem(rec);

			rec = new AddressEntity();
			rec.addressId = cnt++;
			rec.zipCode = "123-0002"
			rec.address1 = "東京都足立区";
			rec.address2 = "瀬田2丁目2-1";
			rec.address3 = "";
			rec.companyName = "株式会社番塔";
			rec.department = "営業部";
			rec.name = "朝日建造";
			rec.phone = "93-2233-9911";
			rec.memberId = "201110002";
			data.addItem(rec);

			rec = new AddressEntity();
			rec.addressId = cnt++;
			rec.zipCode = "123-0003"
			rec.address1 = "東京都新宿区";
			rec.address2 = "丸の内1丁目1-1";
			rec.address3 = "新宿丸農ビル2F";
			rec.companyName = "丸農テック株式会社";
			rec.department = "技術部";
			rec.name = "宗田元";
			rec.phone = "93-4578-3146";
			rec.memberId = "201110015";
			data.addItem(rec);
		}

		/**
		 * 住所データのコレクションを取得.
		 * 
		 * @return	住所データのコレクション。
		 */
		[ArrayElementType("AddressEntity")]
		public function getArray():/*AddressEntity*/ArrayCollection {
			return data;
		}
		
		/**
		 * 住所データを取得.
		 * 
		 * @param	index	取得する住所データ順番。
		 * @return	住所データ。
		 */
		public function getData(index:int):AddressEntity {
			return data[index];
		}

		/**
		 * データ件数を取得.
		 * 
		 * @return	データ件数。
		 */
		public function getCount():int {
			return data.length;
		}
	}
}