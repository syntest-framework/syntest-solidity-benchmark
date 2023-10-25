const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinogOjfiO = await DJCoin.new({from: accounts[0]});
		const uintGH7sQom = BigInt("607")
		const addressgx3APNN = accounts[5]
		const addressGvoaUSS = accounts[2]
		const uinto8POyFy = BigInt("1626")
		const uintuLLFELD = BigInt("721")
		const addressKCcGAEC = accounts[3]
//		const boolpcvtokd = await DJCoinogOjfiO.transferFrom.call(addressGvoaUSS, addressgx3APNN, uintGH7sQom, {from: accounts[0]});
//		const uint256XpoEgta = await DJCoinogOjfiO.burn.call(uintuLLFELD, uinto8POyFy, {from: accounts[2]});
//		const addressxqENw13 = await DJCoinogOjfiO.validRecipient.call(addressKCcGAEC, {from: accounts[2]});

		await expect(DJCoinogOjfiO.transferFrom.call(addressGvoaUSS, addressgx3APNN, uintGH7sQom, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinvs7l0TP = await DJCoin.new({from: accounts[3]});
		const addressvQJNREX = accounts[1]
		const address7VtpKC = accounts[0]
		const addressE7Q4d4O = accounts[0]
		const uintax81I7C = BigInt("2040")
		const addressa3bnHTH = accounts[5]
		const addressgFc5yc8 = accounts[2]
		const uint256DL17pVa = await DJCoinvs7l0TP.balanceOf.call(addressvQJNREX, {from: accounts[2]});
		const uint256WPcMdiB = await DJCoinvs7l0TP.allowance.call(addressE7Q4d4O, address7VtpKC, {from: accounts[0]});
		const bool7KRIz6 = await DJCoinvs7l0TP.approve.call(addressa3bnHTH, uintax81I7C, {from: accounts[1]});
		const uint256P8PdcZH = await DJCoinvs7l0TP.totalSupply.call({from: accounts[3]});
//		const addressD18FMZa = await DJCoinvs7l0TP.validRecipient.call(addressgFc5yc8, {from: accounts[3]});

		assert.equal(bool7KRIz6, true)
		assert.equal(uint256DL17pVa, BigInt("0"))
		assert.equal(uint256P8PdcZH, BigInt("2100000000000"))
		assert.equal(uint256WPcMdiB, BigInt("0"))
		await expect(DJCoinvs7l0TP.validRecipient.call(addressgFc5yc8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinToKwHAW = await DJCoin.new({from: accounts[1]});
		const uintcWZFpoa = BigInt("1399")
		const address5nOht3 = accounts[2]
		const addressx90xjWe = accounts[2]
		const addressdibP4TC = accounts[2]
		const boollePVgLD = await DJCoinToKwHAW.approve.call(address5nOht3, uintcWZFpoa, {from: accounts[5]});
//		const addressfSXaur = await DJCoinToKwHAW.transferOwnership.call(addressx90xjWe, {from: accounts[3]});
//		const addressfMjAcsJ = await DJCoinToKwHAW.validRecipient.call(addressdibP4TC, {from: accounts[4]});

		assert.equal(boollePVgLD, true)
		await expect(DJCoinToKwHAW.transferOwnership.call(addressx90xjWe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineBojQa9 = await DJCoin.new({from: accounts[3]});
		const uintyM21ag2 = BigInt("286")
		const addressD9KkTQG = accounts[4]
		const uintwc8gEB3 = BigInt("921")
		const addresstATxxPv = accounts[1]
		const uintmATlhof = BigInt("899")
		const addressWlkKdN = accounts[1]
//		const boolgVz7KSl = await DJCoineBojQa9.transfer.call(addressD9KkTQG, uintyM21ag2, {from: accounts[2]});
//		const boolP1UHZX9 = await DJCoineBojQa9.approve.call(addresstATxxPv, uintwc8gEB3, {from: accounts[0]});
//		const boolJqWvJj8 = await DJCoineBojQa9.transfer.call(addressWlkKdN, uintmATlhof, {from: accounts[0]});

		await expect(DJCoineBojQa9.transfer.call(addressD9KkTQG, uintyM21ag2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYDK8sZ = await DJCoin.new({from: accounts[0]});
		const uintQzniKg6 = BigInt("1691")
		const uintjlbQQBi = BigInt("1541")
		const uintqjgP2mV = BigInt("798")
		const addressc7c4gK2 = accounts[3]
		const uint256hLNTcxc = await DJCoinYDK8sZ.totalSupply.call({from: accounts[4]});
		const booldVhfAhn = await DJCoinYDK8sZ.changetokensPerBlock.call(uintQzniKg6, {from: accounts[3]});
//		const uint256Cem5b3i = await DJCoinYDK8sZ.burn.call(uintqjgP2mV, uintjlbQQBi, {from: accounts[1]});
//		const addressCoxEqkt = await DJCoinYDK8sZ.validRecipient.call(addressc7c4gK2, {from: accounts[1]});

		assert.equal(booldVhfAhn, true)
		assert.equal(uint256hLNTcxc, BigInt("2100000000000"))
		await expect(DJCoinYDK8sZ.burn.call(uintqjgP2mV, uintjlbQQBi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinaGc4loP = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uint2b8Nrs = BigInt("494")
		const addressWvhRejM = accounts[5]
		const uintZUumwCo = BigInt("1478")
		const addressNS8BCvw = accounts[2]
		const addressbPazV1h = accounts[2]
		const boolbgZNg2s = await DJCoinaGc4loP.transfer.call(addressWvhRejM, uint2b8Nrs, {from: accounts[4]});
		const boolJUFmkhq = await DJCoinaGc4loP.approve.call(addressNS8BCvw, uintZUumwCo, {from: accounts[4]});
		const addressYcJ3U8S = await DJCoinaGc4loP.validRecipient.call(addressbPazV1h, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinMiGDMF = await DJCoin.new({from: accounts[4]});
		const uintVLztGXF = BigInt("506")
		const addresspGTBW2E = accounts[4]
		const addressn67SKp2 = accounts[0]
		const addressS1ZLVR3 = accounts[5]
		const uint1ssEZX = BigInt("524")
		const uintRSL7pEq = BigInt("1377")
		const addresschVhjy = accounts[5]
		const addressmVfkxyz = "0x0000000000000000000000000000000000000001"
		const boolBQn8SCP = await DJCoinMiGDMF.decreaseAllowance.call(addresspGTBW2E, uintVLztGXF, {from: accounts[4]});
		const uint256KlnMWSF = await DJCoinMiGDMF.allowance.call(addressS1ZLVR3, addressn67SKp2, {from: accounts[1]});
//		const uint256aZ11bPF = await DJCoinMiGDMF.burn.call(uintRSL7pEq, uint1ssEZX, {from: accounts[0]});
//		const uint256q5aKd9e = await DJCoinMiGDMF.allowance.call(addressmVfkxyz, addresschVhjy, {from: accounts[1]});

		assert.equal(boolBQn8SCP, true)
		assert.equal(uint256KlnMWSF, BigInt("0"))
		await expect(DJCoinMiGDMF.burn.call(uintRSL7pEq, uint1ssEZX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMiGDMF = await DJCoin.new({from: accounts[4]});
		const uintjCPn7s8 = BigInt("1117")
		const addresskNxdy7J = accounts[3]
		const uinta4gSKee = BigInt("512")
		const uintexEpJCg = BigInt("1364")
		const uintWGSQS9 = BigInt("1963")
		const addressU6CnG1 = accounts[3]
		const boolMuz7dto = await DJCoinMiGDMF.increaseAllowance.call(addresskNxdy7J, uintjCPn7s8, {from: accounts[3]});
//		const uint256aZ11bPF = await DJCoinMiGDMF.burn.call(uintexEpJCg, uinta4gSKee, {from: accounts[0]});
//		const boolj99bx6P = await DJCoinMiGDMF.increaseAllowance.call(addressU6CnG1, uintWGSQS9, {from: accounts[3]});

		assert.equal(boolMuz7dto, true)
		await expect(DJCoinMiGDMF.burn.call(uintexEpJCg, uinta4gSKee, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinLkuC9ky = await DJCoin.new({from: accounts[3]});
		const addressLythTJS = accounts[4]
		const uintnn2tTEK = BigInt("577")
		const addressK19Gyy3 = accounts[0]
		const addressSjmgjLZ = accounts[5]
		const addressDpq27BD = accounts[1]
		const addressOm0bOU4 = await DJCoinLkuC9ky.owner.call({from: accounts[2]});
//		await DJCoinLkuC9ky.onlyOwner.call({from: accounts[2]});
//		const addressyD8YYQV = await DJCoinLkuC9ky.validRecipient.call(addressLythTJS, {from: accounts[3]});
//		await DJCoinLkuC9ky.renounceOwnership.call({from: accounts[5]});
//		const boolQPQgQc6 = await DJCoinLkuC9ky.transferFrom.call(addressSjmgjLZ, addressK19Gyy3, uintnn2tTEK, {from: accounts[2]});
//		const addressKYzphzW = await DJCoinLkuC9ky.transferOwnership.call(addressDpq27BD, {from: accounts[3]});

		assert.equal(addressOm0bOU4, 0x13107E2d00a8Bad934BCaCc5C8eda6Dd395B005a)
		await expect(DJCoinLkuC9ky.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMiGDMF = await DJCoin.new({from: accounts[4]});
		const uintLLIXdeQ = BigInt("446")
		const uintwkREmtj = BigInt("797")
		const uintjM5K0bn = BigInt("516")
		const uintxkFWvh2 = BigInt("1364")
		const uint256avbRIXS = await DJCoinMiGDMF.burn.call(uintwkREmtj, uintLLIXdeQ, {from: accounts[4]});
//		const uint256aZ11bPF = await DJCoinMiGDMF.burn.call(uintxkFWvh2, uintjM5K0bn, {from: accounts[0]});

		assert.equal(uint256avbRIXS, BigInt("2006340000000"))
		await expect(DJCoinMiGDMF.burn.call(uintxkFWvh2, uintjM5K0bn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin8Ujnj7 = await DJCoin.new({from: accounts[2]});
		const uintAShWr8T = BigInt("1661")
		const addressc4iG27Q = accounts[3]
//		await DJCoin8Ujnj7.renounceOwnership.call({from: accounts[2]});
//		await DJCoin8Ujnj7.renounceOwnership.call({from: accounts[0]});
//		const booltuiYW3d = await DJCoin8Ujnj7.decreaseAllowance.call(addressc4iG27Q, uintAShWr8T, {from: accounts[2]});

		await expect(DJCoin8Ujnj7.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineBojQa9 = await DJCoin.new({from: accounts[3]});
		const uintorZpbFl = BigInt("0")
		const addressnNjYjA = accounts[1]
		const uintB88hBmR = BigInt("1504")
		const addressiMJHQ4r = accounts[2]
		const booloBD6ZdC = await DJCoineBojQa9.transfer.call(addressnNjYjA, uintorZpbFl, {from: accounts[4]});
//		await DJCoineBojQa9.onlyOwner.call({from: accounts[4]});
//		const boolZxiCiZz = await DJCoineBojQa9.approve.call(addressiMJHQ4r, uintB88hBmR, {from: accounts[4]});

		assert.equal(booloBD6ZdC, true)
		await expect(DJCoineBojQa9.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMiGDMF = await DJCoin.new({from: accounts[4]});
		const address9RDIHh = accounts[2]
		const uintqQd0Pez = BigInt("524")
		const uintmgJKpYK = BigInt("1364")
		const addresseJ4fcSV = "0x0000000000000000000000000000000000000001"
		const addressnRroiPw = accounts[3]
		const addressrkoJqlh = await DJCoinMiGDMF.transferOwnership.call(address9RDIHh, {from: accounts[4]});
//		const uint256aZ11bPF = await DJCoinMiGDMF.burn.call(uintmgJKpYK, uintqQd0Pez, {from: accounts[0]});
//		const uint256SiS0Sbe = await DJCoinMiGDMF.allowance.call(addressnRroiPw, addresseJ4fcSV, {from: accounts[4]});

		await expect(DJCoinMiGDMF.burn.call(uintmgJKpYK, uintqQd0Pez, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})