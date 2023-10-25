const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinEM3GmKC = await FreakCoin.new({from: accounts[4]});
		const addressSMDRlSH = accounts[5]
		const addresseEmTdBq = accounts[4]
		const uintpb0aeyX = BigInt("471")
		const addresshDrOqas = accounts[5]
		const uintz32ZJht = BigInt("1393")
		const addressmWrkBn8 = accounts[2]
		const addressY8oQzs = accounts[3]
		const addressmlVbmDP = accounts[0]
		const uint256pZzIG3s = await FreakCoinEM3GmKC.allowance.call(addresseEmTdBq, addressSMDRlSH, {from: accounts[5]});
		const boolfbX3UE4 = await FreakCoinEM3GmKC.transfer.call(addresshDrOqas, uintpb0aeyX, {from: "0x0000000000000000000000000000000000000001"});
		const addressqr8V3mQ = await FreakCoinEM3GmKC.uniswapAddress.call({from: accounts[2]});
		const boolmVch1v9 = await FreakCoinEM3GmKC.approve.call(addressmWrkBn8, uintz32ZJht, {from: accounts[2]});
		const uint256n8BnwQU = await FreakCoinEM3GmKC.allUserBalances.call(addressY8oQzs, {from: accounts[3]});
		const uint256SqJBOIt = await FreakCoinEM3GmKC.balanceOf.call(addressmlVbmDP, {from: accounts[4]});

		assert.equal(uint256pZzIG3s, BigInt("0"))
		await expect(FreakCoinEM3GmKC.transfer.call(addresshDrOqas, uintpb0aeyX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinD4Toqi8 = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEws4Atk = BigInt("946")
		const addressP96Tjgz = "0x0000000000000000000000000000000000000001"
		const addressXXVVqMd = accounts[0]
		const addressumSkHl = accounts[5]
		const addressyDVQwOr = accounts[1]
		const uintb1oWSno = BigInt("1225")
		const addressbZxUtJt = accounts[3]
		const addressA6jDzAo = accounts[5]
		const uint256QWuAMCr = await FreakCoinD4Toqi8.totalSupply.call({from: accounts[1]});
		const boolS77SeIs = await FreakCoinD4Toqi8.approve.call(addressP96Tjgz, uintEws4Atk, {from: accounts[1]});
		const uint256wUSDA0S = await FreakCoinD4Toqi8.allUserBalances.call(addressXXVVqMd, {from: accounts[2]});
		const uint256a4npSPY = await FreakCoinD4Toqi8.allowance.call(addressyDVQwOr, addressumSkHl, {from: "0x0000000000000000000000000000000000000001"});
		const boolvrdiJLY = await FreakCoinD4Toqi8.transferFrom.call(addressA6jDzAo, addressbZxUtJt, uintb1oWSno, {from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoindg2hVcs = await FreakCoin.new({from: accounts[4]});
		const addressYtgs4bd = accounts[3]
		const addressQWIFzPM = accounts[2]
		const addressHD4K5QA = accounts[3]
		const addressWJtWsaz = accounts[3]
		const addresso86nkxt = accounts[3]
		const uintB0tN8F = BigInt("393")
		const addresslFP0PZ9 = accounts[4]
		const addresssCvTTYX = accounts[4]
		const uintgVfTI47 = BigInt("1281")
		const addresslaX1TiZ = accounts[4]
		const addressFx6koW7 = accounts[1]
		const uint256Qkl3DYx = await FreakCoindg2hVcs.allowance.call(addressQWIFzPM, addressYtgs4bd, {from: accounts[1]});
		const uint256sk6V4Fv = await FreakCoindg2hVcs.allowance.call(addressWJtWsaz, addressHD4K5QA, {from: accounts[0]});
		const uint256mYuUcJ2 = await FreakCoindg2hVcs.allUserBalances.call(addresso86nkxt, {from: accounts[2]});
		const boolObkYGJh = await FreakCoindg2hVcs.transferFrom.call(addresssCvTTYX, addresslFP0PZ9, uintB0tN8F, {from: "0x0000000000000000000000000000000000000001"});
		const boolgFpzxP5 = await FreakCoindg2hVcs.transferFrom.call(addressFx6koW7, addresslaX1TiZ, uintgVfTI47, {from: accounts[3]});

		assert.equal(uint256Qkl3DYx, BigInt("0"))
		assert.equal(uint256sk6V4Fv, BigInt("0"))
		await expect(FreakCoindg2hVcs.allUserBalances.call(addresso86nkxt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJIaV3Tx = await FreakCoin.new({from: accounts[1]});
		const addressIrxT9Ch = accounts[1]
		const uintQtOf3zx = BigInt("904")
		const addressGqngmGX = accounts[5]
		const uintEoriz6J = BigInt("361")
		const addressPZ4Awy5 = accounts[5]
		const addressKW841h = accounts[1]
		const uint256Xx6IqB3 = await FreakCoinJIaV3Tx.allUserBalances.call(addressIrxT9Ch, {from: accounts[3]});
		const booltclOdZ8 = await FreakCoinJIaV3Tx.approve.call(addressGqngmGX, uintQtOf3zx, {from: accounts[5]});
		const boolfoBQKZ4 = await FreakCoinJIaV3Tx.transferFrom.call(addressKW841h, addressPZ4Awy5, uintEoriz6J, {from: accounts[3]});

		assert.equal(booltclOdZ8, true)
		await expect(FreakCoinJIaV3Tx.transferFrom.call(addressKW841h, addressPZ4Awy5, uintEoriz6J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinoom9XmS = await FreakCoin.new({from: accounts[4]});
		const uintbvvxT8 = BigInt("2046")
		const addressHfc8G0K = accounts[2]
		const addressUor25ls = "0x0000000000000000000000000000000000000001"
		const uint140UtW = BigInt("989")
		const addresswAmpRb9 = accounts[0]
		const addressqmIC7a = accounts[3]
		const addressv4UUb3y = accounts[1]
		const addressjcAp2hM = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[1]});
		const boolYbFmPQY = await FreakCoinoom9XmS.transferFrom.call(addressUor25ls, addressHfc8G0K, uintbvvxT8, {from: accounts[1]});
		const boolONRD0Ax = await FreakCoinoom9XmS.transfer.call(addresswAmpRb9, uint140UtW, {from: accounts[2]});
		const uint256w7tq4Ei = await FreakCoinoom9XmS.allowance.call(addressv4UUb3y, addressqmIC7a, {from: accounts[3]});
		const addressc2OqGPA = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[2]});
		const uint256VtEtZya = await FreakCoinoom9XmS.totalSupply.call({from: accounts[4]});

		assert.equal(addressjcAp2hM, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinoom9XmS.transferFrom.call(addressUor25ls, addressHfc8G0K, uintbvvxT8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinEM3GmKC = await FreakCoin.new({from: accounts[4]});
		const addressuOIAzm = accounts[2]
		const addressffNbx3O = accounts[5]
		const addresssKV22YI = accounts[4]
		const uintknOSNE = BigInt("471")
		const addressG0u2qL1 = accounts[5]
		const uintxTzL3RX = BigInt("1393")
		const addressfn8dLLz = accounts[2]
		const addressxlV8bzM = accounts[3]
		const addressGJkT5sM = accounts[0]
		const addressVxOxsLg = await FreakCoinEM3GmKC.setUniswapAddress.call(addressuOIAzm, {from: accounts[4]});
		const uint256pZzIG3s = await FreakCoinEM3GmKC.allowance.call(addresssKV22YI, addressffNbx3O, {from: accounts[5]});
		const boolfbX3UE4 = await FreakCoinEM3GmKC.transfer.call(addressG0u2qL1, uintknOSNE, {from: "0x0000000000000000000000000000000000000001"});
		const addressqr8V3mQ = await FreakCoinEM3GmKC.uniswapAddress.call({from: accounts[2]});
		const boolmVch1v9 = await FreakCoinEM3GmKC.approve.call(addressfn8dLLz, uintxTzL3RX, {from: accounts[2]});
		const uint256n8BnwQU = await FreakCoinEM3GmKC.allUserBalances.call(addressxlV8bzM, {from: accounts[3]});
		const uint256SqJBOIt = await FreakCoinEM3GmKC.balanceOf.call(addressGJkT5sM, {from: accounts[4]});

		assert.equal(uint256pZzIG3s, BigInt("0"))
		await expect(FreakCoinEM3GmKC.transfer.call(addressG0u2qL1, uintknOSNE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinoom9XmS = await FreakCoin.new({from: accounts[4]});
		const uintsMtmXIP = BigInt("1340")
		const address72nrgS = accounts[2]
		const uintbPu7uKP = BigInt("2046")
		const addressyl2bEi = accounts[2]
		const addressOklaZQv = "0x0000000000000000000000000000000000000001"
		const uintJsLmo8A = BigInt("989")
		const addressQRI16PK = accounts[0]
		const uintc7pEyDT = BigInt("1187")
		const addressWYUyFcp = accounts[2]
		const addressoHBBFM5 = accounts[3]
		const addressAP0Crei = accounts[1]
		const uintkaaABGL = BigInt("184")
		const addressgyJrRAs = "0x0000000000000000000000000000000000000001"
		const addressjcAp2hM = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[1]});
		const boolBVwKc5 = await FreakCoinoom9XmS.transfer.call(address72nrgS, uintsMtmXIP, {from: accounts[4]});
		const boolYbFmPQY = await FreakCoinoom9XmS.transferFrom.call(addressOklaZQv, addressyl2bEi, uintbPu7uKP, {from: accounts[1]});
		const boolONRD0Ax = await FreakCoinoom9XmS.transfer.call(addressQRI16PK, uintJsLmo8A, {from: accounts[2]});
		const boolDfmH8Nh = await FreakCoinoom9XmS.approve.call(addressWYUyFcp, uintc7pEyDT, {from: accounts[1]});
		const uint256w7tq4Ei = await FreakCoinoom9XmS.allowance.call(addressAP0Crei, addressoHBBFM5, {from: accounts[3]});
		const boolOndxa5I = await FreakCoinoom9XmS.approve.call(addressgyJrRAs, uintkaaABGL, {from: "0x0000000000000000000000000000000000000001"});
		const addressc2OqGPA = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[2]});
		const uint256VtEtZya = await FreakCoinoom9XmS.totalSupply.call({from: accounts[4]});

		assert.equal(addressjcAp2hM, 0x0000000000000000000000000000000000000000)
		assert.equal(boolBVwKc5, true)
		await expect(FreakCoinoom9XmS.transferFrom.call(addressOklaZQv, addressyl2bEi, uintbPu7uKP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinoom9XmS = await FreakCoin.new({from: accounts[4]});
		const uintt9nbWf9 = BigInt("1340")
		const addressa29oFD2 = accounts[4]
		const uintZeKjdbk = BigInt("2046")
		const addressp936CH6 = accounts[2]
		const addressr44L7l = "0x0000000000000000000000000000000000000001"
		const uintslzmOP5 = BigInt("989")
		const addressol8EQg0 = accounts[0]
		const uintCaVDxtN = BigInt("1187")
		const addressY5bsKX0 = accounts[2]
		const addresspxzmpy = accounts[3]
		const addressNQvZRaU = accounts[1]
		const uint0aDjz7 = BigInt("184")
		const addresslVeorAd = "0x0000000000000000000000000000000000000001"
		const addressjcAp2hM = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[1]});
		const boolBVwKc5 = await FreakCoinoom9XmS.transfer.call(addressa29oFD2, uintt9nbWf9, {from: accounts[4]});
		const boolYbFmPQY = await FreakCoinoom9XmS.transferFrom.call(addressr44L7l, addressp936CH6, uintZeKjdbk, {from: accounts[1]});
		const boolONRD0Ax = await FreakCoinoom9XmS.transfer.call(addressol8EQg0, uintslzmOP5, {from: accounts[2]});
		const boolDfmH8Nh = await FreakCoinoom9XmS.approve.call(addressY5bsKX0, uintCaVDxtN, {from: accounts[1]});
		const uint256w7tq4Ei = await FreakCoinoom9XmS.allowance.call(addressNQvZRaU, addresspxzmpy, {from: accounts[3]});
		const boolOndxa5I = await FreakCoinoom9XmS.approve.call(addresslVeorAd, uint0aDjz7, {from: "0x0000000000000000000000000000000000000001"});
		const addressc2OqGPA = await FreakCoinoom9XmS.uniswapAddress.call({from: accounts[2]});
		const uint256VtEtZya = await FreakCoinoom9XmS.totalSupply.call({from: accounts[4]});

		assert.equal(addressjcAp2hM, 0x0000000000000000000000000000000000000000)
		assert.equal(boolBVwKc5, true)
		await expect(FreakCoinoom9XmS.transferFrom.call(addressr44L7l, addressp936CH6, uintZeKjdbk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})