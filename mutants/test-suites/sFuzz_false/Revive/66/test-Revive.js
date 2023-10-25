const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveVfP0zCW = await Revive.new({from: accounts[0]});
		const addressS3ehfQj = accounts[4]
		const addresswcefMDL = accounts[1]
		const uintmJ4opiM = BigInt("1889")
		const uintsUXDnv = BigInt("72")
		const byteGjHmbTa = "0x08121e171e100c110710011d1f1f0b0b021102010b2018111120020f1013020e"
		const uint256rxkzuVf = await ReviveVfP0zCW.allowance.call(addresswcefMDL, addressS3ehfQj, {from: accounts[1]});
//		await ReviveVfP0zCW.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHrLva9W = await ReviveVfP0zCW.lock.call(byteGjHmbTa, uintsUXDnv, uintmJ4opiM, {from: accounts[3]});

		assert.equal(uint256rxkzuVf, BigInt("0"))
		await expect(ReviveVfP0zCW.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedRJb4m = await Revive.new({from: accounts[4]});
		const addressLt1spcG = accounts[4]
		const addressQwSXETP = accounts[2]
		const uintiKfMYsU = BigInt("1703")
		const byteFEECZYH = "0x01121e0b11060117050f1a080a0405160801030c1004160a0c1c1c050b07181c"
		const addressQ1cWPy9 = accounts[1]
		const uint256DxVemxx = await RevivedRJb4m.balanceOf.call(addressLt1spcG, {from: accounts[0]});
		const addressOvzoHyB = await RevivedRJb4m.transferOwnership.call(addressQwSXETP, {from: accounts[4]});
		const uint256Tahd2eA = await RevivedRJb4m.tokensLockedAtTime.call(addressQ1cWPy9, byteFEECZYH, uintiKfMYsU, {from: accounts[0]});
		const uint256dzrLl22 = await RevivedRJb4m.totalSupply.call({from: accounts[0]});

		assert.equal(uint256DxVemxx, BigInt("3000000000000000000000000000"))
		assert.equal(uint256Tahd2eA, BigInt("0"))
		assert.equal(uint256dzrLl22, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivexwDaFRD = await Revive.new({from: accounts[1]});
		const byterZfQa2o = "0x14081d141b0c150e11180f1b1503010117121d06081017030f0c1a1b0508121f"
		const addressyqba5fu = accounts[4]
		const byteiOqb8Is = "0x051c110d0b1a101d0d1b0e040f040d160b0c0c1b0d151f031d1c0a13181f0c05"
		const addressytb7oEM = accounts[4]
		const uint256zXlNlD = await RevivexwDaFRD.tokensUnlockable.call(addressyqba5fu, byterZfQa2o, {from: accounts[4]});
		const uint256Xo6S2xg = await RevivexwDaFRD.tokensLocked.call(addressytb7oEM, byteiOqb8Is, {from: accounts[3]});
//		await RevivexwDaFRD.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256Xo6S2xg, BigInt("0"))
		assert.equal(uint256zXlNlD, BigInt("0"))
		await expect(RevivexwDaFRD.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressLQ8CWBF = accounts[3]
		const uintk1OiV9S = BigInt("1472")
		const uintSTvE3V = BigInt("885")
		const byteTwPHneA = "0x0b120d171907151a1c151e09071b191c1d1c0f11050e1e0e070a110d1906150b"
		const uintKo8cIDu = BigInt("626")
		const addresstGxBoRa = accounts[3]
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressLQ8CWBF, {from: accounts[2]});
//		const boolTnEKW93 = await RevivedHJuOuo.lock.call(byteTwPHneA, uintSTvE3V, uintk1OiV9S, {from: accounts[4]});
//		const bool2XN5U0 = await RevivedHJuOuo.transfer.call(addresstGxBoRa, uintKo8cIDu, {from: accounts[2]});

		assert.equal(uint256O5hehbA, BigInt("0"))
		await expect(RevivedHJuOuo.lock.call(byteTwPHneA, uintSTvE3V, uintk1OiV9S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressjtopBN = accounts[2]
		const addressc7q8DFI = accounts[1]
		const uintVrXrjX = BigInt("1540")
		const uintAHWOrEl = BigInt("322")
		const byte4qwnNT = "0x1c141f020a040d1d1c0e14031c13061d1d011311080315161f0719040f170913"
		const addressP5WMrMc = accounts[4]
		const uint256rmwgvhm = await ReviveHwkx8Kq.balanceOf.call(addressjtopBN, {from: accounts[5]});
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressc7q8DFI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcZoFQrG = await ReviveHwkx8Kq.lock.call(byte4qwnNT, uintAHWOrEl, uintVrXrjX, {from: accounts[0]});
//		const uint2565pCycu = await ReviveHwkx8Kq.balanceOf.call(addressP5WMrMc, {from: accounts[5]});

		assert.equal(uint256SKXspIq, BigInt("0"))
		assert.equal(uint256rmwgvhm, BigInt("0"))
		await expect(ReviveHwkx8Kq.lock.call(byte4qwnNT, uintAHWOrEl, uintVrXrjX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveB1vq6cT = await Revive.new({from: accounts[4]});
		const addressZL6grLT = accounts[0]
		const addressEfiNKT = accounts[4]
		const uintQXdFNoc = BigInt("1810")
		const bytenxNQAh1 = "0x121919110209090f2019091502001a17051d021a1f1f03090419121e11130e1e"
		const addressDgDVNJj = accounts[3]
		const uintajRGJz8 = BigInt("1392")
		const uintjDj7rH8 = BigInt("678")
		const byteIHpIhxj = "0x1a06100317081c13141f0e140708021107091a1a1e080a031418040f0f181409"
		const uint256UNlTfRA = await ReviveB1vq6cT.allowance.call(addressEfiNKT, addressZL6grLT, {from: accounts[4]});
//		const boolh0tVsli = await ReviveB1vq6cT.increaseLockAmount.call(bytenxNQAh1, uintQXdFNoc, {from: accounts[2]});
//		const uint256JswT9AY = await ReviveB1vq6cT.totalBalanceOf.call(addressDgDVNJj, {from: accounts[0]});
//		const uint256sMxEY0j = await ReviveB1vq6cT.recoverERC20.call(uintajRGJz8, {from: accounts[2]});
//		const boolBcZHik1 = await ReviveB1vq6cT.increaseLockAmount.call(byteIHpIhxj, uintjDj7rH8, {from: accounts[2]});

		assert.equal(uint256UNlTfRA, BigInt("0"))
		await expect(ReviveB1vq6cT.increaseLockAmount.call(bytenxNQAh1, uintQXdFNoc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMsbrI27 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnRA2nn8 = BigInt("1153")
		const addressCXrBMI4 = accounts[4]
		const addressHrBFVDv = accounts[4]
		const addressem4fehd = accounts[1]
		const boolOx4LQ9O = await ReviveMsbrI27.transferFrom.call(addressHrBFVDv, addressCXrBMI4, uintnRA2nn8, {from: accounts[0]});
		const boolLkeruUf = await ReviveMsbrI27.isOwner.call({from: accounts[2]});
		const uint256vdeeI7T = await ReviveMsbrI27.getUnlockableTokens.call(addressem4fehd, {from: accounts[3]});
		await ReviveMsbrI27.onlyOwner.call({from: accounts[3]});
	});

	it('test for Revive', async () => {
		const ReviveyvgDypG = await Revive.new({from: accounts[3]});
		const bytenlXSLWV = "0x021e060200091c020b0b1d19171415190910190e100d070b08040807051f1113"
		const addresspwlYjoD = accounts[4]
		const uint256lreU4Af = await ReviveyvgDypG.tokensUnlockable.call(addresspwlYjoD, bytenlXSLWV, {from: accounts[4]});
		const boolJ2hsPnO = await ReviveyvgDypG.isOwner.call({from: accounts[4]});
		const addressxrBCUhf = await ReviveyvgDypG.owner.call({from: accounts[2]});
//		await ReviveyvgDypG.renounceOwnership.call({from: accounts[3]});

		assert.equal(addressxrBCUhf, 0xc17C6E993EA5FfE1dab905933C3639CFEb4AF786)
		assert.equal(boolJ2hsPnO, false)
		assert.equal(uint256lreU4Af, BigInt("0"))
		await expect(ReviveyvgDypG.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKOx1EQQ = await Revive.new({from: accounts[3]});
		const uintDsrGP5d = BigInt("1286")
		const addressSEOvPE4 = accounts[3]
		const addressL6rD53N = accounts[4]
		const uinthcCqw1M = BigInt("1836")
		const uintVCOG37v = BigInt("2022")
		const byteh8TVUbY = "0x0205031807040f1c0212060415091d181e1502160f060516141009011f121006"
//		const boolde4kGD7 = await ReviveKOx1EQQ.transferFrom.call(addressL6rD53N, addressSEOvPE4, uintDsrGP5d, {from: accounts[0]});
//		const boolPJqk4p6 = await ReviveKOx1EQQ.lock.call(byteh8TVUbY, uintVCOG37v, uinthcCqw1M, {from: accounts[0]});

		await expect(ReviveKOx1EQQ.transferFrom.call(addressL6rD53N, addressSEOvPE4, uintDsrGP5d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedRJb4m = await Revive.new({from: accounts[4]});
		const addressTmJwzXd = accounts[4]
		const uintNnpFx58 = BigInt("1256")
		const addresseLWxPZY = accounts[3]
		const addressfKgnroO = accounts[2]
		const uintgIynLK8 = BigInt("1703")
		const byteaw4mURn = "0x01121e0b11060117050f1a080a0405160801030c1004160a0c1c1c050b07181c"
		const addressO0TOKln = accounts[1]
		const addressZ9Jh5ds = accounts[3]
		const uint256DxVemxx = await RevivedRJb4m.balanceOf.call(addressTmJwzXd, {from: accounts[0]});
		const boolkiA64M = await RevivedRJb4m.approve.call(addresseLWxPZY, uintNnpFx58, {from: accounts[1]});
		const addressOvzoHyB = await RevivedRJb4m.transferOwnership.call(addressfKgnroO, {from: accounts[4]});
		const uint256Tahd2eA = await RevivedRJb4m.tokensLockedAtTime.call(addressO0TOKln, byteaw4mURn, uintgIynLK8, {from: accounts[0]});
		const uint256dzrLl22 = await RevivedRJb4m.totalSupply.call({from: accounts[0]});
		const uint256BgSNeb7 = await RevivedRJb4m.getUnlockableTokens.call(addressZ9Jh5ds, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkiA64M, true)
		assert.equal(uint256BgSNeb7, BigInt("0"))
		assert.equal(uint256DxVemxx, BigInt("3000000000000000000000000000"))
		assert.equal(uint256Tahd2eA, BigInt("0"))
		assert.equal(uint256dzrLl22, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addresspbW2qar = accounts[3]
		const uintzXrwwL = BigInt("1162")
		const addressSvNElon = accounts[1]
		const uintHGYzsna = BigInt("1073")
		const addressb8qYRBu = accounts[5]
		const uintVJPQQlk = BigInt("1472")
		const uinti20yaWm = BigInt("885")
		const byteuR3qNq = "0x0b120d171907151a1c151e09071b191c1d1c0f11050e1e0e070a110d1906150b"
		const uintmzyE7ai = BigInt("619")
		const addressmdEkTsE = accounts[3]
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addresspbW2qar, {from: accounts[2]});
//		const boolitBWuza = await RevivedHJuOuo.decreaseAllowance.call(addressSvNElon, uintzXrwwL, {from: accounts[1]});
//		const boolHD7SuiL = await RevivedHJuOuo.increaseAllowance.call(addressb8qYRBu, uintHGYzsna, {from: accounts[1]});
//		const boolTnEKW93 = await RevivedHJuOuo.lock.call(byteuR3qNq, uinti20yaWm, uintVJPQQlk, {from: accounts[4]});
//		const bool2XN5U0 = await RevivedHJuOuo.transfer.call(addressmdEkTsE, uintmzyE7ai, {from: accounts[2]});

		assert.equal(uint256O5hehbA, BigInt("0"))
		await expect(RevivedHJuOuo.decreaseAllowance.call(addressSvNElon, uintzXrwwL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressyPLV6R2 = accounts[4]
		const uintIHHdQKG = BigInt("1500")
		const addressOObS8Xq = accounts[3]
		const addressXI7Serw = accounts[2]
		const uintcLPXLGE = BigInt("1472")
		const uintjrfjI17 = BigInt("885")
		const bytecG86ghF = "0x0b120d171907151a1c151e09071b191c1d1c0f11050e1e0e070a110d1906150b"
		const uintK96XBnY = BigInt("626")
		const addressKEg9QOj = accounts[3]
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressyPLV6R2, {from: accounts[2]});
		const boolJKJgHjL = await RevivedHJuOuo.increaseAllowance.call(addressOObS8Xq, uintIHHdQKG, {from: accounts[4]});
		const uint256qGAARMS = await RevivedHJuOuo.getUnlockableTokens.call(addressXI7Serw, {from: accounts[2]});
//		const boolTnEKW93 = await RevivedHJuOuo.lock.call(bytecG86ghF, uintjrfjI17, uintcLPXLGE, {from: accounts[4]});
//		const bool2XN5U0 = await RevivedHJuOuo.transfer.call(addressKEg9QOj, uintK96XBnY, {from: accounts[2]});

		assert.equal(boolJKJgHjL, true)
		assert.equal(uint256O5hehbA, BigInt("0"))
		assert.equal(uint256qGAARMS, BigInt("0"))
		await expect(RevivedHJuOuo.lock.call(bytecG86ghF, uintjrfjI17, uintcLPXLGE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKOx1EQQ = await Revive.new({from: accounts[3]});
		const uintLV1aaY = BigInt("275")
		const uintZjLcn6X = BigInt("1286")
		const addressVrGfN2T = accounts[3]
		const addressrl9tvA = accounts[4]
		const addressZIDN36j = accounts[3]
		const uintXf0spMj = BigInt("1836")
		const uintzHhVxcn = BigInt("2022")
		const bytecd1Pw5v = "0x0205031807040f1c0212060415091d181e1502160f060516141009011f121006"
//		const uint256wQu7sGZ = await ReviveKOx1EQQ.recoverERC20.call(uintLV1aaY, {from: accounts[3]});
//		const boolde4kGD7 = await ReviveKOx1EQQ.transferFrom.call(addressrl9tvA, addressVrGfN2T, uintZjLcn6X, {from: accounts[0]});
//		const uint256R836tgU = await ReviveKOx1EQQ.balanceOf.call(addressZIDN36j, {from: accounts[3]});
//		const boolPJqk4p6 = await ReviveKOx1EQQ.lock.call(bytecd1Pw5v, uintzHhVxcn, uintXf0spMj, {from: accounts[0]});

		await expect(ReviveKOx1EQQ.recoverERC20.call(uintLV1aaY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekcoLn3f = await Revive.new({from: accounts[5]});
		const uintPZyxlJU = BigInt("1380")
		const uintUWguqLg = BigInt("1444")
		const byte4SRmip = "0x180b1e111f151219120b1d1912150d08090f01130109181405150910181a0d06"
		const address4gQgIG = accounts[1]
		const uintakQ6CdG = BigInt("1278")
		const uintNsDtcyg = BigInt("1581")
		const byteH209zjA = "0x0217011914190a0204011a0b16050b08181314021b0c1101010e0e071b151f10"
		const addressLojkt3P = accounts[1]
		const uintxyLiOKv = BigInt("26")
		const addressFEbjATV = accounts[1]
		const addressucJD2xp = accounts[2]
//		const boolRpdRJpb = await RevivekcoLn3f.transferWithLock.call(address4gQgIG, byte4SRmip, uintUWguqLg, uintPZyxlJU, {from: accounts[0]});
//		const boolDYNMvse = await RevivekcoLn3f.transferWithLock.call(addressLojkt3P, byteH209zjA, uintNsDtcyg, uintakQ6CdG, {from: accounts[1]});
//		const bool6gsD7n = await RevivekcoLn3f.transferFrom.call(addressucJD2xp, addressFEbjATV, uintxyLiOKv, {from: accounts[5]});
//		await RevivekcoLn3f.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivekcoLn3f.transferWithLock.call(address4gQgIG, byte4SRmip, uintUWguqLg, uintPZyxlJU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const uintPZpS3yA = BigInt("1664")
		const addressnPnOMn = accounts[3]
		const uintjyQGKw = BigInt("555")
		const addressAda15cI = accounts[2]
		const uintl06VABd = BigInt("1472")
		const uintv4YbPQH = BigInt("885")
		const byterNqnLxn = "0x0b120d171907151a1c151e09071b191c1d1c0f11050e1e0e070a110d1906150b"
		const uintF0RVfLB = BigInt("626")
		const addressdzPKqpK = accounts[4]
//		const uint256mYXSEJd = await RevivedHJuOuo.recoverERC20.call(uintPZpS3yA, {from: accounts[5]});
//		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressnPnOMn, {from: accounts[2]});
//		const boolHWI1wEn = await RevivedHJuOuo.transfer.call(addressAda15cI, uintjyQGKw, {from: accounts[3]});
//		const boolTnEKW93 = await RevivedHJuOuo.lock.call(byterNqnLxn, uintv4YbPQH, uintl06VABd, {from: accounts[4]});
//		const bool2XN5U0 = await RevivedHJuOuo.transfer.call(addressdzPKqpK, uintF0RVfLB, {from: accounts[2]});

		await expect(RevivedHJuOuo.recoverERC20.call(uintPZpS3yA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressAH76BGb = accounts[3]
		const uintqHP20yT = BigInt("1708")
		const byteMt1k4MQ = "0x100b11011012181d070702061e031e0f181a060f0c1502070c16040f15151b1d"
		const addressVg9VtUc = accounts[4]
		const uintmVU13u = BigInt("613")
		const addressuYPbEVS = accounts[3]
		const uint256YpuRCqR = await RevivedHJuOuo.balanceOf.call(addressAH76BGb, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkWIrTAc = await RevivedHJuOuo.extendLock.call(byteMt1k4MQ, uintqHP20yT, {from: accounts[2]});
//		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressVg9VtUc, {from: accounts[2]});
//		const bool2XN5U0 = await RevivedHJuOuo.transfer.call(addressuYPbEVS, uintmVU13u, {from: accounts[2]});

		assert.equal(uint256YpuRCqR, BigInt("0"))
		await expect(RevivedHJuOuo.extendLock.call(byteMt1k4MQ, uintqHP20yT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressCnH1zAl = accounts[3]
		const addresslhrzmf = accounts[2]
		const addressGEXiEa7 = accounts[1]
		const uint256rmwgvhm = await ReviveHwkx8Kq.balanceOf.call(addressCnH1zAl, {from: accounts[5]});
		const uint256sbfRv2C = await ReviveHwkx8Kq.totalBalanceOf.call(addresslhrzmf, {from: accounts[1]});
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressGEXiEa7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SKXspIq, BigInt("0"))
		assert.equal(uint256rmwgvhm, BigInt("3000000000000000000000000000"))
		assert.equal(uint256sbfRv2C, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressDue1fJX = accounts[3]
		const uintaJ84YyO = BigInt("1808")
		const uintq9beFdT = BigInt("784")
		const uintbzjyd3T = BigInt("725")
		const byteQvvFcj4 = "0x001802091c190f13170f1a030d000e0b0607151c080c0b1d03141e0503091401"
		const byteAzHCJoL = "0x10170d161b071e011603061f0e150b12180a0e0c0a1609110f05161d1e201104"
		const addressrdnzQIS = accounts[1]
		const addressUZdVsBy = accounts[1]
		const uint256rmwgvhm = await ReviveHwkx8Kq.balanceOf.call(addressDue1fJX, {from: accounts[5]});
//		const uint256YyDx3F2 = await ReviveHwkx8Kq.recoverERC20.call(uintaJ84YyO, {from: accounts[5]});
//		const boolvhKMSD = await ReviveHwkx8Kq.lock.call(byteQvvFcj4, uintbzjyd3T, uintq9beFdT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256asQcSqk = await ReviveHwkx8Kq.tokensLocked.call(addressrdnzQIS, byteAzHCJoL, {from: accounts[0]});
//		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressUZdVsBy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rmwgvhm, BigInt("3000000000000000000000000000"))
		await expect(ReviveHwkx8Kq.recoverERC20.call(uintaJ84YyO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressYwopvJT = accounts[6]
		const uintcVhsPmG = BigInt("846")
		const byteswxewe = "0x10050c101f1e0c0b12180c12170a0d0e1801110e1b190f011a0a151c19050212"
		const byteJJBAewB = "0x0a05110a010d190509031813031d0801111503191a0e16050e0f121719091420"
		const addresshKcNhJj = accounts[0]
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressYwopvJT, {from: accounts[2]});
//		await RevivedHJuOuo.onlyOwner.call({from: accounts[4]});
//		const boolN82E3VE = await RevivedHJuOuo.increaseLockAmount.call(byteswxewe, uintcVhsPmG, {from: accounts[1]});
		await RevivedHJuOuo.onlyOwner.call({from: accounts[4]});
//		const uint256m7iMd6s = await RevivedHJuOuo.tokensUnlockable.call(addresshKcNhJj, byteJJBAewB, {from: accounts[2]});

		assert.equal(uint256O5hehbA, BigInt("0"))
		await expect(RevivedHJuOuo.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKOx1EQQ = await Revive.new({from: accounts[3]});
		const uintZ4IpQzp = BigInt("600")
		const uintFXaUm1X = BigInt("852")
		const uinte6cpfD8 = BigInt("2022")
		const byteplSavJM = "0x0205031807040f1c0212060515091d181e1502160f060516141009011f121006"
//		const uint256qBF3FFH = await ReviveKOx1EQQ.recoverERC20.call(uintZ4IpQzp, {from: accounts[5]});
//		const boolPJqk4p6 = await ReviveKOx1EQQ.lock.call(byteplSavJM, uinte6cpfD8, uintFXaUm1X, {from: accounts[0]});

		await expect(ReviveKOx1EQQ.recoverERC20.call(uintZ4IpQzp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKHVIUfW = await Revive.new({from: accounts[0]});
		const uintpWKhATl = BigInt("126")
		const addressybaXBJD = accounts[5]
		const uintKhr6kph = BigInt("503")
		const uintUZSLgu = BigInt("374")
		const addressuYdF1xi = accounts[1]
		const addressUyFjVUP = accounts[4]
		const uintdjDwWca = BigInt("1269")
		const byteKJ7FbVE = "0x0c09051d17081700181d1f0d1c0e170e080319111e1219201402061b10130213"
		const boolNSU92Tl = await ReviveKHVIUfW.increaseAllowance.call(addressybaXBJD, uintpWKhATl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NyzJbZ = await ReviveKHVIUfW.recoverERC20.call(uintKhr6kph, {from: accounts[4]});
//		const boolHgi2xv = await ReviveKHVIUfW.transferFrom.call(addressUyFjVUP, addressuYdF1xi, uintUZSLgu, {from: accounts[1]});
//		const boolEXyGdtl = await ReviveKHVIUfW.extendLock.call(byteKJ7FbVE, uintdjDwWca, {from: accounts[5]});

		assert.equal(boolNSU92Tl, true)
		await expect(ReviveKHVIUfW.recoverERC20.call(uintKhr6kph, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const byteDspIFKt = "0x1f09201a1d131d141c1e042017070c1f18030d0f0b0216170400061402070801"
		const addressyzWQIwC = accounts[4]
		const addressmqNcoa6 = accounts[5]
		const uintkm8VS8o = BigInt("1303")
		const uint256AsuC1kV = await RevivedHJuOuo.tokensLocked.call(addressyzWQIwC, byteDspIFKt, {from: accounts[3]});
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressmqNcoa6, {from: accounts[2]});
//		const uint256rmtsPGC = await RevivedHJuOuo.recoverERC20.call(uintkm8VS8o, {from: accounts[0]});

		assert.equal(uint256AsuC1kV, BigInt("0"))
		assert.equal(uint256O5hehbA, BigInt("0"))
		await expect(RevivedHJuOuo.recoverERC20.call(uintkm8VS8o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const bytez13wkq = "0x171d2012160d06041a071005021515080b1b1205190c1605050b00150e1a1a1d"
		const addressAl4iBFT = accounts[4]
		const addressUixw0G5 = accounts[1]
		const uintmERmojY = BigInt("890")
		const addressSANwffg = accounts[3]
		const uint256Q5Inv60 = await ReviveHwkx8Kq.tokensUnlockable.call(addressAl4iBFT, bytez13wkq, {from: accounts[4]});
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressUixw0G5, {from: "0x0000000000000000000000000000000000000001"});
		const boolGrqhqcS = await ReviveHwkx8Kq.isOwner.call({from: accounts[0]});
//		const addresshpy0s2 = await ReviveHwkx8Kq.recoverERC20.call(addressSANwffg, uintmERmojY, {from: accounts[3]});

		assert.equal(boolGrqhqcS, false)
		assert.equal(uint256Q5Inv60, BigInt("0"))
		assert.equal(uint256SKXspIq, BigInt("0"))
		await expect(ReviveHwkx8Kq.recoverERC20.call(addressSANwffg, uintmERmojY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressBkaoWBW = accounts[1]
		const uintkmhw7AY = BigInt("1086")
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressBkaoWBW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256gVHh7X4 = await ReviveHwkx8Kq.recoverERC20.call(uintkmhw7AY, {from: accounts[3]});

		assert.equal(uint256SKXspIq, BigInt("0"))
		await expect(ReviveHwkx8Kq.recoverERC20.call(uintkmhw7AY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressAi64GcF = accounts[2]
		const uintBe5aocY = BigInt("203")
		const byte7Ivz2S = "0x1e0b1211110a170912071906071e1a170f0916160b0e1c190911021316150210"
		const addressCrnbcA7 = accounts[1]
		const uintpIYnOTB = BigInt("1579")
		const uintHrJxM0U = BigInt("839")
		const byteAumQbPO = "0x03121b0e041503121504131e0a0c04020f1a001c111e16041c030b1200071d04"
		const addressZ9W5xOI = accounts[0]
		const uint256K8nvRbb = await RevivedHJuOuo.unlock.call(addressAi64GcF, {from: accounts[0]});
		const uint256pKBcsq7 = await RevivedHJuOuo.tokensLockedAtTime.call(addressCrnbcA7, byte7Ivz2S, uintBe5aocY, {from: accounts[3]});
//		const uint256XbGMeEB = await RevivedHJuOuo.recoverERC20.call(uintpIYnOTB, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256icKN7jH = await RevivedHJuOuo.tokensLockedAtTime.call(addressZ9W5xOI, byteAumQbPO, uintHrJxM0U, {from: accounts[0]});

		assert.equal(uint256K8nvRbb, BigInt("0"))
		assert.equal(uint256pKBcsq7, BigInt("0"))
		await expect(RevivedHJuOuo.recoverERC20.call(uintpIYnOTB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressho62yzT = accounts[4]
		const addressn92Iwgv = accounts[5]
		const uintK3qBuzL = BigInt("1743")
		const uintY6mvZXm = BigInt("203")
		const byteKAEpgWr = "0x1e0c1211110a170912071906071e1a170f0916160b0e1c190911021319150210"
		const addressxff4vgQ = accounts[1]
		const uint256goVPJg8 = await RevivedHJuOuo.allowance.call(addressn92Iwgv, addressho62yzT, {from: accounts[4]});
//		const uint256ObN5v8v = await RevivedHJuOuo.recoverERC20.call(uintK3qBuzL, {from: accounts[5]});
//		const uint256pKBcsq7 = await RevivedHJuOuo.tokensLockedAtTime.call(addressxff4vgQ, byteKAEpgWr, uintY6mvZXm, {from: accounts[3]});

		assert.equal(uint256goVPJg8, BigInt("0"))
		await expect(RevivedHJuOuo.recoverERC20.call(uintK3qBuzL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRYLHZsu = await Revive.new({from: accounts[0]});
		const addresso1enmR = accounts[2]
		const addressUCHJEHi = accounts[4]
		const uintyx2JxpG = BigInt("116")
		const uintzvX2va = BigInt("1501")
		const bytecNMRgHd = "0x19050b110113060b1905161f09050301101703060d190a11141e1b191e031520"
		const uintBSH8WAC = BigInt("1379")
		const addressQm2nvwQ = accounts[1]
		const addressobTyk3R = accounts[4]
		const uint256YZpsm65 = await ReviveRYLHZsu.allowance.call(addressUCHJEHi, addresso1enmR, {from: accounts[1]});
//		const uint256y63EOQJ = await ReviveRYLHZsu.recoverERC20.call(uintyx2JxpG, {from: accounts[4]});
//		const booltJEwqkm = await ReviveRYLHZsu.extendLock.call(bytecNMRgHd, uintzvX2va, {from: accounts[4]});
//		const boolD14c4mX = await ReviveRYLHZsu.increaseAllowance.call(addressQm2nvwQ, uintBSH8WAC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ti8k52P = await ReviveRYLHZsu.getUnlockableTokens.call(addressobTyk3R, {from: accounts[0]});

		assert.equal(uint256YZpsm65, BigInt("0"))
		await expect(ReviveRYLHZsu.recoverERC20.call(uintyx2JxpG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const uintecnhGfc = BigInt("1271")
		const addressGXXIH4 = accounts[2]
//		const uint256S4tHIT2 = await ReviveHwkx8Kq.recoverERC20.call(uintecnhGfc, {from: accounts[5]});
//		const addressz37vMNC = await ReviveHwkx8Kq.owner.call({from: accounts[5]});
//		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressGXXIH4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveHwkx8Kq.recoverERC20.call(uintecnhGfc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const addressYbAhcy = accounts[6]
		const uinttYIBLfT = BigInt("184")
		const addressDlzRaYE = accounts[3]
		const addressPET0HHx = accounts[2]
		const addressLwT86hb = "0x0000000000000000000000000000000000000001"
		const uint256O5hehbA = await RevivedHJuOuo.getUnlockableTokens.call(addressYbAhcy, {from: accounts[2]});
//		const uint256unncSEg = await RevivedHJuOuo.recoverERC20.call(uinttYIBLfT, {from: accounts[2]});
//		const uint256uAh65BH = await RevivedHJuOuo.allowance.call(addressPET0HHx, addressDlzRaYE, {from: accounts[3]});
//		const uint256pATxIJc = await RevivedHJuOuo.totalBalanceOf.call(addressLwT86hb, {from: accounts[0]});

		assert.equal(uint256O5hehbA, BigInt("0"))
		await expect(RevivedHJuOuo.recoverERC20.call(uinttYIBLfT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressX4BBJwM = accounts[2]
		const uintsOnigHn = BigInt("119")
		const uintYBvifFT = BigInt("1930")
		const byte7DvegL = "0x0a1c020400131d161d040e191e1d0b0f050c1d1b161a0a10020a0d041b0b1912"
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressX4BBJwM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mNvvBz2 = await ReviveHwkx8Kq.recoverERC20.call(uintsOnigHn, {from: accounts[4]});
//		const boolR6XWSyO = await ReviveHwkx8Kq.extendLock.call(byte7DvegL, uintYBvifFT, {from: accounts[2]});

		assert.equal(uint256SKXspIq, BigInt("0"))
		await expect(ReviveHwkx8Kq.recoverERC20.call(uintsOnigHn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCTdWvo = await Revive.new({from: accounts[2]});
		const addressysMEty1 = accounts[5]
		const addressPJ4TiHA = accounts[4]
		const addressIOBaIVh = "0x0000000000000000000000000000000000000001"
		const addressbBHtEaW = "0x0000000000000000000000000000000000000001"
		const uintl09O2Z = BigInt("195")
		const uintHgfWIsD = BigInt("727")
		const byteupPA3Yu = "0x051d141f0c1f0f111b14140c161a071f1b19150f12000218150b161d160c0815"
		const addressA6CwYkF = accounts[4]
		const addressPKlQAZJ = accounts[2]
		const uinturcfOfF = BigInt("665")
		const uint256UGBfIwF = await ReviveCTdWvo.balanceOf.call(addressysMEty1, {from: accounts[0]});
		const uint256UufGJrc = await ReviveCTdWvo.allowance.call(addressIOBaIVh, addressPJ4TiHA, {from: accounts[3]});
		const uint256dwZa5x2 = await ReviveCTdWvo.unlock.call(addressbBHtEaW, {from: accounts[4]});
		const boolciJ13Rj = await ReviveCTdWvo.transferWithLock.call(addressA6CwYkF, byteupPA3Yu, uintHgfWIsD, uintl09O2Z, {from: accounts[2]});
		const uint2569SzhIa = await ReviveCTdWvo.unlock.call(addressPKlQAZJ, {from: accounts[1]});
//		const uint256rEV1Exz = await ReviveCTdWvo.recoverERC20.call(uinturcfOfF, {from: accounts[2]});

		assert.equal(boolciJ13Rj, true)
		assert.equal(uint2569SzhIa, BigInt("0"))
		assert.equal(uint256UGBfIwF, BigInt("0"))
		assert.equal(uint256UufGJrc, BigInt("0"))
		assert.equal(uint256dwZa5x2, BigInt("0"))
		await expect(ReviveCTdWvo.recoverERC20.call(uinturcfOfF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKOx1EQQ = await Revive.new({from: accounts[3]});
		const uintdSfyIy0 = BigInt("852")
		const uinte5FLvJu = BigInt("2022")
		const byteBoUVE6 = "0x0205031807040f1c021206fffffffc15091d181e1502160f060516141009011f121006"
		const uintyXrOmAF = BigInt("1904")
		const addresscEkUZ6F = accounts[1]
//		const boolPJqk4p6 = await ReviveKOx1EQQ.lock.call(byteBoUVE6, uinte5FLvJu, uintdSfyIy0, {from: accounts[0]});
//		const addressYeAIHKf = await ReviveKOx1EQQ.recoverERC20.call(addresscEkUZ6F, uintyXrOmAF, {from: accounts[3]});

		await expect(ReviveKOx1EQQ.lock.call(byteBoUVE6, uinte5FLvJu, uintdSfyIy0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const uintbM2GX8G = BigInt("290")
		const addressn4cMNEB = accounts[0]
//		const uint256dkhi50o = await RevivedHJuOuo.recoverERC20.call(uintbM2GX8G, {from: accounts[3]});
//		const uint256ABQMG3 = await RevivedHJuOuo.totalBalanceOf.call(addressn4cMNEB, {from: accounts[4]});

		await expect(RevivedHJuOuo.recoverERC20.call(uintbM2GX8G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHwkx8Kq = await Revive.new({from: accounts[3]});
		const addressw9zVP4X = accounts[2]
		const uinttIInzkB = BigInt("197")
		const uint256SKXspIq = await ReviveHwkx8Kq.unlock.call(addressw9zVP4X, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vXCVR4G = await ReviveHwkx8Kq.recoverERC20.call(uinttIInzkB, {from: accounts[2]});

		assert.equal(uint256SKXspIq, BigInt("0"))
		await expect(ReviveHwkx8Kq.recoverERC20.call(uinttIInzkB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedHJuOuo = await Revive.new({from: accounts[1]});
		const uintgQzf5IQ = BigInt("1203")
		const uintOtR1sYs = BigInt("67")
		const byte1EAMOG = "0x1e0c1211110a170912071906071e1a170f0916160b0e1c190911021316150210"
		const addressQwr961 = accounts[1]
//		const uint256yylWrmr = await RevivedHJuOuo.recoverERC20.call(uintgQzf5IQ, {from: accounts[1]});
//		const uint256pKBcsq7 = await RevivedHJuOuo.tokensLockedAtTime.call(addressQwr961, byte1EAMOG, uintOtR1sYs, {from: accounts[3]});

		await expect(RevivedHJuOuo.recoverERC20.call(uintgQzf5IQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaSvLjIp = await Revive.new({from: accounts[1]});
		const uintFCV9qWT = BigInt("770")
		const addressl0pRbL = accounts[2]
		const bytenhiyhhN = "0x181b0a1117031e1a1c0a180801131f1f1a10061a041b020f031911010501011c"
		const addressDdl0wyN = accounts[2]
		const addressj5bs1JB = accounts[0]
		const uintcAzgTcZ = BigInt("1199")
		const addressJmpEMT = accounts[4]
		const uintEF2Z5WR = BigInt("1327")
		const addressGTm0YjL = accounts[5]
		const boolZ0FzA32 = await ReviveaSvLjIp.approve.call(addressl0pRbL, uintFCV9qWT, {from: accounts[4]});
		const uint256ktM251 = await ReviveaSvLjIp.tokensUnlockable.call(addressDdl0wyN, bytenhiyhhN, {from: accounts[0]});
		const uint256O50Ghg9 = await ReviveaSvLjIp.unlock.call(addressj5bs1JB, {from: accounts[3]});
		const boolpLPClis = await ReviveaSvLjIp.increaseAllowance.call(addressJmpEMT, uintcAzgTcZ, {from: accounts[0]});
//		const uint256h0iKV2p = await ReviveaSvLjIp.recoverERC20.call(uintEF2Z5WR, {from: accounts[1]});
//		const uint256Suwi90T = await ReviveaSvLjIp.totalBalanceOf.call(addressGTm0YjL, {from: accounts[3]});

		assert.equal(boolZ0FzA32, true)
		assert.equal(boolpLPClis, true)
		assert.equal(uint256O50Ghg9, BigInt("0"))
		assert.equal(uint256ktM251, BigInt("0"))
		await expect(ReviveaSvLjIp.recoverERC20.call(uintEF2Z5WR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekcoLn3f = await Revive.new({from: accounts[5]});
		const uint0at8ID = BigInt("1380")
		const uint4Kbvtp = BigInt("1444")
		const byteauEW34S = "0x180b1e111f151219120b1d1912150d08090f0113ffffffff09181405150910181a0d06"
		const addressf7cIVgU = accounts[1]
//		const boolRpdRJpb = await RevivekcoLn3f.transferWithLock.call(addressf7cIVgU, byteauEW34S, uint4Kbvtp, uint0at8ID, {from: accounts[0]});

		await expect(RevivekcoLn3f.transferWithLock.call(addressf7cIVgU, byteauEW34S, uint4Kbvtp, uint0at8ID, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})