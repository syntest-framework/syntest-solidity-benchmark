const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintnHorAfu = BigInt("1420")
		const stringjHZCHF9 = "5RyxEnqA2to7R9xHbwKv41AWUIdjWSF7vc4qhNfWJeehbwGpbKa2VscsmLocsuy9JRuJm"
		const stringf3UjxUY = "75wfK58mBPdkm1kY7Uiim7l"
		const MARVELCOIN0lHXjv = await MARVELCOIN.new(uintnHorAfu, stringjHZCHF9, stringf3UjxUY, {from: accounts[4]});
		const uintAtia2I = BigInt("667")
		const addressdXEPTV5 = accounts[3]
		const addressHQKBAbr = "0x0000000000000000000000000000000000000001"
		const uintIxC9dMq = BigInt("434")
		const addressexIZBrZ = accounts[2]
//		const boolsGrqve2 = await MARVELCOIN0lHXjv.transferFrom.call(addressHQKBAbr, addressdXEPTV5, uintAtia2I, {from: accounts[2]});
//		const bools8cQhP3 = await MARVELCOIN0lHXjv.burnFrom.call(addressexIZBrZ, uintIxC9dMq, {from: accounts[5]});

		await expect(MARVELCOIN0lHXjv.transferFrom.call(addressHQKBAbr, addressdXEPTV5, uintAtia2I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintL133zs3 = BigInt("1002")
		const stringzKvwql = "uK0HsN5gaERYr5Cp5lIU7wcNEYPpUlApSeR7sSqW0gRx6a6dlXrXeqyJPIp"
		const stringKVfw7L0 = "YJSbuMN1FOi8kME1BYf2kCWS7YlnnqdtWbV9iLaIp7UICBzXQ3QehJ3V6J6Mts7kKJdy810ZVBYRJ2"
		const MARVELCOINlzUelJw = await MARVELCOIN.new(uintL133zs3, stringzKvwql, stringKVfw7L0, {from: "0x0000000000000000000000000000000000000001"});
		const uintX9GsYq6 = BigInt("1572")
		const addressxxWiq59 = accounts[2]
		const uintvplolV = BigInt("207")
		const addressuHnBIY5 = accounts[0]
		const addresstFXQTEA = accounts[2]
		const uints2rYe6 = BigInt("734")
		const boolhjmgcGG = await MARVELCOINlzUelJw.burnFrom.call(addressxxWiq59, uintX9GsYq6, {from: "0x0000000000000000000000000000000000000001"});
		const booleccflfV = await MARVELCOINlzUelJw.transferFrom.call(addresstFXQTEA, addressuHnBIY5, uintvplolV, {from: accounts[0]});
		const boolfK2bZie = await MARVELCOINlzUelJw.burn.call(uints2rYe6, {from: accounts[3]});
	});

	it('test for MARVELCOIN', async () => {
		const uintDnebW6t = BigInt("172")
		const stringvMpavGm = "wGcBfErEJrJT5c7gNPmtlURnzb"
		const stringuWJ8m0M = "VLZphwOorN5rdi"
		const MARVELCOINYpATYJG = await MARVELCOIN.new(uintDnebW6t, stringvMpavGm, stringuWJ8m0M, {from: accounts[4]});
		const byteyaq93dU = "0x1a11140514080c07081f0f0607151318"
		const uintGuuCJCl = BigInt("1995")
		const addressk9LuUf6 = "0x0000000000000000000000000000000000000001"
		const bytekjM5WG4 = "0x1e010d1819200b171115"
		const uintDQv4wWN = BigInt("1637")
		const addressa8Y6AHc = accounts[3]
		const uintGWQYDEz = BigInt("1327")
		const addressk0wwypK = accounts[1]
		const addressBcLNZen = accounts[2]
//		const boolQZJFCyQ = await MARVELCOINYpATYJG.approveAndCall.call(addressk9LuUf6, uintGuuCJCl, byteyaq93dU, {from: "0x0000000000000000000000000000000000000001"});
//		const booloBxFHYE = await MARVELCOINYpATYJG.approveAndCall.call(addressa8Y6AHc, uintDQv4wWN, bytekjM5WG4, {from: accounts[1]});
//		const boolkw18xVA = await MARVELCOINYpATYJG.transferFrom.call(addressBcLNZen, addressk0wwypK, uintGWQYDEz, {from: accounts[0]});

		await expect(MARVELCOINYpATYJG.approveAndCall.call(addressk9LuUf6, uintGuuCJCl, byteyaq93dU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintP8Od13 = BigInt("952")
		const stringoSaoseQ = "BzXvNpfH1wdkUdgvuFPPmNdFuoGMPNdkrj"
		const stringMIS0PAE = "vMHrRk7IOBtbXCAnCPGhFXbSLAphKk3Do0FxzXfNOEqu2ogyNFzRfVIk"
		const MARVELCOINzkmzyRp = await MARVELCOIN.new(uintP8Od13, stringoSaoseQ, stringMIS0PAE, {from: accounts[3]});
		const uinto2EbBeb = BigInt("1789")
		const addresshi8WLN5 = accounts[1]
		const bytera30AD = "0x1f1618091d140c021d"
		const uintgdE9XvW = BigInt("1116")
		const addressr4H43FD = accounts[4]
		const uinty83aKAM = BigInt("976")
		const addressapll0Py = accounts[2]
		const addressQgG6Z3l = accounts[2]
//		const boolO24bw4w = await MARVELCOINzkmzyRp.transfer.call(addresshi8WLN5, uinto2EbBeb, {from: accounts[5]});
//		const boolLW1eRox = await MARVELCOINzkmzyRp.approveAndCall.call(addressr4H43FD, uintgdE9XvW, bytera30AD, {from: accounts[2]});
//		const boolrDSwJE = await MARVELCOINzkmzyRp.transferFrom.call(addressQgG6Z3l, addressapll0Py, uinty83aKAM, {from: accounts[1]});

		await expect(MARVELCOINzkmzyRp.transfer.call(addresshi8WLN5, uinto2EbBeb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintf7uqkzp = BigInt("558")
		const stringHfg13J5 = "PlSQarOrSF5SAMWa7BM8E1A"
		const stringxZNUSWR = "ouJhCESWQLgUbotPGyU8sbsI70CGMhoNsJ6pgRZIprTFC2H095J1onENtYAEoz8TisPtoJJ8lfBauLFpEc9dcSgbBRys"
		const MARVELCOINWgI3yhK = await MARVELCOIN.new(uintf7uqkzp, stringHfg13J5, stringxZNUSWR, {from: accounts[0]});
		const uintp0CMrk = BigInt("304")
		const addressdAxFsX = "0x0000000000000000000000000000000000000001"
		const uintr58JIAE = BigInt("239")
		const byte4Nflgi = "0x061d0808091d1c04"
		const uintHPkrq5 = BigInt("1056")
		const addressEgsRrK8 = accounts[0]
//		const boolk1FaI8Q = await MARVELCOINWgI3yhK.burnFrom.call(addressdAxFsX, uintp0CMrk, {from: accounts[4]});
//		const boolrEsjoaK = await MARVELCOINWgI3yhK.burn.call(uintr58JIAE, {from: accounts[5]});
//		const boolFc3mQuI = await MARVELCOINWgI3yhK.approveAndCall.call(addressEgsRrK8, uintHPkrq5, byte4Nflgi, {from: accounts[1]});

		await expect(MARVELCOINWgI3yhK.burnFrom.call(addressdAxFsX, uintp0CMrk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintoJZFmln = BigInt("1654")
		const stringpo3mDca = "8WbCStnmzu5HDfmIbv8fvn49QY2QTak9LJDdCdF2y7ctFzIODaysGq1"
		const stringQxFbGVN = "mT4UCenwmMI2dOyHZixr8hw2HCdXYWKzQxGzZBGcyOXdY9GQpbgS8Ni41JjljUnd9IAqM5Kvj9PO2gMmAq4"
		const MARVELCOINzhg31El = await MARVELCOIN.new(uintoJZFmln, stringpo3mDca, stringQxFbGVN, {from: accounts[3]});
		const uintLJIz9qw = BigInt("57")
		const addressWE0OFWM = accounts[2]
		const uintP7KBm42 = BigInt("82")
		const addressye72mEj = accounts[3]
		const uintv2bjl1B = BigInt("227")
		const uintjotfuM = BigInt("1420")
		const boolHAzdHf = await MARVELCOINzhg31El.approve.call(addressWE0OFWM, uintLJIz9qw, {from: accounts[0]});
		const boolrZN7jsv = await MARVELCOINzhg31El.approve.call(addressye72mEj, uintP7KBm42, {from: accounts[4]});
		const boolEahy49M = await MARVELCOINzhg31El.burn.call(uintv2bjl1B, {from: accounts[3]});
//		const boolLcAVAR4 = await MARVELCOINzhg31El.burn.call(uintjotfuM, {from: accounts[1]});

		assert.equal(boolEahy49M, true)
		assert.equal(boolHAzdHf, true)
		assert.equal(boolrZN7jsv, true)
		await expect(MARVELCOINzhg31El.burn.call(uintjotfuM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintTIvvzxm = BigInt("1420")
		const stringjHZCHF9 = "5RyxEnqA2to7R9xHbwKv41AWUIdjWSF7vc4qhNfWJeehbwGpbKa2VscsmLocsuy9JRuJm"
		const stringf3UjxUY = "75wfK58mBPdkm1kY7Uiim7l"
		const MARVELCOIN0lHXjv = await MARVELCOIN.new(uintTIvvzxm, stringjHZCHF9, stringf3UjxUY, {from: accounts[4]});
		const uintelMKSVS = BigInt("1525")
		const addressQcAt1T = accounts[4]
		const uintOn6H9Ec = BigInt("1783")
		const addressaVo6rLc = accounts[2]
		const addressLMxIAWj = accounts[4]
		const uint6NSZYR = BigInt("434")
		const addressK6vRkWQ = accounts[2]
//		const boolkxgaBVX = await MARVELCOIN0lHXjv.burnFrom.call(addressQcAt1T, uintelMKSVS, {from: "0x0000000000000000000000000000000000000001"});
//		const booleughwGM = await MARVELCOIN0lHXjv.transferFrom.call(addressLMxIAWj, addressaVo6rLc, uintOn6H9Ec, {from: accounts[1]});
//		const bools8cQhP3 = await MARVELCOIN0lHXjv.burnFrom.call(addressK6vRkWQ, uint6NSZYR, {from: accounts[5]});

		await expect(MARVELCOIN0lHXjv.burnFrom.call(addressQcAt1T, uintelMKSVS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintD54IcGx = BigInt("952")
		const stringoSaoseQ = "BzXvNpfH1wdkUdgvuFPPmNdFuoGMPNdkrj"
		const stringMIS0PAE = "vMHrRk7IOBtbXCAnCPGhFXbSLAphKk3Do0FxzXfNOEqu2ogyNFzRfVIk"
		const MARVELCOINzkmzyRp = await MARVELCOIN.new(uintD54IcGx, stringoSaoseQ, stringMIS0PAE, {from: accounts[3]});
		const uintbWlvbOY = BigInt("986")
		const addressroX1ilm = accounts[2]
		const uintd6je1bc = BigInt("379")
		const uintFK8MU2f = BigInt("2013")
		const addressIaHVnUz = accounts[4]
		const addressFPXLqf = accounts[5]
		const booltyc65n = await MARVELCOINzkmzyRp.transfer.call(addressroX1ilm, uintbWlvbOY, {from: accounts[3]});
//		const boolYfEIiYH = await MARVELCOINzkmzyRp.burn.call(uintd6je1bc, {from: accounts[2]});
//		const boolC9Jlem7 = await MARVELCOINzkmzyRp.transferFrom.call(addressFPXLqf, addressIaHVnUz, uintFK8MU2f, {from: accounts[1]});

		assert.equal(booltyc65n, true)
		await expect(MARVELCOINzkmzyRp.burn.call(uintd6je1bc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})