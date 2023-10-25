const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinE4hXzzo = await DJCoin.new({from: accounts[5]});
		const uintGMbQYb = BigInt("1022")
		const addresscKY0Ckb = "0x0000000000000000000000000000000000000001"
		const uintv67G4L8 = BigInt("1961")
		const uintbLS4WC3 = BigInt("139")
		const uintf8O3Lt = BigInt("1640")
		const uintH32etZQ = BigInt("1370")
		const boolHJVUTKZ = await DJCoinE4hXzzo.approve.call(addresscKY0Ckb, uintGMbQYb, {from: accounts[0]});
		const uint256rAc8Pf = await DJCoinE4hXzzo.burn.call(uintbLS4WC3, uintv67G4L8, {from: accounts[1]});
		await DJCoinE4hXzzo.onlyOwner.call({from: accounts[2]});
		const uint256pk3ub5 = await DJCoinE4hXzzo.totalSupply.call({from: accounts[1]});
		const uint256e1VhHc8 = await DJCoinE4hXzzo.burn.call(uintH32etZQ, uintf8O3Lt, {from: accounts[3]});
		await DJCoinE4hXzzo.renounceOwnership.call({from: accounts[1]});

		assert.equal(boolHJVUTKZ, true)
		await expect(DJCoinE4hXzzo.burn.call(uintbLS4WC3, uintv67G4L8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinCrLT8wN = await DJCoin.new({from: accounts[3]});
		const uintAWVpwQL = BigInt("284")
		const addresscztfh7l = accounts[0]
		const addressVfAAm1K = accounts[0]
		const uintSnGYO32 = BigInt("1362")
		const addressWSk9ZQZ = accounts[4]
		const boolp3qt226 = await DJCoinCrLT8wN.transferFrom.call(addressVfAAm1K, addresscztfh7l, uintAWVpwQL, {from: accounts[1]});
		const boolL4rmcrA = await DJCoinCrLT8wN.increaseAllowance.call(addressWSk9ZQZ, uintSnGYO32, {from: accounts[3]});

		await expect(DJCoinCrLT8wN.transferFrom.call(addressVfAAm1K, addresscztfh7l, uintAWVpwQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinvyW3rY = await DJCoin.new({from: accounts[0]});
		const addressZ3C5hL = accounts[0]
		const uintNfBtBro = BigInt("1783")
		const addresssfwtkoS = accounts[0]
		const uintC9Bnl5B = BigInt("1059")
		const addressieierq3 = accounts[1]
		await DJCoinvyW3rY.renounceOwnership.call({from: accounts[0]});
		const addressYoI9O3O = await DJCoinvyW3rY.transferOwnership.call(addressZ3C5hL, {from: accounts[5]});
		const boolyljT3v3 = await DJCoinvyW3rY.transfer.call(addresssfwtkoS, uintNfBtBro, {from: accounts[3]});
		const boolRPbgBfm = await DJCoinvyW3rY.transfer.call(addressieierq3, uintC9Bnl5B, {from: accounts[0]});

		await expect(DJCoinvyW3rY.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinilr9qoT = await DJCoin.new({from: accounts[3]});
		const addressX1UHW5g = accounts[4]
		const addressMxK4Jtn = accounts[0]
		const addressJn5MsaF = accounts[0]
		const uintyTqAHJe = BigInt("1608")
		const addressOoA9RH4 = accounts[3]
		const uint256o3m3s7d = await DJCoinilr9qoT.balanceOf.call(addressX1UHW5g, {from: accounts[1]});
		const uint256k6hFE2H = await DJCoinilr9qoT.allowance.call(addressJn5MsaF, addressMxK4Jtn, {from: accounts[0]});
		const boolb1XJrzR = await DJCoinilr9qoT.decreaseAllowance.call(addressOoA9RH4, uintyTqAHJe, {from: accounts[1]});

		assert.equal(boolb1XJrzR, true)
		assert.equal(uint256k6hFE2H, BigInt("0"))
		assert.equal(uint256o3m3s7d, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinTKgrUCJ = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressT6sOsSZ = accounts[4]
		const uint7YwyOm = BigInt("505")
		const addressIvyZoJK = accounts[4]
		const addressS3Vifnj = accounts[1]
		const addressQV1z7j = accounts[0]
		const addressKhUIBJ7 = accounts[4]
		const uintlvW2jzM = BigInt("809")
		const addressEamrgT8 = accounts[3]
		const addressDi977Md = await DJCoinTKgrUCJ.validRecipient.call(addressT6sOsSZ, {from: accounts[0]});
		const boolj27D5Ca = await DJCoinTKgrUCJ.transferFrom.call(addressS3Vifnj, addressIvyZoJK, uint7YwyOm, {from: accounts[0]});
		await DJCoinTKgrUCJ.renounceOwnership.call({from: accounts[5]});
		const uint256CyxpcfY = await DJCoinTKgrUCJ.allowance.call(addressKhUIBJ7, addressQV1z7j, {from: accounts[1]});
		const boolf8dUDI = await DJCoinTKgrUCJ.increaseAllowance.call(addressEamrgT8, uintlvW2jzM, {from: accounts[5]});
	});

	it('test for DJCoin', async () => {
		const DJCoinS1LQlQL = await DJCoin.new({from: accounts[4]});
		const addressF0rkilP = accounts[5]
		const addressgCUFce3 = accounts[0]
		const uintVNS7Bxk = BigInt("876")
		const addresstF6b0jz = accounts[3]
		const uintdG2Td8c = BigInt("366")
		const uintoyKennk = BigInt("854")
		await DJCoinS1LQlQL.onlyOwner.call({from: accounts[3]});
		await DJCoinS1LQlQL.onlyOwner.call({from: accounts[5]});
		const uint256fgHOhK = await DJCoinS1LQlQL.allowance.call(addressgCUFce3, addressF0rkilP, {from: "0x0000000000000000000000000000000000000001"});
		const boolQJREMcA = await DJCoinS1LQlQL.increaseAllowance.call(addresstF6b0jz, uintVNS7Bxk, {from: accounts[0]});
		const uint256in28qK0 = await DJCoinS1LQlQL.burn.call(uintoyKennk, uintdG2Td8c, {from: accounts[4]});

		await expect(DJCoinS1LQlQL.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSmK0PQ2 = await DJCoin.new({from: accounts[3]});
		const uintB2lbi93 = BigInt("1871")
		const uintQ85TOe = BigInt("1539")
		const uintxNr9ZEQ = BigInt("1801")
		const addressd8iwHx1 = accounts[0]
		const uint256KUhh8nB = await DJCoinSmK0PQ2.totalSupply.call({from: accounts[5]});
		const uint256gMLo7D0 = await DJCoinSmK0PQ2.burn.call(uintQ85TOe, uintB2lbi93, {from: accounts[5]});
		const boolmFq8wxl = await DJCoinSmK0PQ2.decreaseAllowance.call(addressd8iwHx1, uintxNr9ZEQ, {from: accounts[4]});

		assert.equal(uint256KUhh8nB, BigInt("2100000000000"))
		await expect(DJCoinSmK0PQ2.burn.call(uintQ85TOe, uintB2lbi93, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinsg3WmEU = await DJCoin.new({from: accounts[1]});
		const uintnRAPAg = BigInt("1595")
		const addressr0DX6EK = accounts[0]
		const uintMzaB6PQ = BigInt("663")
		const addressMCFc9to = accounts[2]
		const addressW6O0pML = accounts[1]
		const uintYvTR8PQ = BigInt("1252")
		const addressRkr9Yr9 = accounts[1]
		const addressZXWs7OT = accounts[3]
		const boolScmDGbD = await DJCoinsg3WmEU.transfer.call(addressr0DX6EK, uintnRAPAg, {from: accounts[0]});
		const boolB2zfPTz = await DJCoinsg3WmEU.transferFrom.call(addressW6O0pML, addressMCFc9to, uintMzaB6PQ, {from: accounts[2]});
		await DJCoinsg3WmEU.renounceOwnership.call({from: accounts[3]});
		const uint256ZkrloSD = await DJCoinsg3WmEU.totalSupply.call({from: accounts[2]});
		const boolZ59TmTh = await DJCoinsg3WmEU.approve.call(addressRkr9Yr9, uintYvTR8PQ, {from: accounts[2]});
		const addressAI8DdeX = await DJCoinsg3WmEU.validRecipient.call(addressZXWs7OT, {from: "0x0000000000000000000000000000000000000001"});
		await DJCoinsg3WmEU.onlyOwner.call({from: accounts[0]});
		await DJCoinsg3WmEU.renounceOwnership.call({from: accounts[3]});

		await expect(DJCoinsg3WmEU.transfer.call(addressr0DX6EK, uintnRAPAg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinWgkLTnp = await DJCoin.new({from: accounts[0]});
		const uintpVXxW4a = BigInt("1842")
		const addressVNYeeOJ = accounts[4]
		const addressDOEOuX5 = accounts[2]
		const booljTNjont = await DJCoinWgkLTnp.increaseAllowance.call(addressVNYeeOJ, uintpVXxW4a, {from: accounts[2]});
		const addressT4qAyNA = await DJCoinWgkLTnp.owner.call({from: accounts[4]});
		const uint256k5pYaJg = await DJCoinWgkLTnp.balanceOf.call(addressDOEOuX5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressT4qAyNA, 0x1E82f235593D309A7944D5358BB72ADe85eE680e)
		assert.equal(booljTNjont, true)
		assert.equal(uint256k5pYaJg, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinCrLT8wN = await DJCoin.new({from: accounts[3]});
		const uint8ZA1R3 = BigInt("1362")
		const addressSN7l5El = accounts[5]
		const uintoGMmYk = BigInt("277")
		const addressC2toxgj = accounts[2]
		const uinttSkX9AL = BigInt("1055")
		const boolL4rmcrA = await DJCoinCrLT8wN.increaseAllowance.call(addressSN7l5El, uint8ZA1R3, {from: accounts[3]});
		const boolZezfLZY = await DJCoinCrLT8wN.approve.call(addressC2toxgj, uintoGMmYk, {from: accounts[0]});
		const boolmxsRcqu = await DJCoinCrLT8wN.changetokensPerBlock.call(uinttSkX9AL, {from: accounts[4]});

		assert.equal(boolL4rmcrA, true)
		assert.equal(boolZezfLZY, true)
		assert.equal(boolmxsRcqu, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinsg3WmEU = await DJCoin.new({from: accounts[1]});
		const uintxNdYeQb = BigInt("1851")
		const uintmyexME = BigInt("1753")
		const uinteZ00XF9 = BigInt("1576")
		const addressVfAr1j = accounts[0]
		const uinth26qvfy = BigInt("663")
		const addressRKzMyDj = accounts[2]
		const addresscSGbseo = accounts[2]
		const addressbmVAgP5 = accounts[3]
		const addressQFNJsz3 = "0x0000000000000000000000000000000000000001"
		const uint256NOcAZxB = await DJCoinsg3WmEU.burn.call(uintmyexME, uintxNdYeQb, {from: accounts[1]});
		const boolScmDGbD = await DJCoinsg3WmEU.transfer.call(addressVfAr1j, uinteZ00XF9, {from: accounts[0]});
		const uint256TWpqRL8 = await DJCoinsg3WmEU.totalSupply.call({from: accounts[3]});
		const boolB2zfPTz = await DJCoinsg3WmEU.transferFrom.call(addresscSGbseo, addressRKzMyDj, uinth26qvfy, {from: accounts[2]});
		const addressmiE1CPt = await DJCoinsg3WmEU.transferOwnership.call(addressbmVAgP5, {from: accounts[2]});
		const addressNkjWt7C = await DJCoinsg3WmEU.validRecipient.call(addressQFNJsz3, {from: accounts[5]});

		assert.equal(uint256NOcAZxB, BigInt("1711290000000"))
		await expect(DJCoinsg3WmEU.transfer.call(addressVfAr1j, uinteZ00XF9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoint3Jvv5s = await DJCoin.new({from: accounts[4]});
		const uintBUhd5lg = BigInt("421")
		const addresspnyC997 = accounts[4]
		const addressKlmDqOx = accounts[0]
		const uintfClAqJr = BigInt("1832")
		const addressPUrvewA = accounts[5]
		const addressp196Sbx = accounts[0]
		const boolQpBiExu = await DJCoint3Jvv5s.decreaseAllowance.call(addresspnyC997, uintBUhd5lg, {from: "0x0000000000000000000000000000000000000001"});
		const addressTUCi4td = await DJCoint3Jvv5s.transferOwnership.call(addressKlmDqOx, {from: accounts[4]});
		const boolZACmQwe = await DJCoint3Jvv5s.decreaseAllowance.call(addressPUrvewA, uintfClAqJr, {from: accounts[3]});
		const uint256Eufp6Iy = await DJCoint3Jvv5s.balanceOf.call(addressp196Sbx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQpBiExu, true)
		assert.equal(boolZACmQwe, true)
		assert.equal(uint256Eufp6Iy, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinCrLT8wN = await DJCoin.new({from: accounts[3]});
		const uintr177Z9O = BigInt("0")
		const addressF2UnlVj = accounts[2]
		const uintmVTof6 = BigInt("1498")
		const addresskqWqUM9 = accounts[2]
		const uintoxxmb2s = BigInt("1081")
		const addressTUNLR5E = accounts[2]
		const uint2563duJTB = await DJCoinCrLT8wN.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyNynhX = await DJCoinCrLT8wN.transfer.call(addressF2UnlVj, uintr177Z9O, {from: "0x0000000000000000000000000000000000000001"});
		await DJCoinCrLT8wN.onlyOwner.call({from: accounts[1]});
		const boolI9rJzWg = await DJCoinCrLT8wN.approve.call(addresskqWqUM9, uintmVTof6, {from: "0x0000000000000000000000000000000000000001"});
		const boolot5Frlb = await DJCoinCrLT8wN.approve.call(addressTUNLR5E, uintoxxmb2s, {from: accounts[1]});

		assert.equal(boolyNynhX, true)
		assert.equal(uint2563duJTB, BigInt("2100000000000"))
		await expect(DJCoinCrLT8wN.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})