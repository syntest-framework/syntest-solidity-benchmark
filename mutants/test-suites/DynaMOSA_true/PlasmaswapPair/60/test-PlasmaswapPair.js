const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairBlpUxo = await PlasmaswapPair.new({from: accounts[2]});
		const byteUSkke1u = "0x12111b1a02131400060a1f020d1214161818151702111010130d12131f0619"
		const addresskh2uWQc = accounts[4]
		const uintUzhb5sH = BigInt("1508")
		const uintCH9pAWQ = BigInt("677")
		const addressaZQzt6Z = accounts[4]
		const addressccUKjf = accounts[3]
		const addressx8Mrnu7 = accounts[5]
		const uint112DPoFbrZ = await PlasmaswapPairBlpUxo.getReserves.call({from: accounts[1]});
//		const uintey6Sns = await PlasmaswapPairBlpUxo.swap.call(uintCH9pAWQ, uintUzhb5sH, addresskh2uWQc, byteUSkke1u, {from: "0x0000000000000000000000000000000000000001"});
//		const uintT6xLUBm = await PlasmaswapPairBlpUxo.burn.call(addressaZQzt6Z, {from: accounts[4]});
//		const addressF5kWBaK = await PlasmaswapPairBlpUxo.initialize.call(addressx8Mrnu7, addressccUKjf, {from: accounts[4]});

		await expect(PlasmaswapPairBlpUxo.swap.call(uintCH9pAWQ, uintUzhb5sH, addresskh2uWQc, byteUSkke1u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaCvEb2x = await PlasmaswapPair.new({from: accounts[0]});
		const addressi8M5Ce2 = accounts[0]
		const addressYlt06Bd = accounts[2]
		const addressFnIcV08 = accounts[1]
		const uint112cPjBn8 = await PlasmaswapPairaCvEb2x.getReserves.call({from: accounts[2]});
//		const addressu5ZPaGn = await PlasmaswapPairaCvEb2x.skim.call(addressi8M5Ce2, {from: accounts[4]});
//		const addressegOGgM6 = await PlasmaswapPairaCvEb2x.skim.call(addressYlt06Bd, {from: accounts[2]});
//		await PlasmaswapPairaCvEb2x.sync.call({from: accounts[3]});
//		const uintuF6aFzE = await PlasmaswapPairaCvEb2x.mint.call(addressFnIcV08, {from: accounts[3]});

		await expect(PlasmaswapPairaCvEb2x.skim.call(addressi8M5Ce2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairp4BGiLy = await PlasmaswapPair.new({from: accounts[1]});
		const addressipkL4Qo = accounts[4]
		const addresszUNPy3 = accounts[0]
		const addressX3XIyYF = accounts[1]
		const addressHr3vQkL = accounts[1]
//		await PlasmaswapPairp4BGiLy.lock.call({from: accounts[2]});
//		const addressPSLc4A3 = await PlasmaswapPairp4BGiLy.initialize.call(addresszUNPy3, addressipkL4Qo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjOSkGR = await PlasmaswapPairp4BGiLy.skim.call(addressX3XIyYF, {from: accounts[4]});
//		const addressu1gZJj0 = await PlasmaswapPairp4BGiLy.skim.call(addressHr3vQkL, {from: accounts[1]});
//		const uint112xWwf2Ib = await PlasmaswapPairp4BGiLy.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairp4BGiLy.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjpWGce9 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressg5jcue9 = accounts[0]
		const addressR6OVA91 = accounts[3]
		const addressR96bQHn = accounts[2]
		const addressMuulUh = accounts[0]
		const addressIoJnNIx = accounts[1]
		const addressbyPc0B3 = accounts[4]
		const addresshhFo3nr = await PlasmaswapPairjpWGce9.skim.call(addressg5jcue9, {from: accounts[0]});
		const addressbMeDGsa = await PlasmaswapPairjpWGce9.skim.call(addressR6OVA91, {from: accounts[0]});
		const addressgeFap0j = await PlasmaswapPairjpWGce9.initialize.call(addressMuulUh, addressR96bQHn, {from: accounts[3]});
		const addressU3Xq5PR = await PlasmaswapPairjpWGce9.initialize.call(addressbyPc0B3, addressIoJnNIx, {from: accounts[5]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjIcTn1A = await PlasmaswapPair.new({from: accounts[4]});
		const addressJf1N5Rk = accounts[3]
		const addressiRP9JT0 = accounts[1]
//		const uintmI1T0jm = await PlasmaswapPairjIcTn1A.mint.call(addressJf1N5Rk, {from: accounts[1]});
//		const uintTOWwqHQ = await PlasmaswapPairjIcTn1A.mint.call(addressiRP9JT0, {from: accounts[1]});

		await expect(PlasmaswapPairjIcTn1A.mint.call(addressJf1N5Rk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaireIDS5sj = await PlasmaswapPair.new({from: accounts[0]});
		const addressnafHylG = accounts[3]
		const addressyyQ9sR = "0x0000000000000000000000000000000000000001"
		const byteiavLDJo = "0x130f1e021e011c0c061e0c1a0e041a110e"
		const addressVNRhuNT = accounts[0]
		const uintLHG1s3b = BigInt("1755")
		const uintTRk8OI4 = BigInt("1070")
		const addressjVYtPOF = accounts[0]
		const byteptMzRNh = "0x191e131407031c0d07141f1b03110c000c190810110610131703"
		const addressYMGYoZf = accounts[2]
		const uintbWeFBDQ = BigInt("1873")
		const uintAwFhPNB = BigInt("1547")
//		const addressDJ2lUP8 = await PlasmaswapPaireIDS5sj.initialize.call(addressyyQ9sR, addressnafHylG, {from: accounts[2]});
//		const uintTsAiynB = await PlasmaswapPaireIDS5sj.swap.call(uintTRk8OI4, uintLHG1s3b, addressVNRhuNT, byteiavLDJo, {from: accounts[1]});
//		const uint112JJUbMMQ = await PlasmaswapPaireIDS5sj.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintHNT9Z2q = await PlasmaswapPaireIDS5sj.burn.call(addressjVYtPOF, {from: accounts[1]});
//		const uintYyAjWOs = await PlasmaswapPaireIDS5sj.swap.call(uintAwFhPNB, uintbWeFBDQ, addressYMGYoZf, byteptMzRNh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPaireIDS5sj.initialize.call(addressyyQ9sR, addressnafHylG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairAT3CNhb = await PlasmaswapPair.new({from: accounts[0]});
		const addressWNJzGy = "0x0000000000000000000000000000000000000001"
		const addressoLPhXjd = accounts[2]
		const byteNSbnHiD = "0x0f051d080c1a1f1c0b061b1e11090f0c1c1604150d161905010e0e1119"
		const addressAg3Wcq0 = accounts[1]
		const uintS2eDHog = BigInt("10")
		const uintlAv3ReG = BigInt("640")
		const addressbGtdU4p = accounts[3]
		const addresse5zviLX = accounts[1]
		const addressIHELut4 = accounts[4]
		const addressKpwHeR = accounts[3]
//		const uintGB0QcO5 = await PlasmaswapPairAT3CNhb.burn.call(addressWNJzGy, {from: accounts[1]});
//		const uintv7dKiyr = await PlasmaswapPairAT3CNhb.burn.call(addressoLPhXjd, {from: accounts[4]});
//		const uintXEDoPHR = await PlasmaswapPairAT3CNhb.swap.call(uintlAv3ReG, uintS2eDHog, addressAg3Wcq0, byteNSbnHiD, {from: accounts[2]});
//		const address0ROAgZ = await PlasmaswapPairAT3CNhb.skim.call(addressbGtdU4p, {from: accounts[2]});
//		const addressXVM7F6L = await PlasmaswapPairAT3CNhb.initialize.call(addressIHELut4, addresse5zviLX, {from: accounts[2]});
//		const addresskUw8cXW = await PlasmaswapPairAT3CNhb.skim.call(addressKpwHeR, {from: accounts[0]});

		await expect(PlasmaswapPairAT3CNhb.burn.call(addressWNJzGy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairohG8I78 = await PlasmaswapPair.new({from: accounts[1]});
		const addressCApewT = accounts[4]
//		await PlasmaswapPairohG8I78.sync.call({from: accounts[3]});
//		const addressoA5uNQF = await PlasmaswapPairohG8I78.skim.call(addressCApewT, {from: accounts[4]});

		await expect(PlasmaswapPairohG8I78.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairohG8I78 = await PlasmaswapPair.new({from: accounts[1]});
		const addressfobPQJ = accounts[2]
		const addressLOji9e = accounts[0]
		const addressLQNUepx = accounts[6]
		const addressH4v1QK = accounts[4]
		const addressBz0LIXx = await PlasmaswapPairohG8I78.initialize.call(addressLOji9e, addressfobPQJ, {from: accounts[1]});
//		const addressjg5ENxw = await PlasmaswapPairohG8I78.initialize.call(addressH4v1QK, addressLQNUepx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairohG8I78.initialize.call(addressH4v1QK, addressLQNUepx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})