const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintjIkGDOp = BigInt("101")
		const stringY6scuIP = "lt4ZcEkMNgtRNCzAY9BpD3Xo9DrXIP3QOm8jHEiwl"
		const stringEPXi50H = "rngCXn"
		const uintzW75jbf = BigInt("1756")
		const TetherToken3lqL36 = await TetherToken.new(uintjIkGDOp, stringY6scuIP, stringEPXi50H, uintzW75jbf, {from: "0x0000000000000000000000000000000000000001"});
		const uintRpsk13G = BigInt("791")
		const uinttIABc7i = BigInt("1043")
		const uintl0Fd0Uj = BigInt("1341")
		const addressergsY9k = accounts[5]
		const addressG5CGmYt = accounts[4]
		const uintaFulTBO = await TetherToken3lqL36.setParams.call(uinttIABc7i, uintRpsk13G, {from: accounts[1]});
		const addressywbpDz = await TetherToken3lqL36.transferFrom.call(addressG5CGmYt, addressergsY9k, uintl0Fd0Uj, {from: accounts[3]});
	});

	it('test for TetherToken', async () => {
		const uintP8OSkaJ = BigInt("136")
		const stringYJtwnvD = "imVEs"
		const stringFn1JuYh = "LDNx5f971S4rcP2Th57gE8PS"
		const uintdeeJHw = BigInt("1866")
		const TetherTokenxM99SP = await TetherToken.new(uintP8OSkaJ, stringYJtwnvD, stringFn1JuYh, uintdeeJHw, {from: accounts[1]});
		const addressTl6TbtE = accounts[3]
		const addressd9SfLm7 = accounts[3]
		const addressZBV2N5l = accounts[0]
		const addresss7f9HJR = "0x0000000000000000000000000000000000000001"
		const addressIms2Pl = accounts[0]
		const addressFNsSyz = accounts[3]
		const uintj5ojLB3 = await TetherTokenxM99SP.allowance.call(addressd9SfLm7, addressTl6TbtE, {from: accounts[5]});
		const uintQgktPwP = await TetherTokenxM99SP.allowance.call(addresss7f9HJR, addressZBV2N5l, {from: accounts[4]});
		const uintbXtVUPz = await TetherTokenxM99SP.allowance.call(addressFNsSyz, addressIms2Pl, {from: accounts[2]});

		assert.equal(uintQgktPwP, BigInt("0"))
		assert.equal(uintbXtVUPz, BigInt("0"))
		assert.equal(uintj5ojLB3, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintOtHbL1U = BigInt("1512")
		const stringmuS94W7 = "Ll6XBDnpdPelAvfQU4c7pu1gL7sKptTrLbOeDFKyPyd7uSiYr4JDHH"
		const stringTq9rk0o = "UDUYlkVLv6F5jfvjsYa"
		const uintJYy39Ns = BigInt("1876")
		const TetherTokenCUjejWb = await TetherToken.new(uintOtHbL1U, stringmuS94W7, stringTq9rk0o, uintJYy39Ns, {from: accounts[2]});
		const uintE7TE7R8 = BigInt("1499")
		const addressarlj0s7 = accounts[3]
		const uint4AIwwI = BigInt("1594")
		const addressCvC2DSl = accounts[1]
		const addressRTIAX8y = accounts[3]
		const address0tdPqn = await TetherTokenCUjejWb.approve.call(addressarlj0s7, uintE7TE7R8, {from: accounts[0]});
//		const uintIHR0dh = await TetherTokenCUjejWb.issue.call(uint4AIwwI, {from: accounts[4]});
//		const uintKXB2LkA = await TetherTokenCUjejWb.allowance.call(addressRTIAX8y, addressCvC2DSl, {from: accounts[3]});

		await expect(TetherTokenCUjejWb.issue.call(uint4AIwwI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbMWBbHW = BigInt("1544")
		const stringB5SrZLm = "sbmbMoNKCfvhwTvI62Gx4M2TwfCBhREdEZdoPuvehRrqJx2AUzXvmPjy57caNv99DqlPY"
		const stringRlTDuU9 = "OsEdjCRpxzMpQ64ia03R14qs5MaHUOkM"
		const uintTJhp1ye = BigInt("1962")
		const TetherTokens6n4Lc2 = await TetherToken.new(uintbMWBbHW, stringB5SrZLm, stringRlTDuU9, uintTJhp1ye, {from: accounts[4]});
		const uintJDZ2SKK = BigInt("168")
		const addresscfgFt6Z = accounts[2]
		const uint9xoxXX = BigInt("1580")
		const uintzi6wd4g = BigInt("1142")
		const addressBTR5gwl = accounts[3]
//		const uintyC1fOPZ = await TetherTokens6n4Lc2.redeem.call(uintJDZ2SKK, {from: accounts[5]});
//		const uinthNTuV1b = await TetherTokens6n4Lc2.balanceOf.call(addresscfgFt6Z, {from: accounts[2]});
//		const uintb2Yko1 = await TetherTokens6n4Lc2.issue.call(uint9xoxXX, {from: accounts[4]});
//		const addressbLm3y6v = await TetherTokens6n4Lc2.approve.call(addressBTR5gwl, uintzi6wd4g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokens6n4Lc2.redeem.call(uintJDZ2SKK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintonHUGl9 = BigInt("1264")
		const stringjCi2v4E = "6ymYKNINQh2fa2GaJGILF6DirJDZoAolL1cCx5n3iJNX51EngsRv1Q5mORGbvVfaOp7Of9wwCy3GHZcAL3Z6nC2X9Yf3aSRcP6"
		const stringa5u0U3c = "pjucjTs2oYT"
		const uintqbS8Vxm = BigInt("1689")
		const TetherTokenJcetcG = await TetherToken.new(uintonHUGl9, stringjCi2v4E, stringa5u0U3c, uintqbS8Vxm, {from: accounts[4]});
		const addressCGcHs1W = "0x0000000000000000000000000000000000000001"
		const addressXl2LNjn = accounts[2]
		const uintLDRMXOd = BigInt("434")
		const uintSeINTn4 = await TetherTokenJcetcG.balanceOf.call(addressCGcHs1W, {from: accounts[4]});
//		const addressd4iHrpp = await TetherTokenJcetcG.deprecate.call(addressXl2LNjn, {from: accounts[1]});
//		const uintjy0Lrk = await TetherTokenJcetcG.issue.call(uintLDRMXOd, {from: accounts[0]});

		assert.equal(uintSeINTn4, BigInt("0"))
		await expect(TetherTokenJcetcG.deprecate.call(addressXl2LNjn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMiCVH31 = BigInt("1264")
		const stringjCi2v4E = "6ymYKNINQh2fa2GaJGILF6DirJDZoAolL1cCx5n3iJNX51EngsRv1Q5mORGbvVfaOp7Of9wwCy3GHZcAL3Z6nC2X9Yf3aSRcP6"
		const stringa5u0U3c = "pjucjTs2oYT"
		const uintNloiMal = BigInt("1689")
		const TetherTokenJcetcG = await TetherToken.new(uintMiCVH31, stringjCi2v4E, stringa5u0U3c, uintNloiMal, {from: accounts[4]});
		const uintFoBFqA = BigInt("761")
		const addressx56vYub = accounts[4]
		const addressSDSOFNB = "0x0000000000000000000000000000000000000002"
		const addressKLr6ghx = accounts[2]
		const uintdaUPYjV = BigInt("434")
		const uintAMnmvhu = await TetherTokenJcetcG.totalSupply.call({from: accounts[3]});
		const addresszp5euUF = await TetherTokenJcetcG.approve.call(addressx56vYub, uintFoBFqA, {from: accounts[1]});
		const uintSeINTn4 = await TetherTokenJcetcG.balanceOf.call(addressSDSOFNB, {from: accounts[4]});
//		const addressd4iHrpp = await TetherTokenJcetcG.deprecate.call(addressKLr6ghx, {from: accounts[1]});
//		const uintjy0Lrk = await TetherTokenJcetcG.issue.call(uintdaUPYjV, {from: accounts[0]});

		assert.equal(uintAMnmvhu, BigInt("1264"))
		assert.equal(uintSeINTn4, BigInt("0"))
		await expect(TetherTokenJcetcG.deprecate.call(addressKLr6ghx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintx1zNoZP = BigInt("136")
		const stringYJtwnvD = "imVEs"
		const stringFn1JuYh = "LDNx5f971S4rcP2Th57gE8PS"
		const uintYOgxiQQ = BigInt("1866")
		const TetherTokenxM99SP = await TetherToken.new(uintx1zNoZP, stringYJtwnvD, stringFn1JuYh, uintYOgxiQQ, {from: accounts[1]});
		const addressqJQFjv4 = accounts[3]
		const addressOPm9NbN = accounts[3]
		const uintaEzpFpl = BigInt("993")
		const uintEfOh8Qd = BigInt("576")
		const addresslJUYwzY = accounts[0]
		const addressJ6OnN0B = "0x0000000000000000000000000000000000000000"
		const addressjz2cIB = accounts[0]
		const addressyxyqQvb = accounts[3]
		const uintY0RWOtF = BigInt("1150")
		const addressTP0ZWCs = accounts[1]
		const uintj5ojLB3 = await TetherTokenxM99SP.allowance.call(addressOPm9NbN, addressqJQFjv4, {from: accounts[5]});
//		const uintPZrzqv5 = await TetherTokenxM99SP.setParams.call(uintEfOh8Qd, uintaEzpFpl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintQgktPwP = await TetherTokenxM99SP.allowance.call(addressJ6OnN0B, addresslJUYwzY, {from: accounts[4]});
//		const uintbXtVUPz = await TetherTokenxM99SP.allowance.call(addressyxyqQvb, addressjz2cIB, {from: accounts[2]});
//		const addressks3BC0m = await TetherTokenxM99SP.approve.call(addressTP0ZWCs, uintY0RWOtF, {from: accounts[1]});

		assert.equal(uintj5ojLB3, BigInt("0"))
		await expect(TetherTokenxM99SP.setParams.call(uintEfOh8Qd, uintaEzpFpl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpBk2Alv = BigInt("136")
		const stringYJtwnvD = "imVEs"
		const stringFn1JuYh = "LDNx5f971S4rcP2Th57gE8PS"
		const uintAKQWI4h = BigInt("1866")
		const TetherTokenxM99SP = await TetherToken.new(uintpBk2Alv, stringYJtwnvD, stringFn1JuYh, uintAKQWI4h, {from: accounts[1]});
		const addressZCjKu0q = accounts[3]
		const addressA8QagEs = accounts[3]
		const uintipb2asU = BigInt("1588")
		const addressC5rLlJt = accounts[4]
		const address8jRvtl = accounts[2]
		const uintIKqm6V1 = BigInt("1030")
		const addressKG67oqI = accounts[2]
		const addressojf5MTl = accounts[0]
		const addressXdt8Pf9 = "0x0000000000000000000000000000000000000001"
		const uintTrjLsP = BigInt("351")
		const addressbCZxp43 = accounts[4]
		const addressUDmo5qa = accounts[1]
		const addressQchnIc7 = accounts[3]
		const uintj5ojLB3 = await TetherTokenxM99SP.allowance.call(addressA8QagEs, addressZCjKu0q, {from: accounts[5]});
//		const addressztCx828 = await TetherTokenxM99SP.transferFrom.call(address8jRvtl, addressC5rLlJt, uintipb2asU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjtENLNE = await TetherTokenxM99SP.approve.call(addressKG67oqI, uintIKqm6V1, {from: accounts[2]});
//		const uintQgktPwP = await TetherTokenxM99SP.allowance.call(addressXdt8Pf9, addressojf5MTl, {from: accounts[4]});
//		const addresstyZl1Se = await TetherTokenxM99SP.approve.call(addressbCZxp43, uintTrjLsP, {from: accounts[1]});
//		const uintbXtVUPz = await TetherTokenxM99SP.allowance.call(addressQchnIc7, addressUDmo5qa, {from: accounts[2]});

		assert.equal(uintj5ojLB3, BigInt("0"))
		await expect(TetherTokenxM99SP.transferFrom.call(address8jRvtl, addressC5rLlJt, uintipb2asU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDAjqt6Y = BigInt("1264")
		const stringjCi2v4E = "6ymYKNINQh2fa2GaJGILF6DirJDZoAolL1cCx5n3iJNX51EngsRv1Q5mORGbvVfaOp7Of9wwCy3GHZcAL3Z6nC2X9Yf3aSRcP6"
		const stringa5u0U3c = "pjucjTs2oYT"
		const uintOxSsNu = BigInt("1689")
		const TetherTokenJcetcG = await TetherToken.new(uintDAjqt6Y, stringjCi2v4E, stringa5u0U3c, uintOxSsNu, {from: accounts[4]});
		const uintRcNNZRk = BigInt("530")
		const addresskNoeSrn = accounts[4]
		const addressq94jWCs = "0x0000000000000000000000000000000000000001"
		const addressyvvf8s5 = accounts[3]
		const uintGVYw4Fv = BigInt("611")
		const addressz4QbNor = accounts[2]
		const uintwgRdkU0 = BigInt("419")
		const addressXtY288G = await TetherTokenJcetcG.approve.call(addresskNoeSrn, uintRcNNZRk, {from: accounts[4]});
		const uintiakMjJE = await TetherTokenJcetcG.allowance.call(addressyvvf8s5, addressq94jWCs, {from: accounts[0]});
//		const addressttM114K = await TetherTokenJcetcG.transfer.call(addressz4QbNor, uintGVYw4Fv, {from: accounts[2]});
//		const uintjy0Lrk = await TetherTokenJcetcG.issue.call(uintwgRdkU0, {from: accounts[0]});

		assert.equal(uintiakMjJE, BigInt("0"))
		await expect(TetherTokenJcetcG.transfer.call(addressz4QbNor, uintGVYw4Fv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})