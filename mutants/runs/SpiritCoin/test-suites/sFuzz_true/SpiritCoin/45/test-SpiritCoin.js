const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressw1nKCt5 = accounts[4]
		const addressiDOxJn3 = "0x0000000000000000000000000000000000000001"
		const SpiritCoinHO9UD6F = await SpiritCoin.new(addressw1nKCt5, addressiDOxJn3, {from: "0x0000000000000000000000000000000000000001"});
		const addresstZ3pq8e = accounts[2]
		const addressBLAUU8r = accounts[3]
		const addressS5WN2Tg = "0x0000000000000000000000000000000000000001"
		const uintOAbIl7 = BigInt("1945")
		const addressBemvAQw = accounts[0]
		const uintgUCvkji = BigInt("2037")
		const addressqxSimif = accounts[0]
		const uintHDrLYcr = await SpiritCoinHO9UD6F.balanceOf.call(addresstZ3pq8e, {from: "0x0000000000000000000000000000000000000001"});
		const uintyB0UrFc = await SpiritCoinHO9UD6F.allowance.call(addressS5WN2Tg, addressBLAUU8r, {from: accounts[2]});
		const boolAmQ6F2K = await SpiritCoinHO9UD6F.transfer.call(addressBemvAQw, uintOAbIl7, {from: accounts[1]});
		const boolTnrejx9 = await SpiritCoinHO9UD6F.approve.call(addressqxSimif, uintgUCvkji, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressk1StDj = accounts[0]
		const addressVK6fINI = accounts[1]
		const SpiritCoinIXMnwwn = await SpiritCoin.new(addressk1StDj, addressVK6fINI, {from: accounts[2]});
		const addressX4dA3Og = accounts[0]
		const uintUTmhvzG = BigInt("1421")
		const addressg7umKQ = accounts[3]
		const addressDh1yLWJ = accounts[1]
		const uintqlVxbSS = BigInt("1860")
		const addressNEYjnE = accounts[3]
		const uinttQOKTZy = await SpiritCoinIXMnwwn.balanceOf.call(addressX4dA3Og, {from: accounts[2]});
		const boolljIBMVE = await SpiritCoinIXMnwwn.transferFrom.call(addressDh1yLWJ, addressg7umKQ, uintUTmhvzG, {from: accounts[3]});
		const addressc15x8Ai = await SpiritCoinIXMnwwn.mint.call(addressNEYjnE, uintqlVxbSS, {from: accounts[3]});

		assert.equal(uinttQOKTZy, BigInt("10000000000000000000000000"))
		await expect(SpiritCoinIXMnwwn.transferFrom.call(addressDh1yLWJ, addressg7umKQ, uintUTmhvzG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressseZG2Ec = accounts[2]
		const address6Z3rpG = accounts[5]
		const SpiritCoinP7S5ONH = await SpiritCoin.new(addressseZG2Ec, address6Z3rpG, {from: accounts[4]});
		const addressDbWEujE = accounts[4]
		const addresszVOdrOc = accounts[0]
		const uintjlbWMKE = BigInt("792")
		const addressMnCL77Y = "0x0000000000000000000000000000000000000001"
		const uintQCLplyj = BigInt("1198")
		const addressmfGFaw9 = accounts[4]
		const addressVBVdJuZ = accounts[2]
		const addressoPOFR1W = accounts[3]
		const uintsyCGCuh = BigInt("983")
		const addressyZEgKX = "0x0000000000000000000000000000000000000001"
		const addressJnpJVpu = accounts[0]
		const uintyDsFDYw = await SpiritCoinP7S5ONH.allowance.call(addresszVOdrOc, addressDbWEujE, {from: accounts[5]});
		const addressLbCFxG = await SpiritCoinP7S5ONH.mint.call(addressMnCL77Y, uintjlbWMKE, {from: accounts[2]});
		const addressNWMEjf7 = await SpiritCoinP7S5ONH.mint.call(addressmfGFaw9, uintQCLplyj, {from: accounts[4]});
		const uintWeJiaP = await SpiritCoinP7S5ONH.allowance.call(addressoPOFR1W, addressVBVdJuZ, {from: accounts[4]});
		const boolQaiDtq3 = await SpiritCoinP7S5ONH.transferFrom.call(addressJnpJVpu, addressyZEgKX, uintsyCGCuh, {from: accounts[4]});

		assert.equal(uintyDsFDYw, BigInt("0"))
		await expect(SpiritCoinP7S5ONH.mint.call(addressMnCL77Y, uintjlbWMKE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressRRFnTFb = accounts[3]
		const addresstYfZy5d = accounts[4]
		const SpiritCoinMEvGrhX = await SpiritCoin.new(addressRRFnTFb, addresstYfZy5d, {from: accounts[2]});
		const addressGX9bZDV = accounts[2]
		const addressFS3Vyf4 = accounts[0]
		const uintK8advoV = BigInt("121")
		const addressCvXcF1 = accounts[3]
		const uintob1XD24 = BigInt("1011")
		const addressRatVR3h = accounts[4]
		const addressCMq8xee = "0x0000000000000000000000000000000000000001"
		const addresskFrMUF9 = "0x0000000000000000000000000000000000000001"
		const uintghRoGjq = await SpiritCoinMEvGrhX.allowance.call(addressFS3Vyf4, addressGX9bZDV, {from: "0x0000000000000000000000000000000000000001"});
		const boolA3mRUNQ = await SpiritCoinMEvGrhX.transfer.call(addressCvXcF1, uintK8advoV, {from: accounts[5]});
		const boolY5jNEW = await SpiritCoinMEvGrhX.transferFrom.call(addressCMq8xee, addressRatVR3h, uintob1XD24, {from: accounts[2]});
		const addressgKUTVkR = await SpiritCoinMEvGrhX.setMinter.call(addresskFrMUF9, {from: accounts[1]});

		assert.equal(uintghRoGjq, BigInt("0"))
		await expect(SpiritCoinMEvGrhX.transfer.call(addressCvXcF1, uintK8advoV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressKJPbvwu = accounts[2]
		const addresstx3u0Os = accounts[3]
		const SpiritCoindrkbQ1J = await SpiritCoin.new(addressKJPbvwu, addresstx3u0Os, {from: accounts[3]});
		const addressT9jzZgF = accounts[4]
		const uintJMP10hw = BigInt("1744")
		const addressNwQnirT = "0x0000000000000000000000000000000000000001"
		const uintEYwPdAA = BigInt("1751")
		const addresscj4uVwR = accounts[5]
		const addresssHXSyYy = await SpiritCoindrkbQ1J.setMinter.call(addressT9jzZgF, {from: accounts[2]});
		const boolZUaov05 = await SpiritCoindrkbQ1J.transfer.call(addressNwQnirT, uintJMP10hw, {from: "0x0000000000000000000000000000000000000001"});
		const addresser0j0zW = await SpiritCoindrkbQ1J.mint.call(addresscj4uVwR, uintEYwPdAA, {from: accounts[0]});

		await expect(SpiritCoindrkbQ1J.setMinter.call(addressT9jzZgF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressU6jHCT = accounts[3]
		const addressYM1FvJT = accounts[1]
		const SpiritCoinhtF0tNx = await SpiritCoin.new(addressU6jHCT, addressYM1FvJT, {from: accounts[1]});
		const uintlfDu2XQ = BigInt("1343")
		const addressg5oKMN9 = accounts[5]
		const uintHkn3Ozf = BigInt("931")
		const addressRe0j5aI = accounts[4]
		const addressRbVN8j1 = accounts[0]
		const uintif2FekJ = BigInt("814")
		const addressma5JePk = accounts[3]
		const uintfk11sTl = BigInt("1635")
		const addressH2Mz3ys = accounts[3]
		const addressf9hA0k6 = accounts[3]
		const addressMJ07P51 = accounts[0]
		const boolkh645Ps = await SpiritCoinhtF0tNx.approve.call(addressg5oKMN9, uintlfDu2XQ, {from: accounts[3]});
		const boolqlMQ8Iv = await SpiritCoinhtF0tNx.transfer.call(addressRe0j5aI, uintHkn3Ozf, {from: accounts[4]});
		const uintaJnF78O = await SpiritCoinhtF0tNx.balanceOf.call(addressRbVN8j1, {from: accounts[1]});
		const boolbPUWDLT = await SpiritCoinhtF0tNx.transfer.call(addressma5JePk, uintif2FekJ, {from: accounts[2]});
		const boolEb5vM4S = await SpiritCoinhtF0tNx.transferFrom.call(addressf9hA0k6, addressH2Mz3ys, uintfk11sTl, {from: accounts[0]});
		const uintx1nNRUl = await SpiritCoinhtF0tNx.balanceOf.call(addressMJ07P51, {from: accounts[5]});

		assert.equal(boolkh645Ps, true)
		await expect(SpiritCoinhtF0tNx.transfer.call(addressRe0j5aI, uintHkn3Ozf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressrXIu6Rd = accounts[3]
		const addressMdqlP3R = accounts[2]
		const SpiritCoinMMBKlYH = await SpiritCoin.new(addressrXIu6Rd, addressMdqlP3R, {from: accounts[1]});
		const uinttTN1l2H = BigInt("181")
		const addressmxzfc6S = accounts[5]
		const uintJiiHHsW = BigInt("456")
		const addressp4iZ1U = "0x0000000000000000000000000000000000000001"
		const addressHDweu4e = accounts[4]
		const addressKjZebXt = accounts[2]
		const uintZ1N4b0J = BigInt("1581")
		const address9puD39 = accounts[3]
		const addressO83FAYX = accounts[3]
		const boolbw504I = await SpiritCoinMMBKlYH.approve.call(addressmxzfc6S, uinttTN1l2H, {from: accounts[1]});
		const addressGPTxXc = await SpiritCoinMMBKlYH.mint.call(addressp4iZ1U, uintJiiHHsW, {from: accounts[2]});
		const uintaixYzNr = await SpiritCoinMMBKlYH.balanceOf.call(addressHDweu4e, {from: accounts[0]});
		const addressJqyz63o = await SpiritCoinMMBKlYH.setMinter.call(addressKjZebXt, {from: accounts[0]});
		const boolSfEy1Ht = await SpiritCoinMMBKlYH.transferFrom.call(addressO83FAYX, address9puD39, uintZ1N4b0J, {from: accounts[5]});

		assert.equal(boolbw504I, true)
		assert.equal(uintaixYzNr, BigInt("0"))
		await expect(SpiritCoinMMBKlYH.setMinter.call(addressKjZebXt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressaMv5B7A = accounts[2]
		const addressqVzDwsQ = accounts[3]
		const SpiritCoindrkbQ1J = await SpiritCoin.new(addressaMv5B7A, addressqVzDwsQ, {from: accounts[3]});
		const uintb9jeq6r = BigInt("109")
		const addressANx2mVo = accounts[4]
		const addressG9oQImV = accounts[2]
		const boolgLjkacE = await SpiritCoindrkbQ1J.transfer.call(addressANx2mVo, uintb9jeq6r, {from: accounts[2]});
		const addresssHXSyYy = await SpiritCoindrkbQ1J.setMinter.call(addressG9oQImV, {from: accounts[2]});

		assert.equal(boolgLjkacE, true)
		await expect(SpiritCoindrkbQ1J.setMinter.call(addressG9oQImV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressgNArkZP = accounts[2]
		const addressxKqiqij = accounts[3]
		const SpiritCoindrkbQ1J = await SpiritCoin.new(addressgNArkZP, addressxKqiqij, {from: accounts[3]});
		const addresshxblN4G = accounts[5]
		const addressBSH3phO = accounts[5]
		const addressx9XA06O = accounts[1]
		const addressMaZk3sy = accounts[4]
		const addresszbAg1Hy = await SpiritCoindrkbQ1J.setMinter.call(addresshxblN4G, {from: accounts[3]});
		const addresssHXSyYy = await SpiritCoindrkbQ1J.setMinter.call(addressBSH3phO, {from: accounts[2]});
		const uintabyx9qm = await SpiritCoindrkbQ1J.allowance.call(addressMaZk3sy, addressx9XA06O, {from: accounts[2]});

		await expect(SpiritCoindrkbQ1J.setMinter.call(addressBSH3phO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})