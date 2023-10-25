const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinbs9ZMxZ = await EdenCoin.new({from: accounts[2]});
		const uintl4icuU1 = BigInt("1852")
		const addresslKcFoFG = accounts[3]
		const uintb7t5kS0 = BigInt("487")
		const addressZImNavr = accounts[5]
		const uintJ7VEe9V = BigInt("1739")
		const addressYZlzJh6 = accounts[3]
		const boolk2Ota04 = await EdenCoinbs9ZMxZ.increaseApproval.call(addresslKcFoFG, uintl4icuU1, {from: accounts[3]});
		const boolPb04m2o = await EdenCoinbs9ZMxZ.increaseApproval.call(addressZImNavr, uintb7t5kS0, {from: accounts[0]});
//		const boolpKcP3eB = await EdenCoinbs9ZMxZ.transfer.call(addressYZlzJh6, uintJ7VEe9V, {from: accounts[3]});

		assert.equal(boolPb04m2o, true)
		assert.equal(boolk2Ota04, true)
		await expect(EdenCoinbs9ZMxZ.transfer.call(addressYZlzJh6, uintJ7VEe9V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinE32Jm6r = await EdenCoin.new({from: accounts[2]});
		const uintAl756B5 = BigInt("1686")
		const addressGNpToGP = accounts[2]
		const uintObJwct9 = BigInt("2043")
		const addressuIHQFNI = accounts[1]
		const address73erx9 = accounts[0]
		const addressrTismu = accounts[0]
		const boolAY0qz1C = await EdenCoinE32Jm6r.approve.call(addressGNpToGP, uintAl756B5, {from: accounts[3]});
//		const boolz90d5O1 = await EdenCoinE32Jm6r.transfer.call(addressuIHQFNI, uintObJwct9, {from: accounts[1]});
//		const uint256Ch9WvhA = await EdenCoinE32Jm6r.allowance.call(addressrTismu, address73erx9, {from: accounts[0]});

		assert.equal(boolAY0qz1C, true)
		await expect(EdenCoinE32Jm6r.transfer.call(addressuIHQFNI, uintObJwct9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinQRut1cL = await EdenCoin.new({from: accounts[2]});
		const addressPBzdWTj = accounts[4]
		const uintRhIi16 = BigInt("718")
		const addressGTgmMMN = accounts[0]
		const uintiPGj3Xt = BigInt("1439")
		const addressGbaiVjw = "0x0000000000000000000000000000000000000001"
		const uintbASZwG1 = BigInt("450")
		const addressPAkjgMq = accounts[4]
		const uint256oKVbZN6 = await EdenCoinQRut1cL.balanceOf.call(addressPBzdWTj, {from: accounts[2]});
//		const boolDe3DdXM = await EdenCoinQRut1cL.transfer.call(addressGTgmMMN, uintRhIi16, {from: accounts[1]});
//		const boolwdnkyOu = await EdenCoinQRut1cL.approve.call(addressGbaiVjw, uintiPGj3Xt, {from: accounts[4]});
//		const boolcIPoooy = await EdenCoinQRut1cL.approve.call(addressPAkjgMq, uintbASZwG1, {from: accounts[3]});

		assert.equal(uint256oKVbZN6, BigInt("0"))
		await expect(EdenCoinQRut1cL.transfer.call(addressGTgmMMN, uintRhIi16, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinpNm4Q8 = await EdenCoin.new({from: accounts[2]});
		const uintFUQ9e67 = BigInt("1709")
		const addressgmQxPj = accounts[4]
		const uintGaLuxPI = BigInt("1017")
		const addressKYXHKcq = accounts[2]
		const addressgQMqG9C = accounts[2]
		const addressLdU7X69 = accounts[2]
		const uintklgIWFW = BigInt("398")
		const addresshxwniOT = accounts[3]
		const uintuOJ9n8I = BigInt("1170")
		const addressB1FSZ82 = accounts[3]
		const addressxylFU2 = accounts[4]
		const addresszJCfS0 = accounts[3]
		const boolq26wNIn = await EdenCoinpNm4Q8.increaseApproval.call(addressgmQxPj, uintFUQ9e67, {from: accounts[4]});
		const boolitlHbU = await EdenCoinpNm4Q8.approve.call(addressKYXHKcq, uintGaLuxPI, {from: accounts[1]});
		const uint256C2UAiwh = await EdenCoinpNm4Q8.allowance.call(addressLdU7X69, addressgQMqG9C, {from: accounts[3]});
//		const boolzv7KNk0 = await EdenCoinpNm4Q8.transfer.call(addresshxwniOT, uintklgIWFW, {from: accounts[5]});
//		const booluGBkAgn = await EdenCoinpNm4Q8.transfer.call(addressB1FSZ82, uintuOJ9n8I, {from: accounts[0]});
//		const uint256xN1GP5t = await EdenCoinpNm4Q8.allowance.call(addresszJCfS0, addressxylFU2, {from: accounts[4]});

		assert.equal(boolitlHbU, true)
		assert.equal(boolq26wNIn, true)
		assert.equal(uint256C2UAiwh, BigInt("0"))
		await expect(EdenCoinpNm4Q8.transfer.call(addresshxwniOT, uintklgIWFW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqyNa9CR = await EdenCoin.new({from: accounts[2]});
		const uintX6MLyUf = BigInt("1653")
		const addressiMMokwu = accounts[4]
		const uintzS8FJlL = BigInt("1130")
		const addressZ0E5yS = "0x0000000000000000000000000000000000000001"
		const addressepUfSB9 = accounts[3]
		const uintSPx7uZR = BigInt("438")
		const addresswT0T49y = accounts[3]
		const addressWfbGPF8 = accounts[3]
		const boolQ4Pu4Wx = await EdenCoinqyNa9CR.increaseApproval.call(addressiMMokwu, uintX6MLyUf, {from: accounts[3]});
//		const boolwWvNNx8 = await EdenCoinqyNa9CR.transferFrom.call(addressepUfSB9, addressZ0E5yS, uintzS8FJlL, {from: accounts[5]});
//		const boolJbfJgr8 = await EdenCoinqyNa9CR.transferFrom.call(addressWfbGPF8, addresswT0T49y, uintSPx7uZR, {from: accounts[0]});

		assert.equal(boolQ4Pu4Wx, true)
		await expect(EdenCoinqyNa9CR.transferFrom.call(addressepUfSB9, addressZ0E5yS, uintzS8FJlL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinDbnIULK = await EdenCoin.new({from: accounts[4]});
		const uintnSryi6 = BigInt("1661")
		const addressGB7kKbK = accounts[4]
		const addressrGmePN = accounts[3]
		const addressOjrqLk = accounts[4]
		const uintYsidFYk = BigInt("1200")
		const addressz6upvfd = accounts[1]
		const uinttIKqbYr = BigInt("738")
		const addressthzAfva = accounts[2]
		const addresstDb1J9 = "0x0000000000000000000000000000000000000001"
		const booln9yegZt = await EdenCoinDbnIULK.increaseApproval.call(addressGB7kKbK, uintnSryi6, {from: accounts[0]});
		const uint256nawcJ5p = await EdenCoinDbnIULK.allowance.call(addressOjrqLk, addressrGmePN, {from: accounts[4]});
		const boolJgyH82A = await EdenCoinDbnIULK.decreaseApproval.call(addressz6upvfd, uintYsidFYk, {from: accounts[3]});
//		const boolW6yCnNu = await EdenCoinDbnIULK.transferFrom.call(addresstDb1J9, addressthzAfva, uinttIKqbYr, {from: accounts[5]});

		assert.equal(boolJgyH82A, true)
		assert.equal(booln9yegZt, true)
		assert.equal(uint256nawcJ5p, BigInt("0"))
		await expect(EdenCoinDbnIULK.transferFrom.call(addresstDb1J9, addressthzAfva, uinttIKqbYr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjHPvmav = await EdenCoin.new({from: accounts[0]});
		const uintSQayYqY = BigInt("1736")
		const addressNHERq0V = accounts[3]
		const uintAIpumIq = BigInt("927")
		const addressZeMMzxb = accounts[4]
		const uintxulvmu5 = BigInt("1463")
		const addresstxv17s3 = accounts[3]
		const uinttVqAss = BigInt("0")
		const addresseLxfvdz = accounts[2]
		const uint3e2qjy = BigInt("780")
		const addressHVkhWQt = accounts[2]
		const addressG9OeY3d = accounts[3]
		const uintXNeVO4A = BigInt("301")
		const addressvEjFKhJ = accounts[4]
		const addressmgaJ5E9 = accounts[5]
		const addressanWveca = accounts[5]
		const uintp6Dxa8 = BigInt("931")
		const addressctzfyhe = "0x0000000000000000000000000000000000000002"
		const booleKRmx44 = await EdenCoinjHPvmav.increaseApproval.call(addressNHERq0V, uintSQayYqY, {from: accounts[1]});
		const boollZ7Ldgf = await EdenCoinjHPvmav.increaseApproval.call(addressZeMMzxb, uintAIpumIq, {from: accounts[5]});
		const boolru1jSBx = await EdenCoinjHPvmav.approve.call(addresstxv17s3, uintxulvmu5, {from: accounts[3]});
		const booly9nMmRU = await EdenCoinjHPvmav.decreaseApproval.call(addresseLxfvdz, uinttVqAss, {from: accounts[5]});
		const boolMrqMYmt = await EdenCoinjHPvmav.approve.call(addressHVkhWQt, uint3e2qjy, {from: accounts[3]});
		const uint256ZyLOJ8I = await EdenCoinjHPvmav.balanceOf.call(addressG9OeY3d, {from: accounts[3]});
		const boolo7EtSjF = await EdenCoinjHPvmav.decreaseApproval.call(addressvEjFKhJ, uintXNeVO4A, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GobwJkb = await EdenCoinjHPvmav.allowance.call(addressanWveca, addressmgaJ5E9, {from: accounts[4]});
		const boolO44YrVu = await EdenCoinjHPvmav.decreaseApproval.call(addressctzfyhe, uintp6Dxa8, {from: accounts[3]});

		assert.equal(boolMrqMYmt, true)
		assert.equal(boolO44YrVu, true)
		assert.equal(booleKRmx44, true)
		assert.equal(boollZ7Ldgf, true)
		assert.equal(boolo7EtSjF, true)
		assert.equal(boolru1jSBx, true)
		assert.equal(booly9nMmRU, true)
		assert.equal(uint256GobwJkb, BigInt("0"))
		assert.equal(uint256ZyLOJ8I, BigInt("0"))
	});
})