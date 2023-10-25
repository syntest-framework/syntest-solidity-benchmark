const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinR9y63Hz = await FreakCoin.new({from: accounts[1]});
		const uintc23HKZ = BigInt("166")
		const addressxkaoGz1 = accounts[0]
		const addressZRmQL1 = accounts[1]
		const uintIujX7sY = BigInt("230")
		const addressRTaoLKU = accounts[3]
		const addressHzwkFbO = "0x0000000000000000000000000000000000000001"
//		const boolGHNXA55 = await FreakCoinR9y63Hz.transferFrom.call(addressZRmQL1, addressxkaoGz1, uintc23HKZ, {from: accounts[1]});
//		const boolYjBacGZ = await FreakCoinR9y63Hz.transferFrom.call(addressHzwkFbO, addressRTaoLKU, uintIujX7sY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FreakCoinR9y63Hz.transferFrom.call(addressZRmQL1, addressxkaoGz1, uintc23HKZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinM93JgFI = await FreakCoin.new({from: accounts[0]});
		const uintVXd5PXz = BigInt("1927")
		const addressFKIFeVF = accounts[2]
		const uintKP5gFvm = BigInt("499")
		const addressCDfIka = accounts[3]
		const addressCeYTnMK = accounts[0]
		const boolY5ZwQp0 = await FreakCoinM93JgFI.approve.call(addressFKIFeVF, uintVXd5PXz, {from: accounts[1]});
		const addressRbhokL2 = await FreakCoinM93JgFI.uniswapAddress.call({from: accounts[2]});
		const boolCEmPLc8 = await FreakCoinM93JgFI.transfer.call(addressCDfIka, uintKP5gFvm, {from: accounts[0]});
		const uint256dRitTWB = await FreakCoinM93JgFI.balanceOf.call(addressCeYTnMK, {from: accounts[0]});

		assert.equal(addressRbhokL2, 0x0000000000000000000000000000000000000000)
		assert.equal(boolCEmPLc8, true)
		assert.equal(boolY5ZwQp0, true)
		assert.equal(uint256dRitTWB, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGkbEHW = await FreakCoin.new({from: accounts[2]});
		const addressymh1Hov = "0x0000000000000000000000000000000000000001"
		const addressjCefKZR = accounts[5]
		const uintg6Fq7L = BigInt("253")
		const address90Bztr = accounts[2]
		const addressZqFGGh4 = accounts[1]
		const uint256xLGKajD = await FreakCoinGkbEHW.allowance.call(addressjCefKZR, addressymh1Hov, {from: accounts[5]});
//		const boolnU3CsuI = await FreakCoinGkbEHW.transferFrom.call(addressZqFGGh4, address90Bztr, uintg6Fq7L, {from: accounts[2]});
//		const addressduT5qB3 = await FreakCoinGkbEHW.uniswapAddress.call({from: accounts[0]});

		assert.equal(uint256xLGKajD, BigInt("0"))
		await expect(FreakCoinGkbEHW.transferFrom.call(addressZqFGGh4, address90Bztr, uintg6Fq7L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinyrykvaA = await FreakCoin.new({from: accounts[2]});
		const addressAkS5Z66 = accounts[2]
		const uintFhxb5PG = BigInt("388")
		const addressI25WISA = accounts[3]
		const uintWXyOCrF = BigInt("554")
		const addresskGCgqfT = accounts[1]
		const addressEvILDU3 = accounts[1]
		const uint256tuUpJCl = await FreakCoinyrykvaA.allUserBalances.call(addressAkS5Z66, {from: accounts[3]});
		const boolZ0O1hWU = await FreakCoinyrykvaA.approve.call(addressI25WISA, uintFhxb5PG, {from: accounts[5]});
		const boolTcsEe6l = await FreakCoinyrykvaA.approve.call(addresskGCgqfT, uintWXyOCrF, {from: accounts[2]});
//		const uint256tNgHJrr = await FreakCoinyrykvaA.allUserBalances.call(addressEvILDU3, {from: accounts[3]});

		assert.equal(boolTcsEe6l, true)
		assert.equal(boolZ0O1hWU, true)
		await expect(FreakCoinyrykvaA.allUserBalances.call(addressEvILDU3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinM93JgFI = await FreakCoin.new({from: accounts[0]});
		const uintEixeMzX = BigInt("1927")
		const addressgKfAlpJ = accounts[2]
		const addressuxVw0pi = accounts[1]
		const uintJ7YTIZR = BigInt("499")
		const addresshTjxDc = accounts[3]
		const uinth8ONXlD = BigInt("1413")
		const addresskv44KxB = accounts[5]
		const boolY5ZwQp0 = await FreakCoinM93JgFI.approve.call(addressgKfAlpJ, uintEixeMzX, {from: accounts[1]});
		const addressRbhokL2 = await FreakCoinM93JgFI.uniswapAddress.call({from: accounts[2]});
//		const addressHzv8o7s = await FreakCoinM93JgFI.setUniswapAddress.call(addressuxVw0pi, {from: accounts[3]});
//		const boolCEmPLc8 = await FreakCoinM93JgFI.transfer.call(addresshTjxDc, uintJ7YTIZR, {from: accounts[0]});
//		const boolMg5Sfr = await FreakCoinM93JgFI.approve.call(addresskv44KxB, uinth8ONXlD, {from: accounts[0]});

		assert.equal(addressRbhokL2, 0x0000000000000000000000000000000000000000)
		assert.equal(boolY5ZwQp0, true)
		await expect(FreakCoinM93JgFI.setUniswapAddress.call(addressuxVw0pi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinM93JgFI = await FreakCoin.new({from: accounts[0]});
		const uintkAQgJ35 = BigInt("1925")
		const addressFydTjVP = accounts[2]
		const uintfaGSTjK = BigInt("499")
		const addressEyaOse = accounts[3]
		const addressizR9hiZ = accounts[4]
		const boolY5ZwQp0 = await FreakCoinM93JgFI.approve.call(addressFydTjVP, uintkAQgJ35, {from: accounts[1]});
		const boolCEmPLc8 = await FreakCoinM93JgFI.transfer.call(addressEyaOse, uintfaGSTjK, {from: accounts[0]});
		const addresswzAeL0P = await FreakCoinM93JgFI.setUniswapAddress.call(addressizR9hiZ, {from: accounts[0]});

		assert.equal(boolCEmPLc8, true)
		assert.equal(boolY5ZwQp0, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinK1DndjG = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRKTwI6X = BigInt("353")
		const addressZ4OxNn2 = accounts[1]
		const addressGFBXYg = accounts[4]
		const uintFeksS4H = BigInt("177")
		const addressc8nZ72I = accounts[0]
		const addressZ6qMYD = accounts[1]
		const booleZMZJSu = await FreakCoinK1DndjG.approve.call(addressZ4OxNn2, uintRKTwI6X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256goc263x = await FreakCoinK1DndjG.allUserBalances.call(addressGFBXYg, {from: accounts[0]});
		const boolUPbwUxM = await FreakCoinK1DndjG.transferFrom.call(addressZ6qMYD, addressc8nZ72I, uintFeksS4H, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinM93JgFI = await FreakCoin.new({from: accounts[0]});
		const uintHAy2Cnz = BigInt("409")
		const addressWFAMVJu = accounts[0]
		const uintZIZIMcA = BigInt("499")
		const addressTTXxTPV = accounts[4]
		const addressGSoXNxu = await FreakCoinM93JgFI.uniswapAddress.call({from: accounts[2]});
		const booleLNHp7P = await FreakCoinM93JgFI.transfer.call(addressWFAMVJu, uintHAy2Cnz, {from: accounts[0]});
		const boolCEmPLc8 = await FreakCoinM93JgFI.transfer.call(addressTTXxTPV, uintZIZIMcA, {from: accounts[0]});

		assert.equal(addressGSoXNxu, 0x0000000000000000000000000000000000000000)
		assert.equal(boolCEmPLc8, true)
		assert.equal(booleLNHp7P, true)
	});
})