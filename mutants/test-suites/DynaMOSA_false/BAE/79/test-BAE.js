const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresszLjvlNy = accounts[1]
		const BAErlvT3yp = await BAE.new(addresszLjvlNy, {from: accounts[0]});
		const uintc5i7tvQ = BigInt("863")
		const uintN52qkDa = BigInt("1353")
		const uintoI1mtmd = BigInt("68")
		const uintkLciKfh = BigInt("398")
		const uinthsQgY1s = BigInt("858")
//		const uint256sHMOZDY = await BAErlvT3yp.createAuction.call(uintkLciKfh, uintoI1mtmd, uintN52qkDa, uintc5i7tvQ, {from: accounts[2]});
//		const uint256JYQoBO6 = await BAErlvT3yp.bid.call(uinthsQgY1s, {from: accounts[4]});

		await expect(BAErlvT3yp.createAuction.call(uintkLciKfh, uintoI1mtmd, uintN52qkDa, uintc5i7tvQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressV2Xeqga = accounts[4]
		const BAEoQuugP1 = await BAE.new(addressV2Xeqga, {from: accounts[0]});
		const uintCMwHqp = BigInt("1468")
		const uintBLCO3I = BigInt("1874")
		const uintmHLZJY7 = BigInt("1470")
		const uintedBeQ8b = BigInt("720")
		const uintoV8EZOK = BigInt("1113")
//		const uint256YpNp2t = await BAEoQuugP1.setAuctionFee.call(uintCMwHqp, {from: accounts[5]});
//		const uint256FlZhgE = await BAEoQuugP1.concludeAuction.call(uintBLCO3I, {from: accounts[5]});
//		const uint256vMEmptA = await BAEoQuugP1.setAuctionFee.call(uintmHLZJY7, {from: accounts[3]});
//		const uint256IqSiWOA = await BAEoQuugP1.setAuctionFee.call(uintedBeQ8b, {from: accounts[1]});
//		const uint256XJl1Qlr = await BAEoQuugP1.bid.call(uintoV8EZOK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEoQuugP1.setAuctionFee.call(uintCMwHqp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressXASTqQ4 = accounts[2]
		const BAEKs24fa = await BAE.new(addressXASTqQ4, {from: "0x0000000000000000000000000000000000000001"});
		const uintHuR8dR2 = BigInt("1891")
		const uintN3LjUm4 = BigInt("1401")
		const uintL0T32KI = BigInt("1815")
		const uintUQWFSFN = BigInt("1803")
		const uintzdIk13D = BigInt("882")
		const uintozTUrq = BigInt("61")
		const uint256iWdV8Y = await BAEKs24fa.bid.call(uintHuR8dR2, {from: accounts[5]});
		const uint256bGWDtpY = await BAEKs24fa.createAuction.call(uintzdIk13D, uintUQWFSFN, uintL0T32KI, uintN3LjUm4, {from: accounts[2]});
		const uint256hC0K5hH = await BAEKs24fa.bid.call(uintozTUrq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BAE', async () => {
		const addressTJwkZwx = accounts[2]
		const BAEw8dR54Y = await BAE.new(addressTJwkZwx, {from: accounts[3]});
		const uinta3DQt51 = BigInt("1012")
		const uinttjOOZ3I = BigInt("146")
		const uintAKGF8bW = BigInt("1791")
		const uintlO3OJIh = BigInt("427")
		const uintJeHgiZ1 = BigInt("1760")
		const uintrVHq9go = BigInt("356")
		const uintota0CK5 = BigInt("190")
		const uintgJMvLyT = BigInt("1279")
		const uintw75pyJK = BigInt("665")
		const uinttNh5esi = BigInt("188")
		const uintJV8mKq = BigInt("1603")
//		const uint256vNj0NY = await BAEw8dR54Y.resetAuction.call(uintAKGF8bW, uinttjOOZ3I, uinta3DQt51, {from: accounts[0]});
//		const uint256Ot2wnHe = await BAEw8dR54Y.resetAuction.call(uintrVHq9go, uintJeHgiZ1, uintlO3OJIh, {from: accounts[0]});
//		const uint256sDVacza = await BAEw8dR54Y.buy.call(uintota0CK5, {from: accounts[0]});
//		const uint256h9of9lZ = await BAEw8dR54Y.createAuction.call(uintJV8mKq, uinttNh5esi, uintw75pyJK, uintgJMvLyT, {from: accounts[0]});

		await expect(BAEw8dR54Y.resetAuction.call(uintAKGF8bW, uinttjOOZ3I, uinta3DQt51, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOcGsCd1 = accounts[1]
		const BAEqBGMnJ = await BAE.new(addressOcGsCd1, {from: accounts[0]});
		const uintRvZ8oGp = BigInt("1028")
		const uintITY8fIk = BigInt("1374")
		const uintaTdivbf = BigInt("1710")
		const uintkGtx5hq = BigInt("1166")
		const uintKtigMgV = BigInt("1575")
		const uintbSv4pwQ = BigInt("33")
		const uintXXStEs = BigInt("1307")
		const uintCEIdcVa = BigInt("855")
		const uintDGwItg = BigInt("864")
		const uinti6BJne3 = BigInt("1834")
		const uintdHLY3L8 = BigInt("1157")
//		const uint256kIU2aNK = await BAEqBGMnJ.buy.call(uintRvZ8oGp, {from: accounts[1]});
//		const uint256MLvXRR = await BAEqBGMnJ.buy.call(uintITY8fIk, {from: accounts[2]});
//		const uint256XxWh1Wd = await BAEqBGMnJ.concludeAuction.call(uintaTdivbf, {from: accounts[4]});
//		const uint256oGFSQv = await BAEqBGMnJ.createAuction.call(uintXXStEs, uintbSv4pwQ, uintKtigMgV, uintkGtx5hq, {from: accounts[2]});
//		const uint256TPVRpPB = await BAEqBGMnJ.createAuction.call(uintdHLY3L8, uinti6BJne3, uintDGwItg, uintCEIdcVa, {from: accounts[3]});

		await expect(BAEqBGMnJ.buy.call(uintRvZ8oGp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressZ20l00 = accounts[3]
		const BAEX5SBnwG = await BAE.new(addressZ20l00, {from: accounts[2]});
		const uintyL3SA2U = BigInt("862")
		const uintslBASWI = BigInt("629")
		const uinttSByD9L = BigInt("746")
		const uintxv4gbpD = BigInt("1912")
		const uintfEnmGJe = BigInt("1379")
		const uint1yYchq = BigInt("1784")
		const uintNAEhSw4 = BigInt("1201")
//		const uint256zfKD9pn = await BAEX5SBnwG.concludeAuction.call(uintyL3SA2U, {from: accounts[1]});
//		const uint2563QNhwb = await BAEX5SBnwG.buy.call(uintslBASWI, {from: accounts[0]});
//		const uint256tDRPhnP = await BAEX5SBnwG.createAuction.call(uint1yYchq, uintfEnmGJe, uintxv4gbpD, uinttSByD9L, {from: accounts[0]});
//		const uint256sxVMa1f = await BAEX5SBnwG.bid.call(uintNAEhSw4, {from: accounts[0]});

		await expect(BAEX5SBnwG.concludeAuction.call(uintyL3SA2U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressNpiGQKu = accounts[1]
		const BAEQHKkKfH = await BAE.new(addressNpiGQKu, {from: accounts[5]});
		const uintOtdmZGo = BigInt("1971")
		const uintBMgUuAm = BigInt("261")
		const uintdU5zpmb = BigInt("1515")
		const uintxV636Hk = BigInt("1764")
		const uintme6T09 = BigInt("1152")
		const uintQAi0GUa = BigInt("467")
//		const uint256Kyy1M7n = await BAEQHKkKfH.bid.call(uintOtdmZGo, {from: accounts[2]});
//		const uint256z24CnUP = await BAEQHKkKfH.bid.call(uintBMgUuAm, {from: accounts[0]});
//		const uint256UX4HYIZ = await BAEQHKkKfH.buy.call(uintdU5zpmb, {from: accounts[4]});
//		const uint256sDR5M0B = await BAEQHKkKfH.resetAuction.call(uintQAi0GUa, uintme6T09, uintxV636Hk, {from: accounts[3]});

		await expect(BAEQHKkKfH.bid.call(uintOtdmZGo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})