const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const uintAfIBHW = BigInt("290")
		const addressIsWYrPZ = accounts[0]
		const uintYGVaNds = BigInt("1433")
		const addressIw3KZ0x = accounts[3]
		const uintRKguNi1 = BigInt("253")
		const addressOR00IPg = accounts[2]
		const addressbt4Id6C = accounts[4]
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addressIsWYrPZ, uintAfIBHW, {from: accounts[5]});
		const boold6Gf3rH = await DJCoinVgj4T1P.increaseAllowance.call(addressIw3KZ0x, uintYGVaNds, {from: accounts[4]});
		const boolL3aQ58t = await DJCoinVgj4T1P.transferFrom.call(addressbt4Id6C, addressOR00IPg, uintRKguNi1, {from: accounts[0]});

		await expect(DJCoinVgj4T1P.transfer.call(addressIsWYrPZ, uintAfIBHW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinUCvQ4DQ = await DJCoin.new({from: accounts[3]});
		const uintzbRDQO3 = BigInt("1953")
		const uintdC8Ctax = BigInt("938")
		const addressMvmPNdV = accounts[4]
		await DJCoinUCvQ4DQ.onlyOwner.call({from: accounts[4]});
		await DJCoinUCvQ4DQ.onlyOwner.call({from: accounts[3]});
		const uint256lr8x1p3 = await DJCoinUCvQ4DQ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vzk9UnR = await DJCoinUCvQ4DQ.burn.call(uintdC8Ctax, uintzbRDQO3, {from: accounts[2]});
		const addressK0fDHoQ = await DJCoinUCvQ4DQ.validRecipient.call(addressMvmPNdV, {from: accounts[2]});

		await expect(DJCoinUCvQ4DQ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinKcaMALA = await DJCoin.new({from: accounts[2]});
		const uintq2tAZPy = BigInt("1410")
		const addressviEPKjC = accounts[4]
		const uintGGwmEwy = BigInt("398")
		const addressytynC7I = accounts[0]
		const uintPUEtPYD = BigInt("1816")
		const uintJ2qzLpF = BigInt("1691")
		const uinthUWRO6h = BigInt("1595")
		const addressDfcB1d = accounts[4]
		const uintuVCMGW = BigInt("584")
		const addresswhqATG6 = accounts[3]
		const addressDQRcQAM = accounts[4]
		const boolmUuVFhm = await DJCoinKcaMALA.approve.call(addressviEPKjC, uintq2tAZPy, {from: accounts[1]});
		const boolFGBXIwo = await DJCoinKcaMALA.approve.call(addressytynC7I, uintGGwmEwy, {from: accounts[4]});
		const uint256JE0zNHO = await DJCoinKcaMALA.burn.call(uintJ2qzLpF, uintPUEtPYD, {from: accounts[1]});
		const boolFF1gX3y = await DJCoinKcaMALA.transfer.call(addressDfcB1d, uinthUWRO6h, {from: accounts[2]});
		const boolbHUTKDo = await DJCoinKcaMALA.transferFrom.call(addressDQRcQAM, addresswhqATG6, uintuVCMGW, {from: accounts[4]});

		assert.equal(boolFGBXIwo, true)
		assert.equal(boolmUuVFhm, true)
		await expect(DJCoinKcaMALA.burn.call(uintJ2qzLpF, uintPUEtPYD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinc7Lj1DV = await DJCoin.new({from: accounts[2]});
		const addressXR0zN9N = accounts[4]
		const uintj4lxsaz = BigInt("513")
		const uintgj5Q6P = BigInt("1388")
		const uint256jdZ6P9d = await DJCoinc7Lj1DV.balanceOf.call(addressXR0zN9N, {from: accounts[4]});
		const uint256xRLwcBA = await DJCoinc7Lj1DV.totalSupply.call({from: accounts[1]});
		const uint256m2jFJXb = await DJCoinc7Lj1DV.totalSupply.call({from: accounts[3]});
		const uint256aQNrFh2 = await DJCoinc7Lj1DV.burn.call(uintgj5Q6P, uintj4lxsaz, {from: accounts[0]});

		assert.equal(uint256jdZ6P9d, BigInt("0"))
		assert.equal(uint256m2jFJXb, BigInt("2100000000000"))
		assert.equal(uint256xRLwcBA, BigInt("2100000000000"))
		await expect(DJCoinc7Lj1DV.burn.call(uintgj5Q6P, uintj4lxsaz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBOmlgU = await DJCoin.new({from: accounts[3]});
		const uintayPGoyx = BigInt("1098")
		const addressZFuzpO = accounts[0]
		const addressgx1Hk4B = accounts[0]
		const uintHEFb67B = BigInt("1183")
		const addressXHGoR3J = accounts[3]
		const uintm0LtMO8 = BigInt("1685")
		const uintZmlPAIt = BigInt("381")
		const uintaKsKwU0 = BigInt("25")
		const addressWsSIGpx = accounts[4]
		const uintNuaAJAw = BigInt("1027")
		const addresstzAIz4E = accounts[2]
		const uintbcj0UuK = BigInt("847")
		const uintXfxYdbC = BigInt("917")
		const boolKyVuZH0 = await DJCoinBOmlgU.transferFrom.call(addressgx1Hk4B, addressZFuzpO, uintayPGoyx, {from: accounts[5]});
		const boolBYgXCuD = await DJCoinBOmlgU.transfer.call(addressXHGoR3J, uintHEFb67B, {from: accounts[5]});
		const uint256QXT2Hv5 = await DJCoinBOmlgU.burn.call(uintZmlPAIt, uintm0LtMO8, {from: accounts[2]});
		const boolTgm62Nf = await DJCoinBOmlgU.decreaseAllowance.call(addressWsSIGpx, uintaKsKwU0, {from: accounts[2]});
		const boolTqoIJ6J = await DJCoinBOmlgU.approve.call(addresstzAIz4E, uintNuaAJAw, {from: accounts[5]});
		const uint256WtZdFio = await DJCoinBOmlgU.burn.call(uintXfxYdbC, uintbcj0UuK, {from: accounts[2]});

		await expect(DJCoinBOmlgU.transferFrom.call(addressgx1Hk4B, addressZFuzpO, uintayPGoyx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinQbdkzTf = await DJCoin.new({from: accounts[0]});
		const uintwJPO2X6 = BigInt("1069")
		const addressZytj6Ub = accounts[3]
		const addressu8CuMDO = accounts[2]
		const addressHHeSvbN = accounts[1]
		const uintn0SHmg4 = BigInt("521")
		const addressNx69Ed = accounts[4]
		const boolV7SDXwn = await DJCoinQbdkzTf.increaseAllowance.call(addressZytj6Ub, uintwJPO2X6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aiepV5 = await DJCoinQbdkzTf.totalSupply.call({from: accounts[4]});
		const uint256DVLY14A = await DJCoinQbdkzTf.allowance.call(addressHHeSvbN, addressu8CuMDO, {from: accounts[1]});
		const boolhN1obXC = await DJCoinQbdkzTf.changetokensPerBlock.call(uintn0SHmg4, {from: accounts[4]});
		const uint256Dp2VkZi = await DJCoinQbdkzTf.totalSupply.call({from: accounts[0]});
		const addressFMvoxG = await DJCoinQbdkzTf.transferOwnership.call(addressNx69Ed, {from: accounts[4]});

		assert.equal(boolV7SDXwn, true)
		assert.equal(boolhN1obXC, true)
		assert.equal(uint256DVLY14A, BigInt("0"))
		assert.equal(uint256Dp2VkZi, BigInt("2100000000000"))
		assert.equal(uint256aiepV5, BigInt("2100000000000"))
		await expect(DJCoinQbdkzTf.transferOwnership.call(addressNx69Ed, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const addressAC0MshA = accounts[1]
		const uintxPkdKAn = BigInt("290")
		const addresskYvZxDZ = accounts[0]
		const uintqgQbXQP = BigInt("404")
		const addressbdVTHAT = accounts[3]
		const uinteblVVWa = BigInt("253")
		const addressgwwtHMf = accounts[2]
		const addresshrQiS3K = accounts[4]
		const addressRbqwz0 = await DJCoinVgj4T1P.owner.call({from: accounts[0]});
		const addressCb1kca = await DJCoinVgj4T1P.transferOwnership.call(addressAC0MshA, {from: accounts[0]});
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addresskYvZxDZ, uintxPkdKAn, {from: accounts[5]});
		const boold6Gf3rH = await DJCoinVgj4T1P.increaseAllowance.call(addressbdVTHAT, uintqgQbXQP, {from: accounts[4]});
		await DJCoinVgj4T1P.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolL3aQ58t = await DJCoinVgj4T1P.transferFrom.call(addresshrQiS3K, addressgwwtHMf, uinteblVVWa, {from: accounts[0]});

		assert.equal(addressRbqwz0, 0x9C389084D09b295963ee82996EE29FC07dd7E40e)
		await expect(DJCoinVgj4T1P.transferOwnership.call(addressAC0MshA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const addressbk3ga0k = accounts[5]
		const uintHmUOgnL = BigInt("270")
		const addressvMUbp35 = accounts[0]
		const uintBS2XKKt = BigInt("785")
		const addresseJw1OLx = accounts[3]
		const addressOgovudn = accounts[3]
		const addressWr6U7YA = await DJCoinVgj4T1P.transferOwnership.call(addressbk3ga0k, {from: accounts[1]});
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addressvMUbp35, uintHmUOgnL, {from: accounts[5]});
		const boolK7Hqm5 = await DJCoinVgj4T1P.transferFrom.call(addressOgovudn, addresseJw1OLx, uintBS2XKKt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinVgj4T1P.transfer.call(addressvMUbp35, uintHmUOgnL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const uintOCWXUFE = BigInt("536")
		const addressMzj95eC = accounts[2]
		const uintuMaAVpF = BigInt("270")
		const addressMbEGZQv = accounts[0]
		const addresscLgBcl3 = "0x0000000000000000000000000000000000000001"
		const addressAPGBp1 = accounts[5]
		const boolyqyyWDi = await DJCoinVgj4T1P.decreaseAllowance.call(addressMzj95eC, uintOCWXUFE, {from: accounts[5]});
		await DJCoinVgj4T1P.onlyOwner.call({from: accounts[1]});
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addressMbEGZQv, uintuMaAVpF, {from: accounts[5]});
		const uint256o7q7pXM = await DJCoinVgj4T1P.allowance.call(addressAPGBp1, addresscLgBcl3, {from: accounts[4]});

		assert.equal(boolyqyyWDi, true)
		await expect(DJCoinVgj4T1P.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const uintWSs9ndJ = BigInt("1832")
		const uintNEm6OiK = BigInt("1023")
		const uintAn6kuED = BigInt("1582")
		const addressHCp2P6V = accounts[4]
		const uintYYH1BaQ = BigInt("265")
		const addresswqhTfXW = accounts[0]
		const uint256rkLSVVn = await DJCoinVgj4T1P.burn.call(uintNEm6OiK, uintWSs9ndJ, {from: accounts[1]});
		const boolscFcU1r = await DJCoinVgj4T1P.approve.call(addressHCp2P6V, uintAn6kuED, {from: accounts[0]});
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addresswqhTfXW, uintYYH1BaQ, {from: accounts[5]});

		assert.equal(boolscFcU1r, true)
		assert.equal(uint256rkLSVVn, BigInt("1715280000000"))
		await expect(DJCoinVgj4T1P.transfer.call(addresswqhTfXW, uintYYH1BaQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinUjDTGSg = await DJCoin.new({from: accounts[4]});
		const uint256EtUhZt4 = await DJCoinUjDTGSg.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VoenP6j = await DJCoinUjDTGSg.totalSupply.call({from: accounts[0]});
		await DJCoinUjDTGSg.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256EtUhZt4, BigInt("2100000000000"))
		assert.equal(uint256VoenP6j, BigInt("2100000000000"))
		await expect(DJCoinUjDTGSg.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhOOGkhA = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressf72x2S8 = accounts[1]
		const addresshBUzUl9 = accounts[2]
		const addressP4B5Iw = accounts[1]
		const uint256I32zu06 = await DJCoinhOOGkhA.allowance.call(addresshBUzUl9, addressf72x2S8, {from: accounts[2]});
		const addressIt1mIf = await DJCoinhOOGkhA.validRecipient.call(addressP4B5Iw, {from: accounts[1]});
		await DJCoinhOOGkhA.onlyOwner.call({from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinVgj4T1P = await DJCoin.new({from: accounts[1]});
		const uintglIIeKi = BigInt("0")
		const addressQwTRbEM = accounts[0]
		const boolRVjZ0Wc = await DJCoinVgj4T1P.transfer.call(addressQwTRbEM, uintglIIeKi, {from: accounts[5]});
		await DJCoinVgj4T1P.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolRVjZ0Wc, true)
		await expect(DJCoinVgj4T1P.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})