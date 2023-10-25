const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintWRrB0EX = BigInt("1292")
		const stringoSpwgRu = "xGNanRiI2Kj9n2LrOZ54MFeQNY9jze7LlzNuc1iwvgjQz412LOm0AGGTpB07"
		const stringNZxa9pS = "XP"
		const MARVELCOINIUMAeCA = await MARVELCOIN.new(uintWRrB0EX, stringoSpwgRu, stringNZxa9pS, {from: accounts[1]});
		const uinttwtuC5 = BigInt("1401")
		const addressbU9pn8 = accounts[0]
		const uintShtuCLh = BigInt("1823")
		const addressT3DuZpG = "0x0000000000000000000000000000000000000001"
		const byter1pSZsS = "0x0716021b16"
		const uintUeQC5ea = BigInt("400")
		const addressshiONBd = accounts[3]
		const uintTikYhUn = BigInt("395")
		const addressgUG2xrz = accounts[2]
		const addressPgb7RZ5 = accounts[2]
//		const boolQjt7Gmu = await MARVELCOINIUMAeCA.transfer.call(addressbU9pn8, uinttwtuC5, {from: accounts[3]});
//		const boolX5U6twu = await MARVELCOINIUMAeCA.burnFrom.call(addressT3DuZpG, uintShtuCLh, {from: accounts[0]});
//		const boolcrU4juf = await MARVELCOINIUMAeCA.approveAndCall.call(addressshiONBd, uintUeQC5ea, byter1pSZsS, {from: accounts[5]});
//		const booli0vCNBO = await MARVELCOINIUMAeCA.transferFrom.call(addressPgb7RZ5, addressgUG2xrz, uintTikYhUn, {from: accounts[4]});

		await expect(MARVELCOINIUMAeCA.transfer.call(addressbU9pn8, uinttwtuC5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintV1T1HAd = BigInt("4")
		const stringyorZVWf = "g7l7depuEWqsdolSKPES4ACAwzFqEy74tnmO2Adg0PNJy9SwQPv6R2658vRoAOb"
		const stringO6u8s0x = "afR"
		const MARVELCOINevNWTue = await MARVELCOIN.new(uintV1T1HAd, stringyorZVWf, stringO6u8s0x, {from: accounts[3]});
		const uint0vJy9z = BigInt("186")
		const addressY13G6eH = accounts[2]
		const uintAvtw68b = BigInt("1106")
		const addressHvhHZeq = accounts[3]
		const uinttJg2v6 = BigInt("1853")
		const uintD8ckWaI = BigInt("1681")
		const uintIvgTrYc = BigInt("2007")
		const addressLv7ZfVR = accounts[0]
		const boolCvQjend = await MARVELCOINevNWTue.approve.call(addressY13G6eH, uint0vJy9z, {from: accounts[4]});
		const boolJIr1xc = await MARVELCOINevNWTue.approve.call(addressHvhHZeq, uintAvtw68b, {from: accounts[3]});
//		const boolMUKnQsf = await MARVELCOINevNWTue.burn.call(uinttJg2v6, {from: accounts[0]});
//		const boolG2dl2SK = await MARVELCOINevNWTue.burn.call(uintD8ckWaI, {from: accounts[3]});
//		const boolTygpDvP = await MARVELCOINevNWTue.transfer.call(addressLv7ZfVR, uintIvgTrYc, {from: accounts[3]});

		assert.equal(boolCvQjend, true)
		assert.equal(boolJIr1xc, true)
		await expect(MARVELCOINevNWTue.burn.call(uinttJg2v6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintUH8fLse = BigInt("1285")
		const stringH4ZCEJv = "dyd47yqhWgEllMolM53k9r5QWwpKBY"
		const stringAmmYD33 = "fg08PlZt8xvIXdc3Y4zh9Rc7tzgLMk4cHvXnNhHv5mMurdJfPhMPvnJj1rssp4uivUmaMDrfe9uiS9DWyejgw"
		const MARVELCOINZifBjYN = await MARVELCOIN.new(uintUH8fLse, stringH4ZCEJv, stringAmmYD33, {from: accounts[1]});
		const uintuPt7w8w = BigInt("814")
		const address9w7cVb = accounts[5]
		const addressYf5qIBy = accounts[4]
		const bytekyXck7E = "0x0d0e151a1810121d070a081b181f041b"
		const uintdjzde01 = BigInt("324")
		const addressdvVC3GL = accounts[3]
		const uint0khxDY = BigInt("69")
		const addresspYgdGCB = accounts[5]
		const uintXlicFpf = BigInt("1259")
		const addressl1F9ZSN = accounts[2]
		const byteHk5i1BE = "0x170a16031308030c191d1a1c0e131a010c09100e0d061d06020b1e06091d061d"
		const uintAXFBfgg = BigInt("1672")
		const addressxSi0Lly = accounts[0]
//		const boolzGGtvtU = await MARVELCOINZifBjYN.transferFrom.call(addressYf5qIBy, address9w7cVb, uintuPt7w8w, {from: accounts[0]});
//		const booluFIUmk7 = await MARVELCOINZifBjYN.approveAndCall.call(addressdvVC3GL, uintdjzde01, bytekyXck7E, {from: accounts[0]});
//		const boolJzEtmBq = await MARVELCOINZifBjYN.burnFrom.call(addresspYgdGCB, uint0khxDY, {from: accounts[2]});
//		const boolvQoD2Sr = await MARVELCOINZifBjYN.approve.call(addressl1F9ZSN, uintXlicFpf, {from: accounts[3]});
//		const booljh6PLX = await MARVELCOINZifBjYN.approveAndCall.call(addressxSi0Lly, uintAXFBfgg, byteHk5i1BE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINZifBjYN.transferFrom.call(addressYf5qIBy, address9w7cVb, uintuPt7w8w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintXut22r1 = BigInt("795")
		const stringVNsArIG = "LCsviiJ3Sg4dzMYS6WXRtPZBYu7Qlwq03f4E5uM5Jwr5gjH7UGE1zdJMuepn"
		const stringlwEm0eJ = "E5QLXtwCXmwFd5w9Ls4xLLEzQfCQP36Ia9HQbHh9zGuJbRMHOnVuebLD7qU6r2x6I6rj9igegRP9"
		const MARVELCOINagc8toS = await MARVELCOIN.new(uintXut22r1, stringVNsArIG, stringlwEm0eJ, {from: accounts[3]});
		const byteQ0arhZg = "0x200307140303150c06201a0d1807090702101a09091809171b071f1211"
		const uintCqsU0MS = BigInt("179")
		const addressC5oGD5K = accounts[0]
		const uintD93ESID = BigInt("1609")
//		const boolOvMlo2G = await MARVELCOINagc8toS.approveAndCall.call(addressC5oGD5K, uintCqsU0MS, byteQ0arhZg, {from: accounts[1]});
//		const boolARSEeC = await MARVELCOINagc8toS.burn.call(uintD93ESID, {from: accounts[2]});

		await expect(MARVELCOINagc8toS.approveAndCall.call(addressC5oGD5K, uintCqsU0MS, byteQ0arhZg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintJsTCJsc = BigInt("1045")
		const stringvoCSbuI = "TfGsIkLySfpkW4J8X2zWSUqkEhZWsAdABHkWBgSaENHbsezoO8awuL5EcB7iDyIoQlUmuSc4kxt"
		const stringIBgijgS = "9dhUd8LSPMVQxLYftOzSAOqISj2xYKdFL1xh3DwjButNqVC58kHAc8PBkWbBpI6hw"
		const MARVELCOINI92G10 = await MARVELCOIN.new(uintJsTCJsc, stringvoCSbuI, stringIBgijgS, {from: accounts[1]});
		const uintgL6xYGY = BigInt("1660")
		const addressyoo9qnq = "0x0000000000000000000000000000000000000001"
//		const boolctrzMrd = await MARVELCOINI92G10.burnFrom.call(addressyoo9qnq, uintgL6xYGY, {from: accounts[2]});

		await expect(MARVELCOINI92G10.burnFrom.call(addressyoo9qnq, uintgL6xYGY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintu4JcXMx = BigInt("1277")
		const stringfu255ZT = "j0pnqdIpfVQs9Nszpv7NXOCT9I9sp8ag2PdEJ5NBApASUsF1hGjbMT5BSTVSLQ73fzZeBw"
		const string8jZDNF = "bIOCSAeT4clX9c9XCTpKh8L4ihv1jzhHXo27PEk8UVu5rq8PhAXIgk1kULFfuoh6BwUGwa7tdGGL1m61buD"
		const MARVELCOINDyquW6K = await MARVELCOIN.new(uintu4JcXMx, stringfu255ZT, string8jZDNF, {from: "0x0000000000000000000000000000000000000001"});
		const uintNn1CLy = BigInt("906")
		const addressEqZiVhP = accounts[2]
		const uinttyn0ZG9 = BigInt("248")
		const addressNOOBh8i = accounts[1]
		const addressYpB1qKR = accounts[0]
		const uintRPOcH12 = BigInt("1850")
		const addressJABqNgl = accounts[2]
		const boolyg7IelN = await MARVELCOINDyquW6K.transfer.call(addressEqZiVhP, uintNn1CLy, {from: accounts[4]});
		const bool6wUjjR = await MARVELCOINDyquW6K.transferFrom.call(addressYpB1qKR, addressNOOBh8i, uinttyn0ZG9, {from: accounts[2]});
		const boolZMtcIwR = await MARVELCOINDyquW6K.approve.call(addressJABqNgl, uintRPOcH12, {from: accounts[1]});
	});
})