const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringmvyX2B = "vfpGw8Yj8P5DxQisChg3TtzBKGjDkyhm8UOSaVe9wiRjCPzNxfGXDDCMgXjurLjTvzuNgktpAu9c3W1DY4"
		const stringTZIXxP4 = "H228xmttvd9iRT"
		const uintgDnI129 = BigInt("219")
		const AntiBaseProtocolOMFGZeZ = await AntiBaseProtocol.new(stringmvyX2B, stringTZIXxP4, uintgDnI129, {from: "0x0000000000000000000000000000000000000001"});
		const uintKhsPOnK = BigInt("765")
		const addressSsDIsV = accounts[0]
		const addressJQJFz1 = accounts[4]
		const uintgyfhCGl = BigInt("945")
		const addresstec5Bjz = accounts[1]
		const addresstsKZHNb = accounts[2]
		const booltTBKq5Y = await AntiBaseProtocolOMFGZeZ.approve.call(addressSsDIsV, uintKhsPOnK, {from: accounts[3]});
		const addressxCJlzdq = await AntiBaseProtocolOMFGZeZ._transferOwnership.call(addressJQJFz1, {from: accounts[3]});
		const uint256nW7Jzib = await AntiBaseProtocolOMFGZeZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booleFOGmPQ = await AntiBaseProtocolOMFGZeZ.transferFrom.call(addresstsKZHNb, addresstec5Bjz, uintgyfhCGl, {from: accounts[4]});
		const boolwoNdbDD = await AntiBaseProtocolOMFGZeZ.isOwner.call({from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNyv9lJP = await AntiBaseProtocol.new({from: accounts[0]});
		const uintHSZkark = BigInt("1601")
		const addressXN9KELr = accounts[3]
		const uintwRloGJO = BigInt("1327")
		const addressasUEDj5 = accounts[0]
		const addresseEVLlmB = accounts[4]
//		const addresshbWL93h = await AntiBaseProtocolNyv9lJP._mint.call(addressXN9KELr, uintHSZkark, {from: accounts[4]});
//		const addresse1bXkvw = await AntiBaseProtocolNyv9lJP._burnFrom.call(addressasUEDj5, uintwRloGJO, {from: accounts[1]});
//		await AntiBaseProtocolNyv9lJP.requestGas.call({from: accounts[0]});
//		const uint256yHpoIMv = await AntiBaseProtocolNyv9lJP.balanceOf.call(addresseEVLlmB, {from: accounts[3]});

		await expect(AntiBaseProtocolNyv9lJP._mint.call(addressXN9KELr, uintHSZkark, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintep4Ecst = BigInt("392")
		const addressidBiOw = "0x0000000000000000000000000000000000000001"
		const uinthPIjSxH = BigInt("566")
		const addressZURpHfI = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressidBiOw, uintep4Ecst, {from: accounts[3]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressZURpHfI, uinthPIjSxH, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressZURpHfI, uinthPIjSxH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuIqvpiq = BigInt("392")
		const addressrbDBErU = "0x0000000000000000000000000000000000000001"
		const uintPBFGdvu = BigInt("683")
		const address2B8VxP = "0x0000000000000000000000000000000000000001"
		const uintteie3n3 = BigInt("566")
		const addressJyneAkN = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressrbDBErU, uintuIqvpiq, {from: accounts[3]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const uint256wGeawyX = await AntiBaseProtocol3OshS3.totalSupply.call({from: accounts[3]});
//		const addressSvhnLmi = await AntiBaseProtocol3OshS3._burn.call(address2B8VxP, uintPBFGdvu, {from: accounts[1]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressJyneAkN, uintteie3n3, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(uint256wGeawyX, BigInt("31250000000000000000"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3._burn.call(address2B8VxP, uintPBFGdvu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsLTFhhx = await AntiBaseProtocol.new({from: accounts[4]});
		const uintzNJJk2F = BigInt("951")
		const addresswWGVyC3 = accounts[2]
		const addressSozCjXx = accounts[2]
		const uintogyrSMK = BigInt("138")
		const addressm3bqVki = accounts[1]
		const stringFrYCgIi = await AntiBaseProtocolsLTFhhx.symbol.call({from: accounts[5]});
//		const addressx1jW9dz = await AntiBaseProtocolsLTFhhx._burn.call(addresswWGVyC3, uintzNJJk2F, {from: accounts[2]});
//		const uint256qJrIMa5 = await AntiBaseProtocolsLTFhhx.balanceOf.call(addressSozCjXx, {from: accounts[4]});
//		const boolGar4AZK = await AntiBaseProtocolsLTFhhx.isOwner.call({from: accounts[3]});
//		const boolY0cBiak = await AntiBaseProtocolsLTFhhx.decreaseAllowance.call(addressm3bqVki, uintogyrSMK, {from: accounts[4]});

		assert.equal(stringFrYCgIi, "ABASE")
		await expect(AntiBaseProtocolsLTFhhx._burn.call(addresswWGVyC3, uintzNJJk2F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintkGKaZQR = BigInt("392")
		const addressRSohbp5 = "0x0000000000000000000000000000000000000001"
		const uintKiML0QO = BigInt("1305")
		const address4d0cKr = accounts[3]
		const addressw5j6rqr = accounts[0]
		const uintMGopOfe = BigInt("302")
		const uintXqsNl4J = BigInt("566")
		const addressEGgzpbU = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressRSohbp5, uintkGKaZQR, {from: accounts[3]});
		const boolrOXU4m = await AntiBaseProtocol3OshS3.approve.call(address4d0cKr, uintKiML0QO, {from: accounts[0]});
//		await AntiBaseProtocol3OshS3.renounceOwnership.call({from: accounts[3]});
//		const addressxvk59OL = await AntiBaseProtocol3OshS3._transferOwnership.call(addressw5j6rqr, {from: accounts[4]});
//		const uint256FIwMhk = await AntiBaseProtocol3OshS3.findBurnFee.call(uintMGopOfe, {from: accounts[2]});
//		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressEGgzpbU, uintXqsNl4J, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(boolrOXU4m, true)
		await expect(AntiBaseProtocol3OshS3.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintxpXtCGI = BigInt("392")
		const addressOtwei1C = "0x0000000000000000000000000000000000000001"
		const addressgBgIQMi = accounts[1]
		const uintssj3zVk = BigInt("566")
		const addressuODUIos = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressOtwei1C, uintxpXtCGI, {from: accounts[3]});
		const uint256s9HpGEk = await AntiBaseProtocol3OshS3.balanceOf.call(addressgBgIQMi, {from: accounts[4]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressuODUIos, uintssj3zVk, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(uint256s9HpGEk, BigInt("0"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressuODUIos, uintssj3zVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uinttFyvna = BigInt("392")
		const addressTikg4b9 = "0x0000000000000000000000000000000000000002"
		const addressdMy3c8p = accounts[0]
		const uintNCcE1At = BigInt("566")
		const addressc7NXAwa = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressTikg4b9, uinttFyvna, {from: accounts[3]});
		const addressmI7U77Y = await AntiBaseProtocol3OshS3.transferOwnership.call(addressdMy3c8p, {from: accounts[2]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressc7NXAwa, uintNCcE1At, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressc7NXAwa, uintNCcE1At, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljutRiTu = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqyNSnmc = BigInt("1352")
		const addressKMFbukU = accounts[1]
		const addressyt3laCC = accounts[2]
		const uintF4bdZL0 = BigInt("1795")
		const addresszbOqEYq = accounts[2]
		const address45BKa6 = accounts[2]
		const addressb8hm5d = "0x0000000000000000000000000000000000000001"
		const boolOr4k52G = await AntiBaseProtocoljutRiTu.decreaseAllowance.call(addressKMFbukU, uintqyNSnmc, {from: accounts[4]});
		const addressz5Z7bkn = await AntiBaseProtocoljutRiTu._transferOwnership.call(addressyt3laCC, {from: accounts[3]});
		const boolAA5b61G = await AntiBaseProtocoljutRiTu.transferFrom.call(address45BKa6, addresszbOqEYq, uintF4bdZL0, {from: accounts[4]});
		const addressh5Ra9RY = await AntiBaseProtocoljutRiTu.transferOwnership.call(addressb8hm5d, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintGKjUpF = BigInt("392")
		const addressEdAIUj3 = "0x0000000000000000000000000000000000000000"
		const uintBrjfKg = BigInt("566")
		const addressitlQaqy = "0x0000000000000000000000000000000000000001"
		const stringg7KgLRe = await AntiBaseProtocol3OshS3.symbol.call({from: accounts[2]});
//		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressEdAIUj3, uintGKjUpF, {from: accounts[3]});
//		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressitlQaqy, uintBrjfKg, {from: accounts[0]});

		assert.equal(stringg7KgLRe, "ABASE")
		await expect(AntiBaseProtocol3OshS3.approve.call(addressEdAIUj3, uintGKjUpF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const addressWWtYLXA = "0x0000000000000000000000000000000000000001"
		const uintDaZjwzW = BigInt("392")
		const addressmVkl2Wl = "0x0000000000000000000000000000000000000001"
		const addressVvKxnFP = accounts[4]
		const addressJeVCw4f = accounts[4]
		const uintWAVVnxv = BigInt("566")
		const addressYG6MUzF = "0x0000000000000000000000000000000000000001"
		const uint256iLNY8Ur = await AntiBaseProtocol3OshS3.balanceOf.call(addressWWtYLXA, {from: accounts[1]});
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressmVkl2Wl, uintDaZjwzW, {from: accounts[3]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const uint256vKOqoM = await AntiBaseProtocol3OshS3.allowance.call(addressJeVCw4f, addressVvKxnFP, {from: accounts[4]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressYG6MUzF, uintWAVVnxv, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(uint256iLNY8Ur, BigInt("0"))
		assert.equal(uint256vKOqoM, BigInt("0"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressYG6MUzF, uintWAVVnxv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintO5P1Yb8 = BigInt("797")
		const addresscRrJvqL = "0x0000000000000000000000000000000000000001"
		const uintVCcXjQq = BigInt("45")
		const addressYBJqTgY = accounts[3]
		const uintmcvJwTB = BigInt("1654")
		const addresswXBg5k = accounts[4]
		const addressL0EUW7K = accounts[1]
		const uintzt6GUXG = BigInt("566")
		const addressDoIXw2q = "0x0000000000000000000000000000000000000001"
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolR76iAbf = await AntiBaseProtocol3OshS3.decreaseAllowance.call(addresscRrJvqL, uintO5P1Yb8, {from: accounts[0]});
//		const boolccTDOT1 = await AntiBaseProtocol3OshS3.transfer.call(addressYBJqTgY, uintVCcXjQq, {from: accounts[4]});
//		const addresshFRxnuW = await AntiBaseProtocol3OshS3._approve.call(addressL0EUW7K, addresswXBg5k, uintmcvJwTB, {from: accounts[4]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressDoIXw2q, uintzt6GUXG, {from: accounts[0]});

		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.decreaseAllowance.call(addresscRrJvqL, uintO5P1Yb8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintDXZEPEI = BigInt("25")
		const uintTJ5LK7L = BigInt("566")
		const addressVRLZ4P = "0x0000000000000000000000000000000000000000"
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintDXZEPEI, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressVRLZ4P, uintTJ5LK7L, {from: accounts[0]});

		assert.equal(uint256QmWbjnx, BigInt("15"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressVRLZ4P, uintTJ5LK7L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintbrsX184 = BigInt("2008")
		const uintYUREBki = BigInt("1617")
		const addressF2dX70X = accounts[3]
		const addressw8imGh9 = "0x0000000000000000000000000000000000000001"
		const addressRwnxbdi = accounts[4]
		const uinto5NLqB4 = BigInt("566")
		const addressaGSolYe = "0x0000000000000000000000000000000000000001"
		const uint256yt2dJd = await AntiBaseProtocol3OshS3.findRewardFee.call(uintbrsX184, {from: accounts[0]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolktWR0Tu = await AntiBaseProtocol3OshS3.transfer.call(addressF2dX70X, uintYUREBki, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SdfsIxX = await AntiBaseProtocol3OshS3.allowance.call(addressRwnxbdi, addressw8imGh9, {from: accounts[4]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressaGSolYe, uinto5NLqB4, {from: accounts[0]});

		assert.equal(uint256yt2dJd, BigInt("105"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressF2dX70X, uintYUREBki, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuX6rQPl = BigInt("392")
		const addressGQpklOr = "0x0000000000000000000000000000000000000001"
		const uintS9eefPv = BigInt("655")
		const addressxLPsrzg = accounts[2]
		const uintClPojjq = BigInt("566")
		const addressfBt8Anc = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressGQpklOr, uintuX6rQPl, {from: accounts[3]});
		const boolqWfuOQ = await AntiBaseProtocol3OshS3.increaseAllowance.call(addressxLPsrzg, uintS9eefPv, {from: accounts[5]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressfBt8Anc, uintClPojjq, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(boolqWfuOQ, true)
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressfBt8Anc, uintClPojjq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintJDqwBax = BigInt("392")
		const addressszqNwOQ = "0x0000000000000000000000000000000000000001"
		const uintziXdMF0 = BigInt("655")
		const addresskyZe0Lz = accounts[2]
		const uintIUw5OwJ = BigInt("1705")
		const addresseY0WLlx = accounts[1]
		const addresspDa0QcC = accounts[1]
		const uintg46vnX0 = BigInt("525")
		const addressQegr5yu = "0x0000000000000000000000000000000000000001"
		const boolQwG5AXs = await AntiBaseProtocol3OshS3.approve.call(addressszqNwOQ, uintJDqwBax, {from: accounts[3]});
		const boolqWfuOQ = await AntiBaseProtocol3OshS3.increaseAllowance.call(addresskyZe0Lz, uintziXdMF0, {from: accounts[5]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const boolj2iCRP6 = await AntiBaseProtocol3OshS3.transferFrom.call(addresspDa0QcC, addresseY0WLlx, uintIUw5OwJ, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressQegr5yu, uintg46vnX0, {from: accounts[0]});

		assert.equal(boolQwG5AXs, true)
		assert.equal(boolqWfuOQ, true)
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transferFrom.call(addresspDa0QcC, addresseY0WLlx, uintIUw5OwJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintyHTzELG = BigInt("36")
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const addressPUqv7Vk = await AntiBaseProtocol3OshS3.owner.call({from: accounts[0]});
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintyHTzELG, {from: accounts[0]});
		const uint8w7fdEfI = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[4]});

		assert.equal(addressPUqv7Vk, 0xc8BEf5D3B6eDfD60857A84f45dEFFCb70288faf2)
		assert.equal(uint256QmWbjnx, BigInt("15"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		assert.equal(uint8w7fdEfI, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintkbrw7bv = BigInt("59")
		const uintxppNRQQ = BigInt("566")
		const addressD14g3Se = "0x0000000000000000000000000000000000000000"
		const stringRNkPCLd = await AntiBaseProtocol3OshS3.name.call({from: accounts[4]});
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintkbrw7bv, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressD14g3Se, uintxppNRQQ, {from: accounts[0]});

		assert.equal(stringRNkPCLd, "https://t.me/antibaseprotocol")
		assert.equal(uint256QmWbjnx, BigInt("15"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressD14g3Se, uintxppNRQQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const addressOg4A6sm = accounts[5]
		const uintwsWeJJI = BigInt("0")
		const uintdmxz3c9 = BigInt("566")
		const addressVY2vsM4 = "0x0000000000000000000000000000000000000000"
		const uint256x8mcIn8 = await AntiBaseProtocol3OshS3.balanceOf.call(addressOg4A6sm, {from: accounts[4]});
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintwsWeJJI, {from: accounts[0]});
		const uint8uqBSEo5 = await AntiBaseProtocol3OshS3.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressVY2vsM4, uintdmxz3c9, {from: accounts[0]});
//		const uint8w7fdEfI = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[4]});

		assert.equal(uint256QmWbjnx, BigInt("0"))
		assert.equal(uint256x8mcIn8, BigInt("0"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		assert.equal(uint8uqBSEo5, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressVY2vsM4, uintdmxz3c9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uinty5rl2QU = BigInt("59")
		const uintMIKQYAG = BigInt("566")
		const addressdgbUVDh = "0x0000000000000000000000000000000000000001"
		const stringRNkPCLd = await AntiBaseProtocol3OshS3.name.call({from: accounts[4]});
//		await AntiBaseProtocol3OshS3.renounceOwnership.call({from: accounts[2]});
//		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uinty5rl2QU, {from: accounts[0]});
//		await AntiBaseProtocol3OshS3.renounceOwnership.call({from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressdgbUVDh, uintMIKQYAG, {from: accounts[0]});

		assert.equal(stringRNkPCLd, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocol3OshS3.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintnMFEwM6 = BigInt("25")
		const uintMTCAIRI = BigInt("566")
		const addressrGXWjst = "0x00000000000000000000000000000000000000-1"
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintnMFEwM6, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressrGXWjst, uintMTCAIRI, {from: accounts[0]});

		assert.equal(uint256QmWbjnx, BigInt("15"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressrGXWjst, uintMTCAIRI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintLfgt7hY = BigInt("10")
		const uintu5r1U95 = BigInt("424")
		const uintSHpfB6U = BigInt("936")
		const addressM4aj6nI = "0x0000000000000000000000000000000000000000"
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintLfgt7hY, {from: accounts[0]});
		const uint2564G2881 = await AntiBaseProtocol3OshS3.burn.call(uintu5r1U95, {from: accounts[2]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressM4aj6nI, uintSHpfB6U, {from: accounts[0]});
//		const uint8w7fdEfI = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[4]});

		assert.equal(uint256QmWbjnx, BigInt("15"))
		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transfer.call(addressM4aj6nI, uintSHpfB6U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintMaoSU9 = BigInt("159")
		const addressTJ5ykfZ = accounts[5]
		const uintcnCLwl4 = BigInt("25")
		const addressurT0Hm = accounts[2]
		const uinteK0XUUc = BigInt("566")
		const addressM2mssTH = "0x00000000000000000000000000000000000000-1"
//		const addressAWlurIG = await AntiBaseProtocol3OshS3.burnFrom.call(addressTJ5ykfZ, uintMaoSU9, {from: accounts[5]});
//		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintcnCLwl4, {from: accounts[0]});
//		const stringNwNJ8OJ = await AntiBaseProtocol3OshS3.name.call({from: accounts[3]});
//		const uint256cIO5uH9 = await AntiBaseProtocol3OshS3.balanceOf.call(addressurT0Hm, {from: accounts[1]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressM2mssTH, uinteK0XUUc, {from: accounts[0]});

		await expect(AntiBaseProtocol3OshS3.burnFrom.call(addressTJ5ykfZ, uintMaoSU9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintkwuwNzs = BigInt("763")
		const addressmAZ0J6g = accounts[1]
		const addressAp7kHQf = accounts[2]
		const uintUO4bCBN = BigInt("10")
		const uintI3a7t2B = BigInt("566")
		const addressyQwL0ol = "0x0000000000000000000000000000000000000000"
		const uint8R5GpUqc = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[3]});
//		const booloKwkhcz = await AntiBaseProtocol3OshS3.transferFrom.call(addressAp7kHQf, addressmAZ0J6g, uintkwuwNzs, {from: accounts[1]});
//		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintUO4bCBN, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(addressyQwL0ol, uintI3a7t2B, {from: accounts[0]});
//		const uint8w7fdEfI = await AntiBaseProtocol3OshS3.decimals.call({from: accounts[4]});

		assert.equal(uint8R5GpUqc, BigInt("18"))
		await expect(AntiBaseProtocol3OshS3.transferFrom.call(addressAp7kHQf, addressmAZ0J6g, uintkwuwNzs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol3OshS3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintgsRF918 = BigInt("1513")
		const addressyUgC82 = accounts[2]
		const uintJgVdx04 = BigInt("83")
		const uintj7LQhqJ = BigInt("566")
		const address0IXuZJ = "0x0000000000000000000000000000000000000000"
//		const addressrUYHOZ3 = await AntiBaseProtocol3OshS3.burnFrom.call(addressyUgC82, uintgsRF918, {from: accounts[0]});
//		const uint256QmWbjnx = await AntiBaseProtocol3OshS3.findBurnFee.call(uintJgVdx04, {from: accounts[0]});
//		const boolCT7b4fC = await AntiBaseProtocol3OshS3.transfer.call(address0IXuZJ, uintj7LQhqJ, {from: accounts[0]});

		await expect(AntiBaseProtocol3OshS3.burnFrom.call(addressyUgC82, uintgsRF918, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})