const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const uints5byX68 = BigInt("417")
		const addressZGVHVEu = accounts[0]
		const uintWOqfLUT = BigInt("1227")
		const addresszkA1cpQ = accounts[3]
		const addressJlElJp5 = accounts[1]
//		const boolAtkqLvR = await WeedburnJoBUJ1R.decreaseAllowance.call(addressZGVHVEu, uints5byX68, {from: accounts[0]});
//		const boolwCMQ6RW = await WeedburnJoBUJ1R.transferFrom.call(addressJlElJp5, addresszkA1cpQ, uintWOqfLUT, {from: accounts[1]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		await expect(WeedburnJoBUJ1R.decreaseAllowance.call(addressZGVHVEu, uints5byX68, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringdHjy8jv = "DFWmXGpA4xVnTliI8ix"
		const stringq1OOCB = ""
		const uintKNLNBd5 = BigInt("50")
		const WeedburnYs5xtbG = await Weedburn.new(stringdHjy8jv, stringq1OOCB, uintKNLNBd5, {from: accounts[4]});
		const addressrbm8Bm = accounts[4]
		const uintDOTNhs = BigInt("1273")
		const addresswWbaLz0 = accounts[0]
		const uint8LvSMC3 = await WeedburnYs5xtbG.decimals.call({from: accounts[5]});
		const uint256e3ddeCP = await WeedburnYs5xtbG.balanceOf.call(addressrbm8Bm, {from: accounts[1]});
		const boolBlhN5jH = await WeedburnYs5xtbG.decreaseAllowance.call(addresswWbaLz0, uintDOTNhs, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnYfmy3o6 = await Weedburn.new({from: accounts[3]});
		const uintZHRhLc = BigInt("708")
		const addressxLfqqMC = accounts[4]
//		await WeedburnYfmy3o6.enableLimitMode.call({from: accounts[1]});
//		await WeedburnYfmy3o6.disableLimitMode.call({from: accounts[4]});
//		const addressF7Inavm = await WeedburnYfmy3o6.burnFrom.call(addressxLfqqMC, uintZHRhLc, {from: accounts[4]});

		await expect(WeedburnYfmy3o6.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnX2sQtsM = await Weedburn.new({from: accounts[0]});
		const uintzdIlo2r = BigInt("118")
		const uintUSXdlJn = BigInt("1439")
		const uintpERbNI8 = BigInt("640")
		const addressmFHTkL = accounts[0]
		const addressBe9kwfS = accounts[2]
		const uintQeeelGD = BigInt("1612")
		const addressX7SG7k = accounts[2]
		const addressZI6uRWq = "0x0000000000000000000000000000000000000001"
//		const uint256hbHCHCA = await WeedburnX2sQtsM.burn.call(uintzdIlo2r, {from: accounts[2]});
//		const uint8NiD0k9l = await WeedburnX2sQtsM.decimals.call({from: accounts[1]});
//		const uint256cHOcxHH = await WeedburnX2sQtsM.burn.call(uintUSXdlJn, {from: accounts[2]});
//		const boolVaecBGz = await WeedburnX2sQtsM.transferFrom.call(addressBe9kwfS, addressmFHTkL, uintpERbNI8, {from: accounts[1]});
//		const addresswdnbiCA = await WeedburnX2sQtsM.burnFrom.call(addressX7SG7k, uintQeeelGD, {from: accounts[0]});
//		const uint256cRPWfqg = await WeedburnX2sQtsM.balanceOf.call(addressZI6uRWq, {from: accounts[3]});

		await expect(WeedburnX2sQtsM.burn.call(uintzdIlo2r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnYfmy3o6 = await Weedburn.new({from: accounts[3]});
		const uintbhokOkl = BigInt("708")
		const addressXchyUfc = accounts[4]
		const stringTda5IN = await WeedburnYfmy3o6.symbol.call({from: accounts[5]});
//		await WeedburnYfmy3o6.enableLimitMode.call({from: accounts[1]});
//		await WeedburnYfmy3o6.disableLimitMode.call({from: accounts[4]});
//		await WeedburnYfmy3o6.enableDevMode.call({from: accounts[0]});
//		const addressF7Inavm = await WeedburnYfmy3o6.burnFrom.call(addressXchyUfc, uintbhokOkl, {from: accounts[4]});

		assert.equal(stringTda5IN, "Weedburn")
		await expect(WeedburnYfmy3o6.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDoA9M2M = await Weedburn.new({from: accounts[0]});
		const uintqn9ntMK = BigInt("1188")
		const addressIJNhkoD = accounts[4]
//		const addressZu7Cahk = await WeedburnDoA9M2M.burnFrom.call(addressIJNhkoD, uintqn9ntMK, {from: accounts[1]});
//		await WeedburnDoA9M2M.enableLimitMode.call({from: accounts[3]});

		await expect(WeedburnDoA9M2M.burnFrom.call(addressIJNhkoD, uintqn9ntMK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnanqF1cw = await Weedburn.new({from: accounts[0]});
		const uintiVOLRX1 = BigInt("1437")
		const addressCVbTRe = accounts[1]
		const addressUk9FsJQ = accounts[5]
//		await WeedburnanqF1cw.disableDevMode.call({from: accounts[0]});
//		const uint256B1dZkMI = await WeedburnanqF1cw.burn.call(uintiVOLRX1, {from: accounts[4]});
//		await WeedburnanqF1cw.disableLimitMode.call({from: accounts[5]});
//		const uint256OUL8LuH = await WeedburnanqF1cw.allowance.call(addressUk9FsJQ, addressCVbTRe, {from: accounts[3]});

		await expect(WeedburnanqF1cw.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnX2sQtsM = await Weedburn.new({from: accounts[0]});
		const uintS10LOH3 = BigInt("1762")
		const addressUwGIP7H = accounts[5]
		const uintemTxLLz = BigInt("118")
		const uint7q4dnI = BigInt("1439")
		const uintYYWXqH5 = BigInt("640")
		const addressxxsi7XB = accounts[0]
		const addressyXtyVYy = accounts[2]
		const uintxHsUIHv = BigInt("1612")
		const addressf5XZpVq = accounts[2]
		const addressTtMzmkL = "0x0000000000000000000000000000000000000000"
		const boolivWM1wx = await WeedburnX2sQtsM.increaseAllowance.call(addressUwGIP7H, uintS10LOH3, {from: accounts[0]});
//		const uint256hbHCHCA = await WeedburnX2sQtsM.burn.call(uintemTxLLz, {from: accounts[2]});
//		const uint8NiD0k9l = await WeedburnX2sQtsM.decimals.call({from: accounts[1]});
//		const uint256cHOcxHH = await WeedburnX2sQtsM.burn.call(uint7q4dnI, {from: accounts[2]});
//		const boolVaecBGz = await WeedburnX2sQtsM.transferFrom.call(addressyXtyVYy, addressxxsi7XB, uintYYWXqH5, {from: accounts[1]});
//		const addresswdnbiCA = await WeedburnX2sQtsM.burnFrom.call(addressf5XZpVq, uintxHsUIHv, {from: accounts[0]});
//		const uint256cRPWfqg = await WeedburnX2sQtsM.balanceOf.call(addressTtMzmkL, {from: accounts[3]});

		assert.equal(boolivWM1wx, true)
		await expect(WeedburnX2sQtsM.burn.call(uintemTxLLz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRH6dy2R = await Weedburn.new({from: accounts[1]});
		const uintAQ13VOe = BigInt("101")
		const addressQkzpZqL = "0x0000000000000000000000000000000000000001"
//		await WeedburnRH6dy2R.enableDevMode.call({from: accounts[5]});
//		await WeedburnRH6dy2R.enableLimitMode.call({from: accounts[4]});
//		const addresstgl2GE = await WeedburnRH6dy2R.burnFrom.call(addressQkzpZqL, uintAQ13VOe, {from: accounts[1]});
//		const uint8vtCWn8o = await WeedburnRH6dy2R.decimals.call({from: accounts[2]});
//		const stringVoLDuwq = await WeedburnRH6dy2R.name.call({from: accounts[4]});

		await expect(WeedburnRH6dy2R.enableDevMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const uintMZMSngN = BigInt("1230")
		const addressdqZAPR9 = accounts[3]
		const addressaHQvzU = accounts[1]
//		const boolwCMQ6RW = await WeedburnJoBUJ1R.transferFrom.call(addressaHQvzU, addressdqZAPR9, uintMZMSngN, {from: accounts[1]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		await expect(WeedburnJoBUJ1R.transferFrom.call(addressaHQvzU, addressdqZAPR9, uintMZMSngN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const addressJU6vuiE = accounts[1]
		const addresst1p0vb3 = accounts[2]
		const uinttWOzMaG = BigInt("1137")
		const addressEnt2WC = accounts[4]
		const uint256SYRt5ua = await WeedburnJoBUJ1R.allowance.call(addresst1p0vb3, addressJU6vuiE, {from: accounts[3]});
		const boolHmSULeF = await WeedburnJoBUJ1R.approve.call(addressEnt2WC, uinttWOzMaG, {from: accounts[0]});

		assert.equal(boolHmSULeF, true)
		assert.equal(uint256SYRt5ua, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnlsXnQd = await Weedburn.new({from: accounts[2]});
//		await WeedburnlsXnQd.disableLimitMode.call({from: accounts[5]});
//		await WeedburnlsXnQd.disableDevMode.call({from: accounts[3]});

		await expect(WeedburnlsXnQd.disableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const uintflQif3W = BigInt("1087")
		const addressbaGONFH = accounts[1]
		const uintAeKOXnB = BigInt("289")
		const addressLFNRJEe = accounts[0]
//		const boolN5eLxtM = await WeedburnJoBUJ1R.transfer.call(addressbaGONFH, uintflQif3W, {from: accounts[3]});
//		const uint8R2LD628 = await WeedburnJoBUJ1R.decimals.call({from: accounts[5]});
//		const boolFXOfCf = await WeedburnJoBUJ1R.approve.call(addressLFNRJEe, uintAeKOXnB, {from: accounts[2]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		await expect(WeedburnJoBUJ1R.transfer.call(addressbaGONFH, uintflQif3W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const addressKMCJzC9 = "0x0000000000000000000000000000000000000001"
		const uintbUYmnDg = BigInt("1087")
		const addressv8jsKOd = accounts[1]
		const uintoAVJzGu = BigInt("289")
		const addresseQRyLnb = accounts[0]
		const uint256d9TMrSg = await WeedburnJoBUJ1R.balanceOf.call(addressKMCJzC9, {from: accounts[0]});
//		const boolN5eLxtM = await WeedburnJoBUJ1R.transfer.call(addressv8jsKOd, uintbUYmnDg, {from: accounts[3]});
//		const boolFXOfCf = await WeedburnJoBUJ1R.approve.call(addresseQRyLnb, uintoAVJzGu, {from: accounts[2]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		assert.equal(uint256d9TMrSg, BigInt("0"))
		await expect(WeedburnJoBUJ1R.transfer.call(addressv8jsKOd, uintbUYmnDg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const stringqa2lJ42 = await WeedburnJoBUJ1R.name.call({from: accounts[1]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		assert.equal(stringqa2lJ42, "t.me/burnweed1")
		await expect(WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const uintMrDkY6S = BigInt("125")
		const addressNH8kMYL = accounts[0]
		const uintIiynPtX = BigInt("1230")
		const addressKCvbm9I = accounts[3]
		const addresslTRxlKS = accounts[2]
		const uint256NAYyY2j = await WeedburnJoBUJ1R.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booldSM1Xz1 = await WeedburnJoBUJ1R.approve.call(addressNH8kMYL, uintMrDkY6S, {from: accounts[0]});
//		const boolwCMQ6RW = await WeedburnJoBUJ1R.transferFrom.call(addresslTRxlKS, addressKCvbm9I, uintIiynPtX, {from: accounts[1]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		assert.equal(booldSM1Xz1, true)
		assert.equal(uint256NAYyY2j, BigInt("100000000000000000000000"))
		await expect(WeedburnJoBUJ1R.transferFrom.call(addresslTRxlKS, addressKCvbm9I, uintIiynPtX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const uintaJqTfuU = BigInt("1087")
		const addressgcJ6Cym = accounts[1]
		const uintr1U4ap = BigInt("289")
		const addressKtjxkPv = accounts[0]
		const uintIqrSruC = BigInt("1198")
		const addressWlq4ogK = accounts[2]
		const uint8EIO7HD5 = await WeedburnJoBUJ1R.decimals.call({from: accounts[1]});
//		const boolN5eLxtM = await WeedburnJoBUJ1R.transfer.call(addressgcJ6Cym, uintaJqTfuU, {from: accounts[3]});
//		const uint8R2LD628 = await WeedburnJoBUJ1R.decimals.call({from: accounts[5]});
//		const boolFXOfCf = await WeedburnJoBUJ1R.approve.call(addressKtjxkPv, uintr1U4ap, {from: accounts[2]});
//		const addressQ5RYWyH = await WeedburnJoBUJ1R.burnFrom.call(addressWlq4ogK, uintIqrSruC, {from: accounts[4]});
//		await WeedburnJoBUJ1R.disableLimitMode.call({from: accounts[0]});

		assert.equal(uint8EIO7HD5, BigInt("18"))
		await expect(WeedburnJoBUJ1R.transfer.call(addressgcJ6Cym, uintaJqTfuU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndVB8aF = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIFJrSA2 = BigInt("1993")
		const addressjQKfW1V = accounts[4]
		const uintY862UM5 = BigInt("2004")
		const addressRfI0hX = accounts[1]
		const booluJ2EwYF = await WeedburndVB8aF.approve.call(addressjQKfW1V, uintIFJrSA2, {from: accounts[2]});
		const boolLgkxFKx = await WeedburndVB8aF.increaseAllowance.call(addressRfI0hX, uintY862UM5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const WeedburnJoBUJ1R = await Weedburn.new({from: accounts[2]});
		const addressztbwY9i = accounts[1]
		const addressxtHTCK = accounts[3]
		const uintRH3hRKt = BigInt("1293")
		const addressTSTgLJc = accounts[1]
		const uintvHnAvM = BigInt("2013")
		const addresss0yRmVV = accounts[2]
		const uint256SPWMRWN = await WeedburnJoBUJ1R.allowance.call(addressxtHTCK, addressztbwY9i, {from: accounts[4]});
		const boolLURtn1s = await WeedburnJoBUJ1R.transfer.call(addressTSTgLJc, uintRH3hRKt, {from: accounts[2]});
		const boolZaGm0nF = await WeedburnJoBUJ1R.approve.call(addresss0yRmVV, uintvHnAvM, {from: accounts[2]});

		assert.equal(boolLURtn1s, true)
		assert.equal(boolZaGm0nF, true)
		assert.equal(uint256SPWMRWN, BigInt("0"))
	});
})