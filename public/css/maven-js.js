function topImages(inputData) {
if ( inputData=='0' ) { document.topimages.src = 'images/top_2.jpg' ; }
if ( inputData=='1' ) { document.topimages.src = 'images/top_1.jpg' ; }
}

function topicsImages(inputData) {
if ( inputData=='0' ) { document.topicsimages.src = 'images/topics_2.jpg' ; }
if ( inputData=='1' ) { document.topicsimages.src = 'images/topics_1.jpg' ; }
}

function mapImages(inputData) {
if ( inputData=='0' ) { document.mapimages.src = 'images/map_2.jpg' ; }
if ( inputData=='1' ) { document.mapimages.src = 'images/map_1.jpg' ; }
}

function aboutImages(inputData) {
if ( inputData=='0' ) { document.aboutimages.src = 'images/about_2.jpg' ; }
if ( inputData=='1' ) { document.aboutimages.src = 'images/about_1.jpg' ; }
}

function blogImages(inputData) {
if ( inputData=='0' ) { document.blogimages.src = 'images/blog_2.jpg' ; }
if ( inputData=='1' ) { document.blogimages.src = 'images/blog_1.jpg' ; }
}

function contactImages(inputData) {
if ( inputData=='0' ) { document.contactimages.src = 'images/contact_2.jpg' ; }
if ( inputData=='1' ) { document.contactimages.src = 'images/contact_1.jpg' ; }
}

function coment() {
		var coment = document.getElementById('coment1');
		coment.innerHTML = '<p> 弊社は2003年6月に創業して以来、実際のシステム開発などに参画してまいりましたが、単なる請負開発ではなく、常にエマージング技術の利用を意識してまいりました。 とりわけ、Web2.0要素技術、オープンソースについては、Proof Of Conceptを実践していくことが重要であると考え、そのことをお客様に積極的に提案し開発してきました。 これまで概念（concept）だけが先行していたWeb2.0 要素技術については、プロトタイプや機能検証だけでなく、オープンソースの玉石混淆のなかから、実用的でビジネスで利用できるものを選択し、また自らオープンソース開発に携わっていくことで、実際の業務に効果的に使うにはどうしたらいいかを真剣に考え取り組んできたのです。</p><p> 創業から数年が経ち、オープンソース、Webサービス、そして、アジャイル開発手法といったこれまでのエマージング技術はスタンダードになりました。 エマージング技術を先行して採用してきた企業は、現在では大きな競争力を手に入れています。これらを採用することで、システムに先進性をもたらすだけでなく、コストメリットに寄与するなど、大きな競争力の源になったのです。</p><p>そして今、クラウドコンピューティングが注目されています。これは、オープンソースと安価なサーバ群、およびブロードバンドにより実現されるものです。高額なサーバ、ソフトウェア資源を自社で保有する必要がないため、コストメリットが大きいと考えられるモデルであり、必要に応じてサーバの資源を追加できるといった柔軟性・拡張性ももちます。 また、Webサービスで提供されるため、効率的な運用手段を提供します。多くはパソコンとインターネット環境だけあれば利用可能です。</p><p>一方で、クラウドコンピューティングは、信頼性、安全性が課題といわれています。</p><p>お客様の大切なデータを安全に管理すること、また、サーバをダウンさせることなく継続運用すること。この2つは基幹システムにとって重要な要件です。万一、事故があった場合に、対応や保障がしっかりしていなければ、大切なデータを預けようとは思われないでしょう。 クラウドコンピューティングをビジネスに活用することを躊躇されている方が多いのは、まさにこの信頼性、安全性が担保されてないからではないでしょうか。</p><p>そこでまた我々の出番です。エマージング技術の実用化の経験を生かし、今後はクラウドコンピューティングについても、Proof Of Conceptを実践してまいります。 具体的には、Amazon EC2やS3などを利用した業務システムや、弊社のオープンソースReflexをベースにしたWebサービス、MapReduceによる並列検索サービスなどを提供してまいります。 バーチャルテクノロジーとは仮想技術。クラウドを効率よく利用する技術の代名詞です。我々はクラウドコンピューティングの信頼性・安全性の課題を克服し、リスクを低減させ、皆様に安心して使っていただけるサービスを提供したいと考えております。 </p><p>クラウドコンピューティングをご検討されているお客様は、バーチャルテクノロジーのソフトウェア、サービスをぜひ一度、ご検討くださいますようお願い申し上げます。</p><input type="button" value="閉じる" onclick="comentEnd()" style="float:right;" /><div style="width:100%;text-align:right;"><img src="images/takezaki.gif" alt="takezaki" /></div>';
}

function comentEnd() {
		var end = document.getElementById('coment1');
		end.innerHTML = '<p> 弊社は2003年6月に創業して以来、実際のシステム開発などに参画してまいりましたが、単なる請負開発ではなく、常にエマージング技術の利用を意識してまいりました。 とりわけ、Web2.0要素技術、オープンソースについては、Proof Of Conceptを実践していくことが重要であると考え、そのことをお客様に積極的に提案し開発してきました。 これまで概念（concept）だけが先行していたWeb2.0 要素技術については、プロトタイプや機能検証だけでなく、オープンソースの玉石混淆のなかから、実用的でビジネスで利用できるものを選択し、また自らオープンソース開発に携わっていくことで、実際の業務に効果的に使うにはどうしたらいいかを真剣に考え取り組んできたのです。<span id="view" onclick="coment()">　　　.........全部読む</span><div style="width:100%;text-align:right;"><img src="images/takezaki.gif" alt="takezaki" /></div></p>';
}

