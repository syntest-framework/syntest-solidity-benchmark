const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinSxjn3Yq = await FreakCoin.new({from: accounts[2]});
		const uintPlSsvQ = BigInt("635")
		const addressGHrgMJ = accounts[0]
		const addressb1AE9g8 = "0x0000000000000000000000000000000000000001"
		const booll0pqOSe = await FreakCoinSxjn3Yq.transfer.call(addressGHrgMJ, uintPlSsvQ, {from: accounts[1]});
		const uint256NS8GVrS = await FreakCoinSxjn3Yq.allUserBalances.call(addressb1AE9g8, {from: accounts[1]});

		await expect(FreakCoinSxjn3Yq.transfer.call(addressGHrgMJ, uintPlSsvQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinw324jP = await FreakCoin.new({from: accounts[0]});
		const addresslMs5dFs = accounts[3]
		const uint256zwOQocR = await FreakCoinw324jP.totalSupply.call({from: accounts[4]});
		const uint256rCvtvQd = await FreakCoinw324jP.balanceOf.call(addresslMs5dFs, {from: accounts[2]});

		assert.equal(uint256rCvtvQd, BigInt("0"))
		assert.equal(uint256zwOQocR, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinkjyba6 = await FreakCoin.new({from: accounts[1]});
		const uintUKOxBZf = BigInt("1894")
		const addresspjd3lE = accounts[4]
		const addressh5bKP2u = accounts[2]
		const addressCxL8k3r = accounts[0]
		const addressbJf5XGv = accounts[2]
		const addressBOH2OR = accounts[4]
		const addressUfjy9iN = accounts[3]
		const addressGSuHEjO = accounts[0]
		const uintPcnbnNu = BigInt("1115")
		const addresseYPxWUU = accounts[2]
		const addresskVKyBi3 = accounts[1]
		const boolKr9r8Lx = await FreakCoinkjyba6.approve.call(addresspjd3lE, uintUKOxBZf, {from: accounts[3]});
		const addressjgdn2nb = await FreakCoinkjyba6.setUniswapAddress.call(addressh5bKP2u, {from: accounts[4]});
		const uint256y03V6WO = await FreakCoinkjyba6.balanceOf.call(addressCxL8k3r, {from: accounts[1]});
		const uint256ILdTKat = await FreakCoinkjyba6.allowance.call(addressBOH2OR, addressbJf5XGv, {from: accounts[1]});
		const uint256XKEMDdU = await FreakCoinkjyba6.allowance.call(addressGSuHEjO, addressUfjy9iN, {from: accounts[4]});
		const boolF6q2RGw = await FreakCoinkjyba6.transferFrom.call(addresskVKyBi3, addresseYPxWUU, uintPcnbnNu, {from: accounts[3]});

		assert.equal(boolKr9r8Lx, true)
		await expect(FreakCoinkjyba6.setUniswapAddress.call(addressh5bKP2u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCointpPYVe = await FreakCoin.new({from: accounts[4]});
		const addressgeR1k3J = accounts[1]
		const addressVoVJlI9 = accounts[3]
		const addressaaKMAX6 = await FreakCointpPYVe.uniswapAddress.call({from: accounts[1]});
		const uint256vhmJL5L = await FreakCointpPYVe.allowance.call(addressVoVJlI9, addressgeR1k3J, {from: accounts[2]});
		const addressmKVFpZn = await FreakCointpPYVe.uniswapAddress.call({from: accounts[3]});

		assert.equal(addressaaKMAX6, 0x0000000000000000000000000000000000000000)
		assert.equal(addressmKVFpZn, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256vhmJL5L, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinWFE2lbP = await FreakCoin.new({from: accounts[4]});
		const addressrrwg7UQ = accounts[4]
		const addressh6Pubcq = accounts[4]
		const uintGP2wIMR = BigInt("1077")
		const addressp8C6qm8 = accounts[1]
		const addressufgRE86 = accounts[5]
		const uinteGbKXwB = BigInt("1259")
		const addressC59Z2d = accounts[4]
		const address0hOPSv = accounts[4]
		const addressY6fW10q = accounts[3]
		const uint256nYVRyZs = await FreakCoinWFE2lbP.allowance.call(addressh6Pubcq, addressrrwg7UQ, {from: accounts[4]});
		const boolWhrVIVA = await FreakCoinWFE2lbP.approve.call(addressp8C6qm8, uintGP2wIMR, {from: accounts[3]});
		const uint256D9RDhh = await FreakCoinWFE2lbP.allUserBalances.call(addressufgRE86, {from: accounts[5]});
		const boolTWFk2sZ = await FreakCoinWFE2lbP.transferFrom.call(address0hOPSv, addressC59Z2d, uinteGbKXwB, {from: accounts[2]});
		const uint256aMCbsWk = await FreakCoinWFE2lbP.allUserBalances.call(addressY6fW10q, {from: accounts[3]});

		assert.equal(boolWhrVIVA, true)
		assert.equal(uint256nYVRyZs, BigInt("0"))
		await expect(FreakCoinWFE2lbP.allUserBalances.call(addressufgRE86, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfkEwiNS = await FreakCoin.new({from: accounts[3]});
		const addressezr5RO2 = accounts[1]
		const addressFccz2Iz = accounts[0]
		const uintZK1Auoy = BigInt("862")
		const addressmiClx1 = accounts[4]
		const addressIUMUkkO = accounts[4]
		const uintkivLB7o = BigInt("1903")
		const addressvMZlrHT = accounts[4]
		const uint256vkuBN2a = await FreakCoinfkEwiNS.allowance.call(addressFccz2Iz, addressezr5RO2, {from: accounts[3]});
		const boolJ5SrWtn = await FreakCoinfkEwiNS.transferFrom.call(addressIUMUkkO, addressmiClx1, uintZK1Auoy, {from: accounts[1]});
		const boolnqFMecy = await FreakCoinfkEwiNS.approve.call(addressvMZlrHT, uintkivLB7o, {from: accounts[0]});

		assert.equal(uint256vkuBN2a, BigInt("0"))
		await expect(FreakCoinfkEwiNS.transferFrom.call(addressIUMUkkO, addressmiClx1, uintZK1Auoy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoina3Ki91a = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJXKaaqn = BigInt("1754")
		const addressxlRSAib = accounts[0]
		const addressf7QFY94 = accounts[2]
		const uintUrGGLV = BigInt("1475")
		const addressbPrZlbn = accounts[0]
		const addressF3kwP7R = accounts[2]
		const addressjVjkt24 = "0x0000000000000000000000000000000000000001"
		const addressLeV9WxH = accounts[5]
		const uintUrJ8tHj = BigInt("1834")
		const addressz1njx4x = accounts[1]
		const addressngzuadg = accounts[2]
		const bool85MrNh = await FreakCoina3Ki91a.transferFrom.call(addressf7QFY94, addressxlRSAib, uintJXKaaqn, {from: accounts[3]});
		const boolw4vViSf = await FreakCoina3Ki91a.transfer.call(addressbPrZlbn, uintUrGGLV, {from: accounts[2]});
		const uint256jo4xaO = await FreakCoina3Ki91a.allUserBalances.call(addressF3kwP7R, {from: accounts[0]});
		const uint256GM9qZ2R = await FreakCoina3Ki91a.allowance.call(addressLeV9WxH, addressjVjkt24, {from: accounts[3]});
		const boolRWgeYNQ = await FreakCoina3Ki91a.approve.call(addressz1njx4x, uintUrJ8tHj, {from: "0x0000000000000000000000000000000000000001"});
		const addressHmxZTxD = await FreakCoina3Ki91a.setUniswapAddress.call(addressngzuadg, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinsAlED0H = await FreakCoin.new({from: accounts[2]});
		const uintACJ3gl8 = BigInt("1662")
		const addressIOf3Exg = "0x0000000000000000000000000000000000000001"
		const addresstOQB5I = accounts[0]
		const booljhNxRDQ = await FreakCoinsAlED0H.transfer.call(addressIOf3Exg, uintACJ3gl8, {from: accounts[2]});
		const uint256PXXkEW7 = await FreakCoinsAlED0H.balanceOf.call(addresstOQB5I, {from: accounts[3]});

		assert.equal(booljhNxRDQ, true)
		assert.equal(uint256PXXkEW7, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinsAlED0H = await FreakCoin.new({from: accounts[2]});
		const uintxQZa3B5 = BigInt("1662")
		const addressWK95EIn = "0x00000000000000000000000000000000000000-1"
		const addressCn4i1N = accounts[4]
		const addressIvWprKi = accounts[1]
		const addresscXbY6PU = accounts[1]
		const booljhNxRDQ = await FreakCoinsAlED0H.transfer.call(addressWK95EIn, uintxQZa3B5, {from: accounts[2]});
		const addressc28Cvw1 = await FreakCoinsAlED0H.setUniswapAddress.call(addressCn4i1N, {from: accounts[1]});
		const uint256DvV8EcY = await FreakCoinsAlED0H.allowance.call(addresscXbY6PU, addressIvWprKi, {from: accounts[0]});

		await expect(FreakCoinsAlED0H.transfer.call(addressWK95EIn, uintxQZa3B5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinevxKj5F = await FreakCoin.new({from: accounts[0]});
		const addressCnvdsla = accounts[3]
		const addresswvUlskZ = accounts[0]
		const uintyBklwFY = BigInt("1739")
		const addressMI0Dcge = accounts[0]
		const addresswV2znVN = accounts[1]
		const uint256Xfw5KC = await FreakCoinevxKj5F.allowance.call(addresswvUlskZ, addressCnvdsla, {from: accounts[4]});
		const booloi8U5s = await FreakCoinevxKj5F.transfer.call(addressMI0Dcge, uintyBklwFY, {from: accounts[0]});
		const addressNLjvCNR = await FreakCoinevxKj5F.uniswapAddress.call({from: accounts[1]});
		const addresstdoNxV6 = await FreakCoinevxKj5F.uniswapAddress.call({from: accounts[0]});
		const uint256xCnkMW6 = await FreakCoinevxKj5F.balanceOf.call(addresswV2znVN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressNLjvCNR, 0x0000000000000000000000000000000000000000)
		assert.equal(addresstdoNxV6, 0x0000000000000000000000000000000000000000)
		assert.equal(booloi8U5s, true)
		assert.equal(uint256Xfw5KC, BigInt("0"))
		assert.equal(uint256xCnkMW6, BigInt("0"))
	});
})