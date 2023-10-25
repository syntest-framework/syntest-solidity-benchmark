const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVgj4T1P = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressIsWYrPZ = accounts[0]
		const addressVaNdsr = accounts[2]
		const addressIw3KZ0x = accounts[3]
		const uintRKguNi1 = BigInt("253")
		const addressOR00IPg = accounts[2]
		const addressbt4Id6C = accounts[4]
		const addressAfIBHW = await CryptoSecureBankTokenVgj4T1P.addBlackList.call(addressIsWYrPZ, {from: accounts[0]});
		const uintd6Gf3rH = await CryptoSecureBankTokenVgj4T1P.allowance.call(addressIw3KZ0x, addressVaNdsr, {from: accounts[4]});
		const boolL3aQ58t = await CryptoSecureBankTokenVgj4T1P.transferFrom.call(addressbt4Id6C, addressOR00IPg, uintRKguNi1, {from: accounts[0]});

		await expect(CryptoSecureBankTokenVgj4T1P.addBlackList.call(addressIsWYrPZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEopIUrU = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressBfktqqQ = accounts[1]
		await CryptoSecureBankTokenEopIUrU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNMGnNu = await CryptoSecureBankTokenEopIUrU.getOwner.call({from: accounts[2]});
		await CryptoSecureBankTokenEopIUrU.unpause.call({from: accounts[5]});
		const addresscmU8Bg6 = await CryptoSecureBankTokenEopIUrU.getOwner.call({from: accounts[1]});
		const uintqWvmPNd = await CryptoSecureBankTokenEopIUrU.balanceOf.call(addressBfktqqQ, {from: accounts[1]});

		await expect(CryptoSecureBankTokenEopIUrU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenADo1ccc = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresszZUEtP = accounts[3]
		const uint1yH8ty = await CryptoSecureBankTokenADo1ccc.totalSupply.call({from: accounts[3]});
		const uintOD2TE0z = await CryptoSecureBankTokenADo1ccc.balanceOf.call(addresszZUEtP, {from: accounts[0]});
		await CryptoSecureBankTokenADo1ccc.whenPaused.call({from: accounts[1]});
		await CryptoSecureBankTokenADo1ccc.unpause.call({from: accounts[0]});

		assert.equal(uint1yH8ty, BigInt("100000000000000000000000000"))
		assert.equal(uintOD2TE0z, BigInt("0"))
		await expect(CryptoSecureBankTokenADo1ccc.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOv1Ej6i = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintu0Yw2jF = BigInt("298")
		const addresssJTXlwe = accounts[2]
		const addresspPkQNrF = accounts[2]
		const addressQksLpiP = accounts[1]
		const addresswWf3xP = accounts[1]
		const addresszS2OkjS = "0x0000000000000000000000000000000000000001"
		const boolNbpuDjJ = await CryptoSecureBankTokenOv1Ej6i.transferFrom.call(addresspPkQNrF, addresssJTXlwe, uintu0Yw2jF, {from: accounts[3]});
		const addressthVBgj5 = await CryptoSecureBankTokenOv1Ej6i.transferOwnership.call(addressQksLpiP, {from: accounts[1]});
		const addressSJtL1jG = await CryptoSecureBankTokenOv1Ej6i.getOwner.call({from: accounts[0]});
		const addressFADiZtb = await CryptoSecureBankTokenOv1Ej6i.transferOwnership.call(addresswWf3xP, {from: accounts[1]});
		const uintuddxfdy = await CryptoSecureBankTokenOv1Ej6i.balanceOf.call(addresszS2OkjS, {from: accounts[3]});

		await expect(CryptoSecureBankTokenOv1Ej6i.transferFrom.call(addresspPkQNrF, addresssJTXlwe, uintu0Yw2jF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTZ6P9dy = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintwJ6jLmr = BigInt("651")
		const addressmfdqoIJ = "0x0000000000000000000000000000000000000001"
		const addresseizYdXR = accounts[2]
		const uintaig3oR = BigInt("1277")
		const booln31gsS = await CryptoSecureBankTokenTZ6P9dy.transfer.call(addressmfdqoIJ, uintwJ6jLmr, {from: accounts[0]});
		const addressxGuf3zA = await CryptoSecureBankTokenTZ6P9dy.setOwner2.call(addresseizYdXR, {from: accounts[0]});
		await CryptoSecureBankTokenTZ6P9dy.unpause.call({from: accounts[1]});
		const addressKsb0LMU = await CryptoSecureBankTokenTZ6P9dy.getOwner.call({from: accounts[0]});
		const uintBHgZY2Y = await CryptoSecureBankTokenTZ6P9dy.onlyPayloadSize.call(uintaig3oR, {from: accounts[0]});

		assert.equal(booln31gsS, true)
		await expect(CryptoSecureBankTokenTZ6P9dy.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressebXCzSy = accounts[4]
		const addressmg4PrN = accounts[1]
		const addressWRoUaNp = accounts[5]
		const uintKk265O2 = BigInt("135")
		const uintuv5bzoV = await CryptoSecureBankTokenz72tcYa.allowance.call(addressmg4PrN, addressebXCzSy, {from: accounts[1]});
		const uintsVkZiKJ = await CryptoSecureBankTokenz72tcYa.balanceOf.call(addressWRoUaNp, {from: accounts[0]});
		const uintDx69EdB = await CryptoSecureBankTokenz72tcYa.onlyPayloadSize.call(uintKk265O2, {from: accounts[0]});

		assert.equal(uintsVkZiKJ, BigInt("0"))
		assert.equal(uintuv5bzoV, BigInt("0"))
		await expect(CryptoSecureBankTokenz72tcYa.onlyPayloadSize.call(uintKk265O2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenclPAItL = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintqIuVQyG = BigInt("1681")
		const addressGNWOoH = accounts[4]
		const boolFGoyxhU = await CryptoSecureBankTokenclPAItL.transfer.call(addressGNWOoH, uintqIuVQyG, {from: accounts[4]});
		const addressGoR3JR = await CryptoSecureBankTokenclPAItL.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenclPAItL.whenPaused.call({from: accounts[0]});

		assert.equal(addressGoR3JR, 0x1a613922B3f4F167fEce72bF3E4956256585b8a6)
		assert.equal(boolFGoyxhU, true)
		await expect(CryptoSecureBankTokenclPAItL.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJKKue1c = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintWsZ9EKj = BigInt("1883")
		const addressz0BGDug = accounts[2]
		const boolXr6UizU = await CryptoSecureBankTokenJKKue1c.approve.call(addressz0BGDug, uintWsZ9EKj, {from: accounts[3]});
		await CryptoSecureBankTokenJKKue1c.whenNotPaused.call({from: accounts[0]});

		assert.equal(boolXr6UizU, true)
		await expect(CryptoSecureBankTokenJKKue1c.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIa8DH3k = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressE0xQBE = accounts[4]
		const uintmz0F2pN = BigInt("912")
		const addressu6BERbq = accounts[4]
		const booltwRH629 = await CryptoSecureBankTokenIa8DH3k.getBlackListStatus.call(addressE0xQBE, {from: accounts[2]});
		await CryptoSecureBankTokenIa8DH3k.pause.call({from: accounts[3]});
		const addressAUDXyHA = await CryptoSecureBankTokenIa8DH3k.getOwner.call({from: accounts[4]});
		const boolHJRlNQf = await CryptoSecureBankTokenIa8DH3k.transfer.call(addressu6BERbq, uintmz0F2pN, {from: accounts[3]});

		assert.equal(booltwRH629, false)
		await expect(CryptoSecureBankTokenIa8DH3k.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresspP8NpKf = accounts[0]
		const addresstIQOGHf = accounts[4]
		const addressKWgCGFP = accounts[2]
		const uintJSvjAp5 = BigInt("177")
		const addressG4r4ABK = await CryptoSecureBankTokenz72tcYa.transferOwnership.call(addresspP8NpKf, {from: accounts[5]});
		const uintuv5bzoV = await CryptoSecureBankTokenz72tcYa.allowance.call(addressKWgCGFP, addresstIQOGHf, {from: accounts[1]});
		const uintDx69EdB = await CryptoSecureBankTokenz72tcYa.onlyPayloadSize.call(uintJSvjAp5, {from: accounts[0]});

		await expect(CryptoSecureBankTokenz72tcYa.transferOwnership.call(addresspP8NpKf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressZj3fP6w = "0x0000000000000000000000000000000000000001"
		const addressFuayhNd = accounts[8]
		const uinttqYHZBQ = BigInt("135")
		const addresspkPZvIN = await CryptoSecureBankTokenz72tcYa.destroyBlackFunds.call(addressZj3fP6w, {from: accounts[2]});
		const uintsVkZiKJ = await CryptoSecureBankTokenz72tcYa.balanceOf.call(addressFuayhNd, {from: accounts[0]});
		const uintDx69EdB = await CryptoSecureBankTokenz72tcYa.onlyPayloadSize.call(uinttqYHZBQ, {from: accounts[0]});

		await expect(CryptoSecureBankTokenz72tcYa.destroyBlackFunds.call(addressZj3fP6w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenclPAItL = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintJmQP99d = BigInt("1681")
		const addresstFhNI0i = accounts[4]
		const uintXkLPGh4 = BigInt("369")
		const uintkhg4X1o = BigInt("97")
		const addressEhl2lZJ = accounts[0]
		const boolFGoyxhU = await CryptoSecureBankTokenclPAItL.transfer.call(addresstFhNI0i, uintJmQP99d, {from: accounts[4]});
		const boolmVuPkhj = await CryptoSecureBankTokenclPAItL.redeem.call(uintXkLPGh4, {from: accounts[4]});
		const boolEL5J228 = await CryptoSecureBankTokenclPAItL.transfer.call(addressEhl2lZJ, uintkhg4X1o, {from: accounts[0]});
		await CryptoSecureBankTokenclPAItL.whenPaused.call({from: accounts[0]});

		assert.equal(boolFGoyxhU, true)
		assert.equal(boolmVuPkhj, true)
		await expect(CryptoSecureBankTokenclPAItL.transfer.call(addressEhl2lZJ, uintkhg4X1o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressOKMpwL = accounts[4]
		const addressG76DbBV = accounts[1]
		const uintX15IsZA = BigInt("152")
		const addressnUMAXl = accounts[3]
		const uintuv5bzoV = await CryptoSecureBankTokenz72tcYa.allowance.call(addressG76DbBV, addressOKMpwL, {from: accounts[1]});
		await CryptoSecureBankTokenz72tcYa.pause.call({from: accounts[2]});
		const boolD7HYyVb = await CryptoSecureBankTokenz72tcYa.transfer.call(addressnUMAXl, uintX15IsZA, {from: accounts[4]});

		assert.equal(uintuv5bzoV, BigInt("0"))
		await expect(CryptoSecureBankTokenz72tcYa.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIxuUKsl = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYweLT5c = "0x0000000000000000000000000000000000000001"
		const addressd4JtWF9 = "0x0000000000000000000000000000000000000001"
		const addressYI8scDC = await CryptoSecureBankTokenIxuUKsl.getOwner.call({from: accounts[5]});
		const uintg0dNtO = await CryptoSecureBankTokenIxuUKsl.balanceOf.call(addressYweLT5c, {from: accounts[1]});
		const addressMEqJzT = await CryptoSecureBankTokenIxuUKsl.setOwner2.call(addressd4JtWF9, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressUYxpGXR = accounts[5]
		const addressrI2oF6B = accounts[2]
		const addressHfTXO6x = accounts[1]
		const uintjZc5guw = await CryptoSecureBankTokenz72tcYa.balanceOf.call(addressUYxpGXR, {from: accounts[3]});
		const addressKh0OaR3 = await CryptoSecureBankTokenz72tcYa.transferOwnership.call(addressrI2oF6B, {from: accounts[2]});
		const uintKaTkcZ7 = await CryptoSecureBankTokenz72tcYa.totalSupply.call({from: accounts[4]});
		const addressG4r4ABK = await CryptoSecureBankTokenz72tcYa.transferOwnership.call(addressHfTXO6x, {from: accounts[5]});

		assert.equal(uintKaTkcZ7, BigInt("100000000000000000000000000"))
		assert.equal(uintjZc5guw, BigInt("0"))
		await expect(CryptoSecureBankTokenz72tcYa.transferOwnership.call(addressHfTXO6x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressT9j0h8x = accounts[1]
		const addressQtbGhG9 = accounts[4]
		const addressM7hY6dW = accounts[1]
		const addressESF7LA7 = await CryptoSecureBankTokenz72tcYa.removeBlackList.call(addressT9j0h8x, {from: accounts[2]});
		const uintuv5bzoV = await CryptoSecureBankTokenz72tcYa.allowance.call(addressM7hY6dW, addressQtbGhG9, {from: accounts[1]});

		assert.equal(uintuv5bzoV, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintonbhox = BigInt("0")
		const addressSrrpAyU = accounts[6]
		const addressGyX4T3 = accounts[2]
		const boolRlbiED = await CryptoSecureBankTokenz72tcYa.transferFrom.call(addressGyX4T3, addressSrrpAyU, uintonbhox, {from: accounts[3]});

		assert.equal(boolRlbiED, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenz72tcYa = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintxViEkUl = BigInt("1124")
		const addressaAkw4jA = accounts[2]
		const addressVeZZUK = "0x0000000000000000000000000000000000000001"
		const uintHVo3iL3 = BigInt("302")
		const addressK3M93bF = "0x0000000000000000000000000000000000000001"
		const uintJfQuSfT = BigInt("0")
		const addressB1vk5X4 = accounts[7]
		const addressKXPHMRY = accounts[2]
		const addressINFzVjz = accounts[0]
		const addressY0I3BX = accounts[1]
		const addressG2oRQwa = accounts[4]
		const boolEWa5YV2 = await CryptoSecureBankTokenz72tcYa.transfer.call(addressaAkw4jA, uintxViEkUl, {from: accounts[2]});
		const boolWf7059N = await CryptoSecureBankTokenz72tcYa.deprecate.call(addressVeZZUK, {from: accounts[2]});
		const boolkLEcLf = await CryptoSecureBankTokenz72tcYa.approve.call(addressK3M93bF, uintHVo3iL3, {from: accounts[1]});
		const boolRlbiED = await CryptoSecureBankTokenz72tcYa.transferFrom.call(addressKXPHMRY, addressB1vk5X4, uintJfQuSfT, {from: accounts[3]});
		const uintTJcKlEv = await CryptoSecureBankTokenz72tcYa.allowance.call(addressY0I3BX, addressINFzVjz, {from: accounts[0]});
		const addressQXDTPiM = await CryptoSecureBankTokenz72tcYa.removeBlackList.call(addressG2oRQwa, {from: accounts[1]});
		const uintEcKY38T = await CryptoSecureBankTokenz72tcYa.totalSupply.call({from: accounts[4]});

		assert.equal(boolEWa5YV2, true)
		assert.equal(boolRlbiED, true)
		assert.equal(boolWf7059N, true)
		assert.equal(boolkLEcLf, true)
		assert.equal(uintTJcKlEv, BigInt("0"))
		await expect(CryptoSecureBankTokenz72tcYa.removeBlackList.call(addressG2oRQwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenclPAItL = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressYJ17TjN = accounts[2]
		const uintZR7vTb = BigInt("1681")
		const addressRBR2AKO = accounts[6]
		const uintTkm9kWp = BigInt("741")
		const uintynnIbqS = BigInt("650")
		const addressEuB2k3p = accounts[2]
		const addressLtDqSfJ = await CryptoSecureBankTokenclPAItL.addBlackList.call(addressYJ17TjN, {from: accounts[4]});
		const boolFGoyxhU = await CryptoSecureBankTokenclPAItL.transfer.call(addressRBR2AKO, uintZR7vTb, {from: accounts[4]});
		const boolS6VVXV6 = await CryptoSecureBankTokenclPAItL.redeem.call(uintTkm9kWp, {from: accounts[2]});
		const boolPdY33V7 = await CryptoSecureBankTokenclPAItL.transfer.call(addressEuB2k3p, uintynnIbqS, {from: accounts[3]});

		assert.equal(boolFGoyxhU, true)
		await expect(CryptoSecureBankTokenclPAItL.redeem.call(uintTkm9kWp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})