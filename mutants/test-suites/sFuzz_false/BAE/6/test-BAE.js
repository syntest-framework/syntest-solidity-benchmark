const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressIUFNmGw = "0x0000000000000000000000000000000000000001"
		const BAEKvNt8sF = await BAE.new(addressIUFNmGw, {from: accounts[2]});
		const uintWSbyuaw = BigInt("1659")
		const uintEQXG3oM = BigInt("981")
		const uintlL18tRi = BigInt("654")
		const uintF7UCUWc = BigInt("1192")
		const uintoyqBgiO = BigInt("2004")
		const uintFZTq1Dq = BigInt("2029")
		const uintJgW3gJl = BigInt("1310")
		const uintPzLLzOX = BigInt("967")
		const uintLWsDoqD = BigInt("1370")
		const uintMjzazY3 = BigInt("946")
		const uintTH3Vz1o = BigInt("600")
//		const uint256lg8TWar = await BAEKvNt8sF.setAuctionFee.call(uintWSbyuaw, {from: accounts[2]});
//		const uint256dXJ3VuR = await BAEKvNt8sF.setAuctionFee.call(uintEQXG3oM, {from: accounts[3]});
//		const uint256cx8BrfO = await BAEKvNt8sF.createAuction.call(uintFZTq1Dq, uintoyqBgiO, uintF7UCUWc, uintlL18tRi, {from: accounts[0]});
//		const uint256uPLpzZ = await BAEKvNt8sF.changePrintFee.call(uintJgW3gJl, {from: accounts[5]});
//		const uint256M3ivX8N = await BAEKvNt8sF.createAuction.call(uintTH3Vz1o, uintMjzazY3, uintLWsDoqD, uintPzLLzOX, {from: accounts[1]});

		await expect(BAEKvNt8sF.setAuctionFee.call(uintWSbyuaw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspo7fAkG = accounts[2]
		const BAEwCvJbuz = await BAE.new(addresspo7fAkG, {from: accounts[4]});
		const uintV4mx2cZ = BigInt("1112")
		const uintu4UvKh3 = BigInt("1340")
		const uintKNSBFJs = BigInt("734")
		const uintkXG2VZR = BigInt("1658")
		const uintckYFXBr = BigInt("536")
		const uintCMSKx5N = BigInt("1650")
		const uintuP8QYop = BigInt("1324")
//		const uint256rqXboLH = await BAEwCvJbuz.bid.call(uintV4mx2cZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256E3ARQQR = await BAEwCvJbuz.resetAuction.call(uintkXG2VZR, uintKNSBFJs, uintu4UvKh3, {from: accounts[1]});
//		const uint256NqN3h1b = await BAEwCvJbuz.resetAuction.call(uintuP8QYop, uintCMSKx5N, uintckYFXBr, {from: accounts[0]});

		await expect(BAEwCvJbuz.bid.call(uintV4mx2cZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressFwqboV = accounts[1]
		const BAEEFfbupo = await BAE.new(addressFwqboV, {from: accounts[0]});
		const uintrjnOkUr = BigInt("1938")
		const uintSncqbex = BigInt("519")
		const uintTUGmrCc = BigInt("1242")
		const uintIbV5xIQ = BigInt("1052")
		const uintTrcZtv5 = BigInt("1775")
//		const uint2568EXWVN = await BAEEFfbupo.buy.call(uintrjnOkUr, {from: accounts[0]});
//		const uint256EzjGe8n = await BAEEFfbupo.bid.call(uintSncqbex, {from: accounts[0]});
//		const uint256mOUBovG = await BAEEFfbupo.bid.call(uintTUGmrCc, {from: accounts[4]});
//		const uint256Sn7mwyc = await BAEEFfbupo.bid.call(uintIbV5xIQ, {from: accounts[2]});
//		const uint256eAtpl7R = await BAEEFfbupo.changePrintFee.call(uintTrcZtv5, {from: accounts[5]});

		await expect(BAEEFfbupo.buy.call(uintrjnOkUr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressxqb6m8 = accounts[0]
		const BAEQ1FO79j = await BAE.new(addressxqb6m8, {from: accounts[0]});
		const uintJLGWI8I = BigInt("1381")
		const uintFL1pCfN = BigInt("602")
		const uintWM2wYR7 = BigInt("930")
		const uintB3aFGB = BigInt("1355")
		const uintrORFo4T = BigInt("265")
		const uintv8Ek9IW = BigInt("1562")
		const uintaxfbHny = BigInt("1022")
		const uintXaQTCK = BigInt("137")
		const uintJO7sI3Z = BigInt("1151")
//		const uint256uN0Z7gj = await BAEQ1FO79j.createAuction.call(uintB3aFGB, uintWM2wYR7, uintFL1pCfN, uintJLGWI8I, {from: accounts[4]});
//		const uint256t0R4Hjy = await BAEQ1FO79j.resetAuction.call(uintaxfbHny, uintv8Ek9IW, uintrORFo4T, {from: accounts[3]});
//		const uint256ozz1kGU = await BAEQ1FO79j.setAuctionFee.call(uintXaQTCK, {from: accounts[3]});
//		const uint256gal8839 = await BAEQ1FO79j.buy.call(uintJO7sI3Z, {from: accounts[1]});

		await expect(BAEQ1FO79j.createAuction.call(uintB3aFGB, uintWM2wYR7, uintFL1pCfN, uintJLGWI8I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressZi1B7Vu = accounts[0]
		const BAEr8YBfP = await BAE.new(addressZi1B7Vu, {from: accounts[3]});
		const uintSCw749b = BigInt("1831")
		const uintooTChj4 = BigInt("1197")
		const uintJw8bXY = BigInt("940")
		const uinteLgmErj = BigInt("399")
		const uintLUXZnJT = BigInt("717")
		const uintOevTaMr = BigInt("394")
		const uintkLm4UZM = BigInt("1868")
		const uintv8VgKRw = BigInt("1992")
//		const uint256quqNbDX = await BAEr8YBfP.concludeAuction.call(uintSCw749b, {from: accounts[5]});
//		const uint256z2GouYk = await BAEr8YBfP.setAuctionFee.call(uintooTChj4, {from: accounts[4]});
//		const uint256W7GlpUu = await BAEr8YBfP.resetAuction.call(uintLUXZnJT, uinteLgmErj, uintJw8bXY, {from: accounts[2]});
//		const uint256dOg5Ul = await BAEr8YBfP.bid.call(uintOevTaMr, {from: accounts[1]});
//		const uint256ZBZHTbz = await BAEr8YBfP.setAuctionFee.call(uintkLm4UZM, {from: accounts[3]});
//		const uint256o7cDGOX = await BAEr8YBfP.setAuctionFee.call(uintv8VgKRw, {from: accounts[1]});

		await expect(BAEr8YBfP.concludeAuction.call(uintSCw749b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressFQGYW2q = accounts[0]
		const BAEPYHr03Z = await BAE.new(addressFQGYW2q, {from: "0x0000000000000000000000000000000000000001"});
		const uintUfGK4Bl = BigInt("1264")
		const uintmjkZ4zm = BigInt("993")
		const uintAjCrSyU = BigInt("200")
		const uintBRKr1ZM = BigInt("1278")
		const uintxsp4xJ = BigInt("827")
		const uintDqObaTM = BigInt("1530")
		const uinteY8sZQ = BigInt("761")
		const uint256KXmphUp = await BAEPYHr03Z.bid.call(uintUfGK4Bl, {from: accounts[2]});
		const uint256KkkEUvu = await BAEPYHr03Z.setAuctionFee.call(uintmjkZ4zm, {from: accounts[2]});
		const uint256XkjGYXh = await BAEPYHr03Z.resetAuction.call(uintxsp4xJ, uintBRKr1ZM, uintAjCrSyU, {from: accounts[2]});
		const uint256cZB77Nv = await BAEPYHr03Z.bid.call(uintDqObaTM, {from: accounts[3]});
		const uint256IEoRvu8 = await BAEPYHr03Z.bid.call(uinteY8sZQ, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressmPFRH53 = accounts[2]
		const BAEwCvJbuz = await BAE.new(addressmPFRH53, {from: accounts[4]});
		const uintnf8Msv = BigInt("467")
		const uintegMTpCd = BigInt("821")
		const uintGei6i8h = BigInt("1717")
		const uintGH3Czb8 = BigInt("1112")
		const uintVmZ2UDB = BigInt("938")
		const uintxjvGTb8 = BigInt("536")
		const uintJhPccKv = BigInt("1666")
		const uint1P44K8 = BigInt("1324")
//		const uint256uxCNyK1 = await BAEwCvJbuz.resetAuction.call(uintGei6i8h, uintegMTpCd, uintnf8Msv, {from: accounts[3]});
//		const uint256rqXboLH = await BAEwCvJbuz.bid.call(uintGH3Czb8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ACJA6xX = await BAEwCvJbuz.concludeAuction.call(uintVmZ2UDB, {from: accounts[4]});
//		const uint256NqN3h1b = await BAEwCvJbuz.resetAuction.call(uint1P44K8, uintJhPccKv, uintxjvGTb8, {from: accounts[0]});

		await expect(BAEwCvJbuz.resetAuction.call(uintGei6i8h, uintegMTpCd, uintnf8Msv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})