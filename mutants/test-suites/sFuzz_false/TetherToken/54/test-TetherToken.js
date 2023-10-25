const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintD8Q4zVi = BigInt("301")
		const stringSpx6Chp = "RNfG"
		const stringzv0kOVg = "pfVTeGBHsSlHnvJ9ZqjbZZ1bqDOvVJO6FqN3Vxff9uM0XSYMeX2RGFmOkjnTdBnFZP"
		const uintF7kffjO = BigInt("93")
		const TetherTokenv87hQFe = await TetherToken.new(uintD8Q4zVi, stringSpx6Chp, stringzv0kOVg, uintF7kffjO, {from: accounts[3]});
		const uintxBsihGS = BigInt("536")
		const uintRAg8Gm2 = BigInt("1882")
		const uintdH64t3X = BigInt("942")
		const addressmeSJBHE = accounts[2]
		const addresssm13dkx = accounts[4]
//		const uintblqxCnD = await TetherTokenv87hQFe.setParams.call(uintRAg8Gm2, uintxBsihGS, {from: accounts[2]});
//		const uintYb6KLr = await TetherTokenv87hQFe.totalSupply.call({from: accounts[4]});
//		const uintXZF9p90 = await TetherTokenv87hQFe.totalSupply.call({from: accounts[0]});
//		const addressCr3Ns4T = await TetherTokenv87hQFe.transferFrom.call(addresssm13dkx, addressmeSJBHE, uintdH64t3X, {from: accounts[4]});

		await expect(TetherTokenv87hQFe.setParams.call(uintRAg8Gm2, uintxBsihGS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintA6SGc6o = BigInt("1494")
		const stringYHZ9D9V = "WWFXKvQolldyhwaGj15WRSD4Qw3QQO"
		const stringVZHWShT = "88XTwJfW85q8bL4KQlAUimuXpfy4iyyhpsS7x4tHVXVeThxJoRDph"
		const uintujtsCOU = BigInt("341")
		const TetherTokenPN0Vwnc = await TetherToken.new(uintA6SGc6o, stringYHZ9D9V, stringVZHWShT, uintujtsCOU, {from: accounts[1]});
		const addressWcqyqdm = accounts[2]
		const addressd0DOtw = accounts[4]
		const uintm7Aajkc = BigInt("1105")
		const addressNxtJfMg = accounts[3]
		const uintM7yXNAS = BigInt("163")
		const addresseSefNuL = accounts[5]
		const addressrkPVPv = "0x0000000000000000000000000000000000000001"
		const uint92SD41 = await TetherTokenPN0Vwnc.allowance.call(addressd0DOtw, addressWcqyqdm, {from: accounts[3]});
		const addressSoIS167 = await TetherTokenPN0Vwnc.approve.call(addressNxtJfMg, uintm7Aajkc, {from: accounts[2]});
		const uintnrjh2O = await TetherTokenPN0Vwnc.totalSupply.call({from: accounts[1]});
//		const address45JxUL = await TetherTokenPN0Vwnc.transferFrom.call(addressrkPVPv, addresseSefNuL, uintM7yXNAS, {from: accounts[0]});

		assert.equal(uint92SD41, BigInt("0"))
		assert.equal(uintnrjh2O, BigInt("1494"))
		await expect(TetherTokenPN0Vwnc.transferFrom.call(addressrkPVPv, addresseSefNuL, uintM7yXNAS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintSYjAch = BigInt("820")
		const stringD6yFTE5 = "FjdUFnfaE6opWL2M6bxMIXJB3cBtFm6FyoqP7kCYJyOiv1oH237FsCaaLNLo0uCUt9SRb5sX41n3lct2GcsRdSkcvT"
		const stringjmjOe08 = "iBMTBVMlg0KNLgk2HfzvcNPslilB2Jibla"
		const uintWSDoQUg = BigInt("910")
		const TetherTokenFc4KsSZ = await TetherToken.new(uintSYjAch, stringD6yFTE5, stringjmjOe08, uintWSDoQUg, {from: accounts[4]});
		const uintzcT6aMR = BigInt("1440")
		const addressbS5V7zD = accounts[5]
		const addressJOSNP6W = accounts[5]
		const uintLymDB3Y = BigInt("1105")
		const addressER0pgEF = await TetherTokenFc4KsSZ.approve.call(addressbS5V7zD, uintzcT6aMR, {from: accounts[4]});
		const uintww3BXI = await TetherTokenFc4KsSZ.balanceOf.call(addressJOSNP6W, {from: accounts[4]});
		const uintMYtcWZR = await TetherTokenFc4KsSZ.totalSupply.call({from: accounts[1]});
		const uintr00fdYw = await TetherTokenFc4KsSZ.totalSupply.call({from: accounts[3]});
		const uintTlUmFax = await TetherTokenFc4KsSZ.issue.call(uintLymDB3Y, {from: accounts[4]});
		const uintLBg6Ips = await TetherTokenFc4KsSZ.totalSupply.call({from: accounts[5]});

		assert.equal(uintLBg6Ips, BigInt("820"))
		assert.equal(uintMYtcWZR, BigInt("820"))
		assert.equal(uintr00fdYw, BigInt("820"))
		assert.equal(uintww3BXI, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintuuHyy1v = BigInt("101")
		const stringK488ry6 = "pHnt4lfwvUKUod7vIL"
		const stringlteumVT = "hB61Ga6i2D0y9qoeTKa8HHBKiB5IqQQKPpCIV"
		const uintcxQVW9h = BigInt("1941")
		const TetherTokenEpIVOwi = await TetherToken.new(uintuuHyy1v, stringK488ry6, stringlteumVT, uintcxQVW9h, {from: accounts[1]});
		const uintE0owTLT = BigInt("1560")
		const addressgwv3xfs = accounts[5]
		const uintnZUOGVc = BigInt("10")
		const uintQCfoZPp = BigInt("1416")
		const addressTvif3H6 = accounts[3]
		const addressrQqTqh4 = accounts[2]
		const uintSwrNMcp = BigInt("934")
		const addressQQ097QQ = accounts[3]
		const uintUKG3OCQ = BigInt("825")
		const addressqIuM3n6 = accounts[5]
		const addressyk83B5i = await TetherTokenEpIVOwi.approve.call(addressgwv3xfs, uintE0owTLT, {from: accounts[2]});
//		const uintt3xNQyv = await TetherTokenEpIVOwi.redeem.call(uintnZUOGVc, {from: accounts[2]});
//		const address1V9PBx = await TetherTokenEpIVOwi.transferFrom.call(addressrQqTqh4, addressTvif3H6, uintQCfoZPp, {from: accounts[2]});
//		const address6uc3QY = await TetherTokenEpIVOwi.transfer.call(addressQQ097QQ, uintSwrNMcp, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshqRmOS = await TetherTokenEpIVOwi.approve.call(addressqIuM3n6, uintUKG3OCQ, {from: accounts[3]});

		await expect(TetherTokenEpIVOwi.redeem.call(uintnZUOGVc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintESkW8uk = BigInt("1927")
		const stringZjMTp9t = "Hct64lVHjMLBFCiz6pLndc73VlyaO3yvVJugssTCPP7jO6ILtIxecPu41NapBNh"
		const string4wQJjC = "StLK9vwXg8LDu84CrZ4oSLxBTDuLMxVoTQYXZtiHIVMsja8x5GmfznAIXNdvmPI3TU4"
		const uintd3eHCC = BigInt("1251")
		const TetherTokenHoZUUeH = await TetherToken.new(uintESkW8uk, stringZjMTp9t, string4wQJjC, uintd3eHCC, {from: accounts[1]});
		const uintBIECmCz = BigInt("1368")
		const addressB75zRb6 = "0x0000000000000000000000000000000000000001"
		const uintdASUd3Z = BigInt("659")
		const addresssd16Y2h = accounts[1]
		const addressKLSUnce = accounts[4]
//		const addresshGYoU7A = await TetherTokenHoZUUeH.transfer.call(addressB75zRb6, uintBIECmCz, {from: accounts[3]});
//		const addresssmeXvaV = await TetherTokenHoZUUeH.approve.call(addresssd16Y2h, uintdASUd3Z, {from: accounts[0]});
//		const addressVJNBEBY = await TetherTokenHoZUUeH.deprecate.call(addressKLSUnce, {from: accounts[1]});

		await expect(TetherTokenHoZUUeH.transfer.call(addressB75zRb6, uintBIECmCz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintuS1nUqL = BigInt("959")
		const stringexKhYHC = "dFfPzTliOi9iQN2Q6Iuvo7EMOidi"
		const stringQwI0bOy = "UEqCeiWidONAEoFvQR"
		const uinttdjUQcb = BigInt("1126")
		const TetherTokenqoMdcUQ = await TetherToken.new(uintuS1nUqL, stringexKhYHC, stringQwI0bOy, uinttdjUQcb, {from: accounts[4]});
		const addressrtfQ92H = "0x0000000000000000000000000000000000000001"
		const addressFYVD07u = accounts[2]
		const addressLW4SXWt = accounts[3]
		const addressK4D8fUj = accounts[1]
		const addressltJcTVZ = accounts[4]
		const uintepkLAnA = BigInt("482")
		const addressyZu3r6s = accounts[4]
		const addressbvTuKFw = "0x0000000000000000000000000000000000000001"
		const uintuRIqw9O = await TetherTokenqoMdcUQ.allowance.call(addressFYVD07u, addressrtfQ92H, {from: accounts[3]});
		const addressfSWrBP = await TetherTokenqoMdcUQ.deprecate.call(addressLW4SXWt, {from: accounts[4]});
		const uintvfP6lT4 = await TetherTokenqoMdcUQ.allowance.call(addressltJcTVZ, addressK4D8fUj, {from: accounts[4]});
//		const addressWofRIox = await TetherTokenqoMdcUQ.transferFrom.call(addressbvTuKFw, addressyZu3r6s, uintepkLAnA, {from: accounts[3]});

		assert.equal(uintuRIqw9O, BigInt("0"))
		assert.equal(uintvfP6lT4, BigInt("0"))
		await expect(TetherTokenqoMdcUQ.transferFrom.call(addressbvTuKFw, addressyZu3r6s, uintepkLAnA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintzFYu8WX = BigInt("1815")
		const stringQ28PrZA = "jWcwYVa9wgACjFhcVDtCBahPUSMBzUrcs7OnJ8gjGU6Ngddou6EzqyT75NbtMQAkhNHF"
		const stringgASU0ek = "3y1UpnJdEp3fuXFYFn5sZCofwPw8CV7p7FxBBe5y1YY7qzwTGa8EMQNx4tlb"
		const uintkb88ARI = BigInt("1657")
		const TetherTokenrE3Ksgf = await TetherToken.new(uintzFYu8WX, stringQ28PrZA, stringgASU0ek, uintkb88ARI, {from: "0x0000000000000000000000000000000000000001"});
		const uintbz4AOz = BigInt("735")
		const uintNsA1lfh = await TetherTokenrE3Ksgf.totalSupply.call({from: accounts[3]});
		const uintvhmBAXL = await TetherTokenrE3Ksgf.issue.call(uintbz4AOz, {from: accounts[2]});
	});
})