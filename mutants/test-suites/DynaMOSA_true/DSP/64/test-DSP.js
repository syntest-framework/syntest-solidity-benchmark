const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringAcUCxTd = "2VF4cWNT18jy260JQOnuWat7ixzhF6jCtRCRNDKK4of8cAzU1KLunA1H7KZcMDZhOuUidO3k3dsVF72Juenc4qXsGGoN"
		const stringhSZjYdA = "STEZyNil1YNXEMUyWjNWOH3VSDuCpFXis3XbsN621c3UWKUU6yxNWJndmL55di7uZnUh2sORpAVd"
		const uintzyOIrsf = BigInt("99")
		const DSPJp4nnkQ = await DSP.new(stringAcUCxTd, stringhSZjYdA, uintzyOIrsf, {from: accounts[5]});
		const uintQS3Hye = BigInt("1166")
		const addressCEdZ5oA = accounts[2]
		const address4HXkxO = accounts[5]
		const uintq2xgHsr = BigInt("543")
		const addressr4FTV2a = "0x0000000000000000000000000000000000000001"
		await DSPJp4nnkQ.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8mvElbmd = await DSPJp4nnkQ.decimals.call({from: accounts[3]});
		const boolAFmFB8c = await DSPJp4nnkQ.transferFrom.call(address4HXkxO, addressCEdZ5oA, uintQS3Hye, {from: accounts[2]});
		const boolvaZCFQj = await DSPJp4nnkQ.approve.call(addressr4FTV2a, uintq2xgHsr, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPVdtEQGJ = await DSP.new({from: accounts[1]});
		const uinthBORpw7 = BigInt("711")
		const addressZWhD4bo = accounts[2]
		const addressaopEVxN = accounts[4]
		const addressPZPehW9 = accounts[5]
		const uintjYEjr2p = BigInt("148")
		const uintSTnLcup = BigInt("1240")
		const addressYAMqN9Y = accounts[0]
//		const boolP3reaAv = await DSPVdtEQGJ.transferFrom.call(addressaopEVxN, addressZWhD4bo, uinthBORpw7, {from: accounts[4]});
//		await DSPVdtEQGJ.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256mcFqu8 = await DSPVdtEQGJ.balanceOf.call(addressPZPehW9, {from: accounts[4]});
//		await DSPVdtEQGJ.onlyPauser.call({from: accounts[4]});
//		const boolb6PaDd3 = await DSPVdtEQGJ.lock.call(addressYAMqN9Y, uintSTnLcup, uintjYEjr2p, {from: accounts[0]});
//		const uint8uQUjY4Z = await DSPVdtEQGJ.decimals.call({from: accounts[4]});

		await expect(DSPVdtEQGJ.transferFrom.call(addressaopEVxN, addressZWhD4bo, uinthBORpw7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPlSkV3Mo = await DSP.new({from: accounts[5]});
		const addressgLpCSMF = accounts[4]
		const uinthpzODtw = BigInt("1458")
		const addressksC9RIy = accounts[3]
		const uintMj2gMjz = BigInt("703")
		const addressneBmGG = accounts[3]
//		const addressD9IQGfd = await DSPlSkV3Mo.notFrozen.call(addressgLpCSMF, {from: accounts[2]});
//		const boolVCe0s6h = await DSPlSkV3Mo.increaseAllowance.call(addressksC9RIy, uinthpzODtw, {from: accounts[2]});
//		const boolNv0Yjtk = await DSPlSkV3Mo.mint.call(addressneBmGG, uintMj2gMjz, {from: accounts[5]});

		await expect(DSPlSkV3Mo.notFrozen.call(addressgLpCSMF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuANncO = await DSP.new({from: accounts[3]});
		const uintR7S0NAm = BigInt("301")
		const addressyB5AQqk = accounts[1]
		const uintFFj2Vbk = BigInt("214")
		const addressFKgT70 = "0x0000000000000000000000000000000000000001"
		const uintF4qS9GC = BigInt("246")
		const uintOLj9wCq = BigInt("2007")
		const addressc7V03L = accounts[2]
		const uint256v2NZ1LZ = await DSPuANncO.totalSupply.call({from: accounts[1]});
//		const booliY3VX1R = await DSPuANncO.mint.call(addressyB5AQqk, uintR7S0NAm, {from: accounts[0]});
//		const uint256l8euY8s = await DSPuANncO.totalSupply.call({from: accounts[4]});
//		const boolI2Qnocr = await DSPuANncO.decreaseAllowance.call(addressFKgT70, uintFFj2Vbk, {from: accounts[2]});
//		const booltXpGwJu = await DSPuANncO.lock.call(addressc7V03L, uintOLj9wCq, uintF4qS9GC, {from: accounts[1]});

		assert.equal(uint256v2NZ1LZ, BigInt("100000000000000000000000000000"))
		await expect(DSPuANncO.mint.call(addressyB5AQqk, uintR7S0NAm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addresspfVeJi4 = accounts[0]
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addresspfVeJi4, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPKQA02yJ.onlyNewOwner.call({from: accounts[5]});

		await expect(DSPKQA02yJ.addPauser.call(addresspfVeJi4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVdtEQGJ = await DSP.new({from: accounts[1]});
		const uintiXpohpV = BigInt("711")
		const addressG6rDzoZ = accounts[2]
		const addressKZEg3yA = accounts[4]
		const addresssjwG0Rm = accounts[5]
		const uintfaOhqa5 = BigInt("148")
		const uintcQnwnUd = BigInt("1240")
		const addresso5PSBIp = accounts[0]
		const uint8URk4Vcx = await DSPVdtEQGJ.decimals.call({from: accounts[0]});
//		const boolP3reaAv = await DSPVdtEQGJ.transferFrom.call(addressKZEg3yA, addressG6rDzoZ, uintiXpohpV, {from: accounts[4]});
//		await DSPVdtEQGJ.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256mcFqu8 = await DSPVdtEQGJ.balanceOf.call(addresssjwG0Rm, {from: accounts[4]});
//		await DSPVdtEQGJ.onlyPauser.call({from: accounts[4]});
//		const boolb6PaDd3 = await DSPVdtEQGJ.lock.call(addresso5PSBIp, uintcQnwnUd, uintfaOhqa5, {from: accounts[0]});
//		const uint8uQUjY4Z = await DSPVdtEQGJ.decimals.call({from: accounts[4]});

		assert.equal(uint8URk4Vcx, BigInt("18"))
		await expect(DSPVdtEQGJ.transferFrom.call(addressKZEg3yA, addressG6rDzoZ, uintiXpohpV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressivE8ND4 = accounts[2]
		const addressldHZWq = accounts[2]
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressivE8ND4, {from: accounts[3]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addressldHZWq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256HWILs4m, BigInt("100000000000000000000000000000"))
		await expect(DSPKQA02yJ.addPauser.call(addressldHZWq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintsQqCqx = BigInt("1127")
		const addressq5Y6GBU = accounts[3]
		const addressi7RLEnz = accounts[2]
//		const booltrIqWOR = await DSPKQA02yJ.transfer.call(addressq5Y6GBU, uintsQqCqx, {from: accounts[4]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addressi7RLEnz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPKQA02yJ.transfer.call(addressq5Y6GBU, uintsQqCqx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const address4D1SWY = accounts[2]
		const boolkVMmpdv = await DSPKQA02yJ.paused.call({from: accounts[2]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(address4D1SWY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkVMmpdv, false)
		await expect(DSPKQA02yJ.addPauser.call(address4D1SWY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPu3EwYoj = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintax4guly = BigInt("629")
		const addressKAbU3qL = accounts[3]
		const addressowxVIrT = "0x0000000000000000000000000000000000000001"
		const addressaWJvO35 = accounts[4]
		const uintKDsq0E = BigInt("991")
		const addressbPxtU5g = accounts[1]
		const boolkdxejO7 = await DSPu3EwYoj.paused.call({from: accounts[3]});
		const boolLXRqvbG = await DSPu3EwYoj.transferFrom.call(addressowxVIrT, addressKAbU3qL, uintax4guly, {from: accounts[1]});
		const boollRxSWK1 = await DSPu3EwYoj.isOwner.call(addressaWJvO35, {from: accounts[1]});
		await DSPu3EwYoj.onlyNewOwner.call({from: accounts[4]});
		await DSPu3EwYoj.onlyNewOwner.call({from: accounts[0]});
		const boolf1zNR6L = await DSPu3EwYoj.transfer.call(addressbPxtU5g, uintKDsq0E, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPp1RQ97L = await DSP.new({from: accounts[5]});
		const addressiwX4qdq = accounts[3]
		const uintqVUfK4v = BigInt("419")
		const addressmvw2MRc = accounts[1]
		const addressHdpnhNh = accounts[5]
		const uintZN75Ba = BigInt("2010")
		const addresspBLe9kK = "0x0000000000000000000000000000000000000001"
		const stringlfNBeM = await DSPp1RQ97L.symbol.call({from: accounts[0]});
		const uint256YxSzYo = await DSPp1RQ97L.balanceOf.call(addressiwX4qdq, {from: accounts[2]});
//		const boolPXdhDl9 = await DSPp1RQ97L.unlock.call(addressmvw2MRc, uintqVUfK4v, {from: accounts[3]});
//		const addressiTvtTRQ = await DSPp1RQ97L.transferOwnership.call(addressHdpnhNh, {from: accounts[1]});
//		const boolS3Tvvbt = await DSPp1RQ97L.paused.call({from: accounts[1]});
//		const boolFrOowY = await DSPp1RQ97L.transfer.call(addresspBLe9kK, uintZN75Ba, {from: accounts[0]});

		assert.equal(stringlfNBeM, "DSP")
		assert.equal(uint256YxSzYo, BigInt("0"))
		await expect(DSPp1RQ97L.unlock.call(addressmvw2MRc, uintqVUfK4v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressKLSsXl = accounts[4]
		const uintInOVEg = BigInt("56")
		const uinthD8AYmE = BigInt("1558")
		const addressHfQLWG5 = accounts[0]
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressKLSsXl, {from: accounts[3]});
		const boolifsUwC = await DSPKQA02yJ.transferWithLock.call(addressHfQLWG5, uinthD8AYmE, uintInOVEg, {from: accounts[2]});

		assert.equal(boolifsUwC, true)
		assert.equal(uint256HWILs4m, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addresstP3rNt5 = accounts[4]
		const uintkXGALUJ = BigInt("245")
		const address4FinXa = accounts[1]
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addresstP3rNt5, {from: accounts[3]});
//		const boolxpIEUlf = await DSPKQA02yJ.decreaseAllowance.call(address4FinXa, uintkXGALUJ, {from: accounts[3]});

		assert.equal(uint256HWILs4m, BigInt("0"))
		await expect(DSPKQA02yJ.decreaseAllowance.call(address4FinXa, uintkXGALUJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressm4c3YyT = accounts[3]
		const addressi0uwbI5 = accounts[1]
		const addressnegS7DM = accounts[2]
		const addresse7DG5t0 = accounts[3]
		const addressxuDmxkK = await DSPKQA02yJ.addPauser.call(addressm4c3YyT, {from: accounts[2]});
		const addressMeTYTTD = await DSPKQA02yJ.transferOwnership.call(addressi0uwbI5, {from: accounts[2]});
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressnegS7DM, {from: accounts[3]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addresse7DG5t0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256HWILs4m, BigInt("100000000000000000000000000000"))
		await expect(DSPKQA02yJ.addPauser.call(addresse7DG5t0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintthZLsW7 = BigInt("363")
		const addressYYUyZ72 = accounts[4]
		const addressKyO0VoR = accounts[2]
		const addressYuIrGFa = "0x0000000000000000000000000000000000000001"
		const boolRGm81xl = await DSPKQA02yJ.mint.call(addressYYUyZ72, uintthZLsW7, {from: accounts[2]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addressKyO0VoR, {from: "0x0000000000000000000000000000000000000001"});
//		const address8rDNYX = await DSPKQA02yJ.notFrozen.call(addressYuIrGFa, {from: accounts[4]});

		assert.equal(boolRGm81xl, true)
		await expect(DSPKQA02yJ.addPauser.call(addressKyO0VoR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressxCtNXW9 = accounts[2]
		const uintiEkz0Qn = BigInt("875")
		const addressOKvAUNN = accounts[4]
		const addressmy2MMDP = accounts[3]
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressxCtNXW9, {from: accounts[3]});
//		const boolyTwxFGw = await DSPKQA02yJ.unlock.call(addressOKvAUNN, uintiEkz0Qn, {from: accounts[2]});
//		const stringq9ifI6G = await DSPKQA02yJ.symbol.call({from: accounts[1]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addressmy2MMDP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256HWILs4m, BigInt("100000000000000000000000000000"))
		await expect(DSPKQA02yJ.unlock.call(addressOKvAUNN, uintiEkz0Qn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintAftNf7X = BigInt("123")
		const uintIW6sFqF = BigInt("816")
		const addresstYlWTL = accounts[0]
		const addressNfaDEBy = "0x0000000000000000000000000000000000000001"
		const addressgK6tUjl = "0x0000000000000000000000000000000000000001"
		const addressarGfAK = accounts[3]
//		const boolK1asiks = await DSPKQA02yJ.lock.call(addresstYlWTL, uintIW6sFqF, uintAftNf7X, {from: accounts[2]});
//		const uint2568T5OTO = await DSPKQA02yJ.allowance.call(addressgK6tUjl, addressNfaDEBy, {from: accounts[0]});
//		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressarGfAK, {from: accounts[3]});

		await expect(DSPKQA02yJ.lock.call(addresstYlWTL, uintIW6sFqF, uintAftNf7X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressyhGGARM = accounts[1]
		const boolaBFfHUW = await DSPKQA02yJ.paused.call({from: accounts[0]});
		const stringeBOg5TR = await DSPKQA02yJ.name.call({from: accounts[0]});
//		const addressHvlFiGM = await DSPKQA02yJ.addPauser.call(addressyhGGARM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaBFfHUW, false)
		assert.equal(stringeBOg5TR, "DSP")
		await expect(DSPKQA02yJ.addPauser.call(addressyhGGARM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintllz4M8X = BigInt("1347")
		const addressnGKXf8 = accounts[5]
		const uintS2H5ojA = BigInt("1127")
		const addressT29qJg = accounts[5]
		const boola7E7PqZ = await DSPKQA02yJ.approve.call(addressnGKXf8, uintllz4M8X, {from: accounts[4]});
//		const booltrIqWOR = await DSPKQA02yJ.transfer.call(addressT29qJg, uintS2H5ojA, {from: accounts[4]});
//		const stringFeo6Imd = await DSPKQA02yJ.symbol.call({from: accounts[2]});

		assert.equal(boola7E7PqZ, true)
		await expect(DSPKQA02yJ.transfer.call(addressT29qJg, uintS2H5ojA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbts1pa6 = await DSP.new({from: accounts[4]});
		const addressaGrEZMc = accounts[2]
		const addressQ5rWZon = "0x0000000000000000000000000000000000000001"
		const uint256lBjzeQl = await DSPbts1pa6.allowance.call(addressQ5rWZon, addressaGrEZMc, {from: accounts[3]});
//		await DSPbts1pa6.renouncePauser.call({from: accounts[4]});
//		await DSPbts1pa6.renouncePauser.call({from: accounts[5]});
//		await DSPbts1pa6.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lBjzeQl, BigInt("0"))
		await expect(DSPbts1pa6.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbSlrwOk = await DSP.new({from: accounts[4]});
		const addressmQ0MfuE = accounts[0]
		const addressA37sgdv = accounts[5]
		const uintHalAHDi = BigInt("316")
		const addressuxZhbiN = accounts[5]
		const uintsszHh1 = BigInt("1414")
		const addressyeolOci = accounts[5]
		const addressA7eAx2X = accounts[2]
		const uint256mz5gM8I = await DSPbSlrwOk.allowance.call(addressA37sgdv, addressmQ0MfuE, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPbSlrwOk.f.call({from: accounts[1]});
//		const boolF2pQoB = await DSPbSlrwOk.mint.call(addressuxZhbiN, uintHalAHDi, {from: accounts[5]});
//		const boolGE7OiuF = await DSPbSlrwOk.transferFrom.call(addressA7eAx2X, addressyeolOci, uintsszHh1, {from: accounts[3]});

		assert.equal(uint256mz5gM8I, BigInt("0"))
		await expect(DSPbSlrwOk.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintGJicQih = BigInt("15")
		const addressxZvqIlV = accounts[1]
		const addressqKYuZo = accounts[3]
		const addressh59f6ye = accounts[0]
		const addressNgQ6C85 = accounts[4]
		const booldSQlaFT = await DSPKQA02yJ.increaseAllowance.call(addressxZvqIlV, uintGJicQih, {from: accounts[1]});
		const uint256G8zHW7P = await DSPKQA02yJ.allowance.call(addressh59f6ye, addressqKYuZo, {from: accounts[2]});
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressNgQ6C85, {from: accounts[3]});

		assert.equal(booldSQlaFT, true)
		assert.equal(uint256G8zHW7P, BigInt("0"))
		assert.equal(uint256HWILs4m, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const addressX1tBKJ = accounts[4]
		const addressbmAp4R0 = accounts[2]
		const uint256HWILs4m = await DSPKQA02yJ.balanceOf.call(addressX1tBKJ, {from: accounts[3]});
		const boolHhLAoOH = await DSPKQA02yJ.isOwner.call(addressbmAp4R0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHhLAoOH, true)
		assert.equal(uint256HWILs4m, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPVdtEQGJ = await DSP.new({from: accounts[1]});
		const uintHhBSuz = BigInt("1632")
		const addressaOeBu7y = accounts[1]
		const uintQhSYGG5 = BigInt("711")
		const addressJ6HYAIa = accounts[4]
		const addressg013dXM = accounts[4]
		const boolpIkJeEa = await DSPVdtEQGJ.burnFrombyOwner.call(addressaOeBu7y, uintHhBSuz, {from: accounts[1]});
//		const boolP3reaAv = await DSPVdtEQGJ.transferFrom.call(addressg013dXM, addressJ6HYAIa, uintQhSYGG5, {from: accounts[4]});

		assert.equal(boolpIkJeEa, true)
		await expect(DSPVdtEQGJ.transferFrom.call(addressg013dXM, addressJ6HYAIa, uintQhSYGG5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKQA02yJ = await DSP.new({from: accounts[2]});
		const uintUArin0G = BigInt("1061")
		const uinttCwiNVB = BigInt("129")
		const addressgruol2Y = accounts[2]
		const uintbsfMUo = BigInt("1127")
		const addressLVscUMD = accounts[4]
		const boolxJKdWkh = await DSPKQA02yJ.lock.call(addressgruol2Y, uinttCwiNVB, uintUArin0G, {from: accounts[2]});
//		const booltrIqWOR = await DSPKQA02yJ.transfer.call(addressLVscUMD, uintbsfMUo, {from: accounts[4]});

		assert.equal(boolxJKdWkh, true)
		await expect(DSPKQA02yJ.transfer.call(addressLVscUMD, uintbsfMUo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})