const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinRfi3IKF = await DJCoin.new({from: accounts[0]});
		const addressPe6J1f0 = accounts[0]
		const uintIJeScql = BigInt("1617")
		const uintbLhNJ8L = BigInt("172")
		const uinthPBM4YV = BigInt("410")
		const addressFh5xoB6 = accounts[5]
		const uintP6p9hf = BigInt("1045")
		const addressx98hse = accounts[4]
//		const addresstbV5UZ = await DJCoinRfi3IKF.transferOwnership.call(addressPe6J1f0, {from: accounts[2]});
//		const uint256TIwXWC0 = await DJCoinRfi3IKF.burn.call(uintbLhNJ8L, uintIJeScql, {from: accounts[1]});
//		const boolBAVQhTZ = await DJCoinRfi3IKF.transfer.call(addressFh5xoB6, uinthPBM4YV, {from: accounts[3]});
//		const addressA78qtgx = await DJCoinRfi3IKF.owner.call({from: accounts[0]});
//		const boolFeW6v5U = await DJCoinRfi3IKF.transfer.call(addressx98hse, uintP6p9hf, {from: accounts[3]});

		await expect(DJCoinRfi3IKF.transferOwnership.call(addressPe6J1f0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZHOvI7C = await DJCoin.new({from: accounts[3]});
		const addressC1fg4Pl = accounts[1]
		const addressjz9BMqA = accounts[5]
//		const addressOPPCe5z = await DJCoinZHOvI7C.validRecipient.call(addressC1fg4Pl, {from: accounts[5]});
//		const uint256OgCBRdB = await DJCoinZHOvI7C.balanceOf.call(addressjz9BMqA, {from: accounts[0]});
//		await DJCoinZHOvI7C.renounceOwnership.call({from: accounts[0]});
//		await DJCoinZHOvI7C.onlyOwner.call({from: accounts[5]});

		await expect(DJCoinZHOvI7C.validRecipient.call(addressC1fg4Pl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkBRy6uv = await DJCoin.new({from: accounts[1]});
		const uintpARDWo8 = BigInt("283")
		const addresskTzFdMZ = accounts[2]
		const addressiWo9BEU = accounts[3]
		const addresso05A6b = accounts[2]
		const addressfozVDpO = accounts[2]
		const boolyU6dLGW = await DJCoinkBRy6uv.decreaseAllowance.call(addresskTzFdMZ, uintpARDWo8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHBadwGj = await DJCoinkBRy6uv.validRecipient.call(addressiWo9BEU, {from: accounts[0]});
//		const uint256B33HoU2 = await DJCoinkBRy6uv.allowance.call(addressfozVDpO, addresso05A6b, {from: accounts[2]});

		assert.equal(boolyU6dLGW, true)
		await expect(DJCoinkBRy6uv.validRecipient.call(addressiWo9BEU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoind10RxBk = await DJCoin.new({from: accounts[2]});
		const uinttGwo0W8 = BigInt("647")
		const uintSxZKxSm = BigInt("216")
		const addressP1Eb5Z8 = accounts[4]
		const addressVmbrqP1 = accounts[0]
//		await DJCoind10RxBk.renounceOwnership.call({from: accounts[2]});
//		const uint256jbJsAXR = await DJCoind10RxBk.burn.call(uintSxZKxSm, uinttGwo0W8, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswzGWkYj = await DJCoind10RxBk.validRecipient.call(addressP1Eb5Z8, {from: accounts[1]});
//		const addressYrH8iP = await DJCoind10RxBk.validRecipient.call(addressVmbrqP1, {from: accounts[3]});

		await expect(DJCoind10RxBk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinfx4MkXk = await DJCoin.new({from: accounts[0]});
		const uintZEMDUSE = BigInt("1831")
		const addressu8wZ0HH = accounts[3]
		const addressJ5OBa9 = accounts[2]
		const addressozk73pK = accounts[2]
		const addressd6cqgpN = "0x0000000000000000000000000000000000000001"
		const addressyWEatVa = accounts[0]
		const uintfaiYQ9N = BigInt("2006")
		const addressq2tv73X = accounts[5]
		const boolgc2WFYQ = await DJCoinfx4MkXk.decreaseAllowance.call(addressu8wZ0HH, uintZEMDUSE, {from: accounts[4]});
		const uint256rM4cKFX = await DJCoinfx4MkXk.allowance.call(addressozk73pK, addressJ5OBa9, {from: accounts[0]});
//		const addressiVhw529 = await DJCoinfx4MkXk.validRecipient.call(addressd6cqgpN, {from: accounts[1]});
//		const addressE4TAOZS = await DJCoinfx4MkXk.validRecipient.call(addressyWEatVa, {from: accounts[3]});
//		const uint256y2EhTrH = await DJCoinfx4MkXk.totalSupply.call({from: accounts[1]});
//		const boolL69G19 = await DJCoinfx4MkXk.approve.call(addressq2tv73X, uintfaiYQ9N, {from: accounts[1]});

		assert.equal(boolgc2WFYQ, true)
		assert.equal(uint256rM4cKFX, BigInt("0"))
		await expect(DJCoinfx4MkXk.validRecipient.call(addressd6cqgpN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinNaNGVyf = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJZMWqUr = BigInt("977")
		const addressWgOdick = accounts[4]
		const uintq2DSaNl = BigInt("1772")
		const uintP7V2pNK = BigInt("738")
		const addressozJftjn = accounts[4]
		const addressHR6W88U = accounts[3]
		const addressj4O0IZp = accounts[4]
		const boolkiHhcXy = await DJCoinNaNGVyf.approve.call(addressWgOdick, uintJZMWqUr, {from: accounts[2]});
		const uint256qSe50EQ = await DJCoinNaNGVyf.burn.call(uintP7V2pNK, uintq2DSaNl, {from: accounts[3]});
		const addressEOTwhB = await DJCoinNaNGVyf.owner.call({from: accounts[2]});
		await DJCoinNaNGVyf.onlyOwner.call({from: accounts[4]});
		const uint256KHqEcVO = await DJCoinNaNGVyf.balanceOf.call(addressozJftjn, {from: accounts[3]});
		const uint2565LrMRh = await DJCoinNaNGVyf.allowance.call(addressj4O0IZp, addressHR6W88U, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoin0jl3Tu = await DJCoin.new({from: accounts[3]});
		const uintVqIX4LB = BigInt("815")
		const addressim6VQbO = accounts[5]
		const addressfaSCOIf = "0x0000000000000000000000000000000000000001"
		const uintL6cc2st = BigInt("97")
		const addressvodP2xg = accounts[5]
		const addressNzK3ZFr = accounts[4]
//		const boolrrijsbJ = await DJCoin0jl3Tu.transfer.call(addressim6VQbO, uintVqIX4LB, {from: accounts[1]});
//		await DJCoin0jl3Tu.renounceOwnership.call({from: accounts[3]});
//		const addresso0X0PP = await DJCoin0jl3Tu.validRecipient.call(addressfaSCOIf, {from: accounts[4]});
//		const booluqyYxn0 = await DJCoin0jl3Tu.transfer.call(addressvodP2xg, uintL6cc2st, {from: accounts[2]});
//		const addressba9LtT = await DJCoin0jl3Tu.transferOwnership.call(addressNzK3ZFr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoin0jl3Tu.transfer.call(addressim6VQbO, uintVqIX4LB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinx5o2Bci = await DJCoin.new({from: accounts[3]});
		const addresssGf1K75 = accounts[2]
		const uintiED85Jf = BigInt("1114")
		const addresswnu6IAN = accounts[0]
		const uint256Ma0u7N = await DJCoinx5o2Bci.totalSupply.call({from: accounts[5]});
//		await DJCoinx5o2Bci.onlyOwner.call({from: accounts[2]});
//		const addressbvzlDRe = await DJCoinx5o2Bci.validRecipient.call(addresssGf1K75, {from: accounts[2]});
//		const boolpu1sLZl = await DJCoinx5o2Bci.decreaseAllowance.call(addresswnu6IAN, uintiED85Jf, {from: accounts[1]});

		assert.equal(uint256Ma0u7N, BigInt("2100000000000"))
		await expect(DJCoinx5o2Bci.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinrmUbrPu = await DJCoin.new({from: accounts[4]});
		const uintsdetaGi = BigInt("1285")
		const addressqPDhvEb = accounts[3]
		const addressOFwv3mQ = accounts[0]
		const addressuh7441r = accounts[4]
//		const boolCUx0xcx = await DJCoinrmUbrPu.transferFrom.call(addressOFwv3mQ, addressqPDhvEb, uintsdetaGi, {from: accounts[3]});
//		const addressrxa8LzI = await DJCoinrmUbrPu.transferOwnership.call(addressuh7441r, {from: accounts[2]});
//		await DJCoinrmUbrPu.onlyOwner.call({from: accounts[1]});
//		const uint256gafv22W = await DJCoinrmUbrPu.totalSupply.call({from: accounts[4]});

		await expect(DJCoinrmUbrPu.transferFrom.call(addressOFwv3mQ, addressqPDhvEb, uintsdetaGi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintgEbcAi6 = BigInt("1157")
		const addressVsLTjA = accounts[3]
		const addressYo6iVA = accounts[3]
		const addressV7a185Z = accounts[4]
		const uintCm4Bect = BigInt("1635")
		const address3w1ka1 = accounts[0]
		const addressh0h4maG = accounts[4]
		const boolZ7GChNK = await DJCoinqL2v0M6.decreaseAllowance.call(addressVsLTjA, uintgEbcAi6, {from: accounts[0]});
		const addressEHip6Ry = await DJCoinqL2v0M6.owner.call({from: accounts[0]});
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addressV7a185Z, addressYo6iVA, {from: accounts[5]});
		const uint256bgWs56A = await DJCoinqL2v0M6.totalSupply.call({from: accounts[4]});
//		const boolN1bxAci = await DJCoinqL2v0M6.transferFrom.call(addressh0h4maG, address3w1ka1, uintCm4Bect, {from: accounts[5]});

		assert.equal(addressEHip6Ry, 0xB4fB09b06CF43Ae8E824fF025cB641C8Fb22694b)
		assert.equal(boolZ7GChNK, true)
		assert.equal(uint256STOO717, BigInt("0"))
		assert.equal(uint256bgWs56A, BigInt("2100000000000"))
		await expect(DJCoinqL2v0M6.transferFrom.call(addressh0h4maG, address3w1ka1, uintCm4Bect, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintSh3hZ3q = BigInt("257")
		const addressXBfUoLP = accounts[2]
		const addressaHD2Jfa = accounts[4]
		const addresszVm0CNK = accounts[3]
		const uint256ycp2KQG = await DJCoinqL2v0M6.totalSupply.call({from: accounts[5]});
		const boolpe0i3Si = await DJCoinqL2v0M6.approve.call(addressXBfUoLP, uintSh3hZ3q, {from: accounts[2]});
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addresszVm0CNK, addressaHD2Jfa, {from: accounts[5]});

		assert.equal(boolpe0i3Si, true)
		assert.equal(uint256STOO717, BigInt("0"))
		assert.equal(uint256ycp2KQG, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const addresst8hnw2d = accounts[3]
		const addressQiepq5a = accounts[3]
		const uintJ1aI5lB = BigInt("1579")
		const uintuNQRQM = BigInt("1010")
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addressQiepq5a, addresst8hnw2d, {from: accounts[5]});
		const uint256jhN4zou = await DJCoinqL2v0M6.burn.call(uintuNQRQM, uintJ1aI5lB, {from: accounts[4]});

		assert.equal(uint256STOO717, BigInt("0"))
		assert.equal(uint256jhN4zou, BigInt("1768410000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintAKDJOpv = BigInt("1649")
		const addressEd7sxs8 = accounts[3]
		const addressVTIlQJ = accounts[5]
		const addressKEMQQN = accounts[3]
		const uint256CXYyHRd = await DJCoinqL2v0M6.totalSupply.call({from: accounts[3]});
		const uint256nOtKQHG = await DJCoinqL2v0M6.totalSupply.call({from: accounts[0]});
		const boolkfpDYVI = await DJCoinqL2v0M6.changetokensPerBlock.call(uintAKDJOpv, {from: accounts[4]});
		const uint256S72CuWY = await DJCoinqL2v0M6.balanceOf.call(addressEd7sxs8, {from: accounts[3]});
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addressKEMQQN, addressVTIlQJ, {from: accounts[5]});

		assert.equal(boolkfpDYVI, true)
		assert.equal(uint256CXYyHRd, BigInt("2100000000000"))
		assert.equal(uint256S72CuWY, BigInt("0"))
		assert.equal(uint256STOO717, BigInt("0"))
		assert.equal(uint256nOtKQHG, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintPvp8mDH = BigInt("205")
		const addressmjbx8q8 = accounts[2]
		const addressZM3lzY = accounts[3]
		const addressRZqUNW = accounts[3]
		const boolksyBygo = await DJCoinqL2v0M6.increaseAllowance.call(addressmjbx8q8, uintPvp8mDH, {from: accounts[1]});
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addressRZqUNW, addressZM3lzY, {from: accounts[5]});

		assert.equal(boolksyBygo, true)
		assert.equal(uint256STOO717, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintdhAVm6l = BigInt("171")
		const addressGrqgCz6 = accounts[3]
		const addressH9qL4cW = accounts[3]
		const addressu0N0p6J = accounts[3]
		const addressUXNmrr = accounts[4]
		const boolyoDC2IM = await DJCoinqL2v0M6.decreaseAllowance.call(addressGrqgCz6, uintdhAVm6l, {from: accounts[4]});
		const uint256STOO717 = await DJCoinqL2v0M6.allowance.call(addressu0N0p6J, addressH9qL4cW, {from: accounts[5]});
		const addressVlKicaT = await DJCoinqL2v0M6.transferOwnership.call(addressUXNmrr, {from: accounts[4]});

		assert.equal(boolyoDC2IM, true)
		assert.equal(uint256STOO717, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinqL2v0M6 = await DJCoin.new({from: accounts[4]});
		const uintCFMOhBj = BigInt("0")
		const addressoNUQ8n1 = accounts[5]
		const uintVOg1QbM = BigInt("516")
		const addressBmO5ddM = accounts[0]
		const boolR2kjToI = await DJCoinqL2v0M6.transfer.call(addressoNUQ8n1, uintCFMOhBj, {from: accounts[3]});
//		const boolltpMaDl = await DJCoinqL2v0M6.transfer.call(addressBmO5ddM, uintVOg1QbM, {from: accounts[5]});

		assert.equal(boolR2kjToI, true)
		await expect(DJCoinqL2v0M6.transfer.call(addressBmO5ddM, uintVOg1QbM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})