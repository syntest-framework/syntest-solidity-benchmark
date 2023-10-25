const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintXldGL81 = BigInt("1500")
		const addressjur2dR = accounts[4]
		const boolaujf2iv = await ReviveadB0OsV.approve.call(addressjur2dR, uintXldGL81, {from: accounts[0]});
		await ReviveadB0OsV.onlyOwner.call({from: accounts[3]});

		assert.equal(boolaujf2iv, true)
		await expect(ReviveadB0OsV.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYPr2bjJ = await Revive.new({from: accounts[2]});
		const uintNPuF2n = BigInt("456")
		const addresstCW268 = accounts[1]
		const boolFa3uGll = await ReviveYPr2bjJ.increaseAllowance.call(addresstCW268, uintNPuF2n, {from: accounts[3]});
		const addresshSmQPOl = await ReviveYPr2bjJ.owner.call({from: accounts[1]});

		assert.equal(addresshSmQPOl, 0xF051Ed1c7b0382FEB127242fAEc14f9F7d5784b8)
		assert.equal(boolFa3uGll, true)
	});

	it('test for Revive', async () => {
		const ReviveWLK1Fjj = await Revive.new({from: accounts[2]});
		const byte0IYqrW = "0x1c030b11151505020d121f071d1c05191e02011f080e0c15161b1d1e0608131a"
		const addressPHjeSY = accounts[4]
		const addresshXt0mkJ = accounts[1]
		const addressVwr5TYC = accounts[5]
		const uintlexLzCs = BigInt("135")
		const byteTaxTJui = "0x071e0c0b1a1b1a0611191704021b1b080e0a0401101f1903091c1b020f09180e"
		const uintslCqYfF = BigInt("1757")
		const addressO3m28aj = accounts[3]
		const addressJWC1fUZ = accounts[2]
		const addressdsXPnqh = accounts[2]
		const uintRnnUZhR = BigInt("669")
		const addressJumB06p = accounts[2]
		const uint256fpNrZDu = await ReviveWLK1Fjj.tokensLocked.call(addressPHjeSY, byte0IYqrW, {from: accounts[3]});
		const uint256iWWege6 = await ReviveWLK1Fjj.allowance.call(addressVwr5TYC, addresshXt0mkJ, {from: "0x0000000000000000000000000000000000000001"});
		const booldmG3fOe = await ReviveWLK1Fjj.extendLock.call(byteTaxTJui, uintlexLzCs, {from: accounts[2]});
		const booluyLGTx0 = await ReviveWLK1Fjj.transferFrom.call(addressJWC1fUZ, addressO3m28aj, uintslCqYfF, {from: accounts[2]});
		const uint256Uwf13On = await ReviveWLK1Fjj.getUnlockableTokens.call(addressdsXPnqh, {from: accounts[4]});
		const booldqLIB48 = await ReviveWLK1Fjj.transfer.call(addressJumB06p, uintRnnUZhR, {from: accounts[2]});

		assert.equal(uint256fpNrZDu, BigInt("0"))
		assert.equal(uint256iWWege6, BigInt("0"))
		await expect(ReviveWLK1Fjj.extendLock.call(byteTaxTJui, uintlexLzCs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewRiCitJ = await Revive.new({from: accounts[2]});
		const uintNke3Z1M = BigInt("1785")
		const addressFHrLoVb = "0x0000000000000000000000000000000000000001"
		const byteVdmpGW = "0x1c190e11040c16030d1213021d051715141106000b18191b1e0d0d181c020b01"
		const addressxipDJQ2 = accounts[4]
		const addressreYQPyV = accounts[1]
		const addressDCbS3sj = accounts[5]
		const addressnYzoOz = await RevivewRiCitJ.recoverERC20.call(addressFHrLoVb, uintNke3Z1M, {from: accounts[4]});
		const uint256Vatz8OY = await RevivewRiCitJ.tokensUnlockable.call(addressxipDJQ2, byteVdmpGW, {from: accounts[3]});
		const uint256eI3rrkG = await RevivewRiCitJ.totalSupply.call({from: accounts[3]});
		const uint256XtqcJfk = await RevivewRiCitJ.allowance.call(addressDCbS3sj, addressreYQPyV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivewRiCitJ.recoverERC20.call(addressFHrLoVb, uintNke3Z1M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetU8RZV = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressq4enN40 = accounts[3]
		const uintbPlnoU = BigInt("59")
		const byteFwlPKUa = "0x191f190e1b0114110f091209181e0f021a1d1d000f1b0d131901041b06100003"
		const addressMv8fMw = accounts[4]
		const uintNJRr8DB = BigInt("282")
		const addressaMP20iV = accounts[3]
		const uint256qYxNCGq = await RevivetU8RZV.balanceOf.call(addressq4enN40, {from: accounts[3]});
		const addressZKsjcKh = await RevivetU8RZV.owner.call({from: accounts[3]});
		const uint256Q0OBXHK = await RevivetU8RZV.tokensLockedAtTime.call(addressMv8fMw, byteFwlPKUa, uintbPlnoU, {from: accounts[1]});
		const boolky7CLBP = await RevivetU8RZV.increaseAllowance.call(addressaMP20iV, uintNJRr8DB, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const addressTVKnqoL = accounts[3]
		const uintLN6iV6 = BigInt("1161")
		const uinte8olqoE = BigInt("980")
		const bytepbqMegp = "0x0405060d1c10011e200a18021b1810051e0c16021e0b08100f121b081906150c"
		const byteVzOniT = "0x081c07071d160e01140b1f160d040f07070b0f150d010c101a1e160a02170003"
		const addresslA1hu5T = accounts[3]
		const uinth7DLHrk = BigInt("1428")
		const uintIdTzuTN = BigInt("380")
		const byteucCfohd = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181c01100016"
		const addresskiQOSuF = await ReviveN1XHCp.owner.call({from: accounts[0]});
		const uint256Y0mazaP = await ReviveN1XHCp.balanceOf.call(addressTVKnqoL, {from: accounts[3]});
		const boolBcBpJEW = await ReviveN1XHCp.lock.call(bytepbqMegp, uinte8olqoE, uintLN6iV6, {from: accounts[2]});
		const uint256Ngwg7qU = await ReviveN1XHCp.tokensUnlockable.call(addresslA1hu5T, byteVzOniT, {from: accounts[2]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(byteucCfohd, uintIdTzuTN, uinth7DLHrk, {from: accounts[0]});

		assert.equal(addresskiQOSuF, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		assert.equal(uint256Y0mazaP, BigInt("0"))
		await expect(ReviveN1XHCp.lock.call(bytepbqMegp, uinte8olqoE, uintLN6iV6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveA1Bzbsy = await Revive.new({from: accounts[3]});
		const addressJxoAnOU = accounts[1]
		const bytejhBBMyQ = "0x1e091b1a04101a07191d0f03041b110c011b17121f1d1f020a080413080f0506"
		const addressSjHINpn = accounts[5]
		const uintqn5MYiM = BigInt("1589")
		const byteg0qXXkT = "0x1d19071b0f011d0901161a000b1c0316011b0e0b05050d2019131f0f07091f18"
		const uint256ZqWYYof = await ReviveA1Bzbsy.getUnlockableTokens.call(addressJxoAnOU, {from: accounts[2]});
		await ReviveA1Bzbsy.onlyOwner.call({from: accounts[0]});
		const uint256TVnmc2 = await ReviveA1Bzbsy.tokensUnlockable.call(addressSjHINpn, bytejhBBMyQ, {from: accounts[0]});
		const boolKL5isVJ = await ReviveA1Bzbsy.increaseLockAmount.call(byteg0qXXkT, uintqn5MYiM, {from: accounts[2]});

		assert.equal(uint256ZqWYYof, BigInt("0"))
		await expect(ReviveA1Bzbsy.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLK1Fjj = await Revive.new({from: accounts[2]});
		const byterkfKGLa = "0x1c030b11151505020d121f071d1c05191e02011f080e0c15161b1d1e0608131a"
		const addressEOQ3BqO = accounts[4]
		const addressGleYkSq = accounts[1]
		const addressb32zjow = accounts[5]
		const uintnK13wbG = BigInt("1757")
		const addressTsWWdqP = accounts[3]
		const addressJANYcl5 = accounts[2]
		const addressS9ORJpT = accounts[2]
		const uintEzl1Nlg = BigInt("669")
		const addressS54ril = accounts[2]
		const uint256fpNrZDu = await ReviveWLK1Fjj.tokensLocked.call(addressEOQ3BqO, byterkfKGLa, {from: accounts[3]});
		const uint256iWWege6 = await ReviveWLK1Fjj.allowance.call(addressb32zjow, addressGleYkSq, {from: "0x0000000000000000000000000000000000000001"});
		const booluyLGTx0 = await ReviveWLK1Fjj.transferFrom.call(addressJANYcl5, addressTsWWdqP, uintnK13wbG, {from: accounts[2]});
		const uint256Uwf13On = await ReviveWLK1Fjj.getUnlockableTokens.call(addressS9ORJpT, {from: accounts[4]});
		const booldqLIB48 = await ReviveWLK1Fjj.transfer.call(addressS54ril, uintEzl1Nlg, {from: accounts[2]});

		assert.equal(uint256fpNrZDu, BigInt("0"))
		assert.equal(uint256iWWege6, BigInt("0"))
		await expect(ReviveWLK1Fjj.transferFrom.call(addressJANYcl5, addressTsWWdqP, uintnK13wbG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uinthWU6Cm = BigInt("1500")
		const addressNyJgYk = accounts[4]
		const uintQEC0kII = BigInt("1873")
		const bytePB6lrkU = "0x1f18140c081710030c001304131c0d020e09130305071c101d16111003031606"
		const boolaujf2iv = await ReviveadB0OsV.approve.call(addressNyJgYk, uinthWU6Cm, {from: accounts[0]});
		const boolDK1PgME = await ReviveadB0OsV.increaseLockAmount.call(bytePB6lrkU, uintQEC0kII, {from: accounts[4]});
		await ReviveadB0OsV.onlyOwner.call({from: accounts[3]});

		assert.equal(boolaujf2iv, true)
		await expect(ReviveadB0OsV.increaseLockAmount.call(bytePB6lrkU, uintQEC0kII, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWLK1Fjj = await Revive.new({from: accounts[2]});
		const byteIvtdiIf = "0x1cfffffffe0b11151505020d121f071d1c05191e02011f080e0c15161b1d1e0608131a"
		const addressAJ79Ts = accounts[4]
		const addressx61nWW = accounts[1]
		const addressjGroCXf = accounts[5]
		const uintQXyptiz = BigInt("486")
		const uintrwlE5Bo = BigInt("1381")
		const byteYGYhlW = "0x0a0416140f1a041d0a141207121e1f1f1a200006070a180120181b18180e171e"
		const uintRSaVok8 = BigInt("1390")
		const addressaOosXMh = accounts[3]
		const uintvmDNOmS = BigInt("135")
		const bytegy49pxp = "0x071e0c0b1a1b1a0611191704021b1b080e0a0401101f1903091c1b020f09180e"
		const uintffWpvuP = BigInt("1757")
		const addressM8fFOvT = accounts[3]
		const addressOLnSuM6 = accounts[2]
		const addressr4yk1S6 = accounts[2]
		const uintFn5Gwrd = BigInt("669")
		const addressM53uoYf = accounts[2]
		const uint256fpNrZDu = await ReviveWLK1Fjj.tokensLocked.call(addressAJ79Ts, byteIvtdiIf, {from: accounts[3]});
		await ReviveWLK1Fjj.onlyOwner.call({from: accounts[0]});
		const uint256iWWege6 = await ReviveWLK1Fjj.allowance.call(addressjGroCXf, addressx61nWW, {from: "0x0000000000000000000000000000000000000001"});
		const boolI0wBYj = await ReviveWLK1Fjj.lock.call(byteYGYhlW, uintrwlE5Bo, uintQXyptiz, {from: accounts[3]});
		const addressxDFqULH = await ReviveWLK1Fjj.recoverERC20.call(addressaOosXMh, uintRSaVok8, {from: accounts[0]});
		const booldmG3fOe = await ReviveWLK1Fjj.extendLock.call(bytegy49pxp, uintvmDNOmS, {from: accounts[2]});
		const booluyLGTx0 = await ReviveWLK1Fjj.transferFrom.call(addressOLnSuM6, addressM8fFOvT, uintffWpvuP, {from: accounts[2]});
		const uint256Uwf13On = await ReviveWLK1Fjj.getUnlockableTokens.call(addressr4yk1S6, {from: accounts[4]});
		const booldqLIB48 = await ReviveWLK1Fjj.transfer.call(addressM53uoYf, uintFn5Gwrd, {from: accounts[2]});

		await expect(ReviveWLK1Fjj.tokensLocked.call(addressAJ79Ts, byteIvtdiIf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const addressc3bg1ZF = accounts[3]
		const bytergazjA = "0x081c07071d160e01140b1f160d040f07070b0f150d010c101a1e160a02170003"
		const addressnXxyu5Z = accounts[3]
		const uintws0ON6Z = BigInt("1428")
		const uintTzc45A = BigInt("380")
		const byteQBWWyl = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181cfffffffd100016"
		const addressYa4kjMh = await ReviveN1XHCp.owner.call({from: accounts[1]});
		const addresskiQOSuF = await ReviveN1XHCp.owner.call({from: accounts[0]});
		const uint256Y0mazaP = await ReviveN1XHCp.balanceOf.call(addressc3bg1ZF, {from: accounts[3]});
		const uint256Ngwg7qU = await ReviveN1XHCp.tokensUnlockable.call(addressnXxyu5Z, bytergazjA, {from: accounts[2]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(byteQBWWyl, uintTzc45A, uintws0ON6Z, {from: accounts[0]});

		assert.equal(addressYa4kjMh, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		assert.equal(addresskiQOSuF, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		assert.equal(uint256Ngwg7qU, BigInt("0"))
		assert.equal(uint256Y0mazaP, BigInt("0"))
		await expect(ReviveN1XHCp.lock.call(byteQBWWyl, uintTzc45A, uintws0ON6Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintQ4iJrvL = BigInt("832")
		const byteusLhitG = "0x1117150d0602110c061006090f190f05161119181e041b040f0b0d0d1b080420"
		const addressfJURhQg = accounts[4]
		const uintmdj1u8L = BigInt("1161")
		const uintXMBG77w = BigInt("980")
		const byteyj04CDR = "0x0405060d1c10011e200a18021b1810051e0c16021e0b08100f121b081906150c"
		const byteq7wDy41 = "0x081c07071d160e01140b1f160d040f07070b0f150d010c101a1e160a02170003"
		const addressJNO3q0L = accounts[3]
		const uintwVf8eIi = BigInt("1428")
		const uintI9Lxi1d = BigInt("365")
		const byteQvMtPZw = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181c01100016"
		const addresskiQOSuF = await ReviveN1XHCp.owner.call({from: accounts[0]});
		const uint256iDcc9pr = await ReviveN1XHCp.tokensLockedAtTime.call(addressfJURhQg, byteusLhitG, uintQ4iJrvL, {from: accounts[3]});
		const boolBcBpJEW = await ReviveN1XHCp.lock.call(byteyj04CDR, uintXMBG77w, uintmdj1u8L, {from: accounts[2]});
		const uint256Ngwg7qU = await ReviveN1XHCp.tokensUnlockable.call(addressJNO3q0L, byteq7wDy41, {from: accounts[2]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(byteQvMtPZw, uintI9Lxi1d, uintwVf8eIi, {from: accounts[0]});

		assert.equal(addresskiQOSuF, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		assert.equal(uint256iDcc9pr, BigInt("0"))
		await expect(ReviveN1XHCp.lock.call(byteyj04CDR, uintXMBG77w, uintmdj1u8L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSXSMqHB = await Revive.new({from: accounts[4]});
		const uint8IQSn7 = BigInt("640")
		const addressZPzycN6 = accounts[0]
		const addressXlbHbJi = accounts[2]
		const uintqXPvfvg = BigInt("434")
		const uint4lLUDm = BigInt("1034")
		const byteSF0mbG4 = "0x0306181f141e0f10030b0017151d03080e061d0f020e1f0a02010d20051c0717"
		const addressRFayF9 = accounts[3]
		const boolaFlxLG8 = await ReviveSXSMqHB.decreaseAllowance.call(addressZPzycN6, uint8IQSn7, {from: accounts[1]});
		const addressYSINeh4 = await ReviveSXSMqHB.transferOwnership.call(addressXlbHbJi, {from: accounts[1]});
		const boolTNGK98k = await ReviveSXSMqHB.transferWithLock.call(addressRFayF9, byteSF0mbG4, uint4lLUDm, uintqXPvfvg, {from: accounts[5]});

		await expect(ReviveSXSMqHB.decreaseAllowance.call(addressZPzycN6, uint8IQSn7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintbO1WJoc = BigInt("832")
		const bytemeM88Lb = "0x1117150d0602110c061006090f190f05161119181e041b040f0b0d0d1b080420"
		const addressKhnkKRs = accounts[4]
		const uintzKDLpCn = BigInt("112")
		const uinty1DJoIa = BigInt("1103")
		const byteXphzGQH = "0x04131c170c18181a1f0a0b18041d021d18030f01040c030220201c1d13010106"
		const addressfYxglM3 = accounts[2]
		const uintZZLIGz = BigInt("1286")
		const uintvJIvrcb = BigInt("980")
		const byteFiYPIXI = "0x0405060d1c10011e200a18021b1810051e0c16021e0b08100f121b081906150c"
		const byteXgVkbD = "0x081c07071d160e01140b1f160d040f07070b0f150d010c101a1e160a02170003"
		const addressOlx9nRo = accounts[3]
		const uintM0qJZK = BigInt("1428")
		const uinttXyBeOg = BigInt("365")
		const bytelfjkunC = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181c01100016"
		const addresskiQOSuF = await ReviveN1XHCp.owner.call({from: accounts[0]});
		const uint256iDcc9pr = await ReviveN1XHCp.tokensLockedAtTime.call(addressKhnkKRs, bytemeM88Lb, uintbO1WJoc, {from: accounts[3]});
		const boolz3qnigl = await ReviveN1XHCp.transferWithLock.call(addressfYxglM3, byteXphzGQH, uinty1DJoIa, uintzKDLpCn, {from: accounts[0]});
		const boolBcBpJEW = await ReviveN1XHCp.lock.call(byteFiYPIXI, uintvJIvrcb, uintZZLIGz, {from: accounts[2]});
		const uint256Ngwg7qU = await ReviveN1XHCp.tokensUnlockable.call(addressOlx9nRo, byteXgVkbD, {from: accounts[2]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(bytelfjkunC, uinttXyBeOg, uintM0qJZK, {from: accounts[0]});

		assert.equal(addresskiQOSuF, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		assert.equal(uint256iDcc9pr, BigInt("0"))
		await expect(ReviveN1XHCp.transferWithLock.call(addressfYxglM3, byteXphzGQH, uinty1DJoIa, uintzKDLpCn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenXiLGat = await Revive.new({from: accounts[1]});
		const addressF4IteP7 = accounts[2]
		const addressHlAo3jg = accounts[0]
		const uintmcI9tMM = BigInt("1498")
		const byteR5Jco7 = "0x120e000109190e0d03100e1c081a190a1509121317031707160e02000a080111"
		const addressqCHaw4m = accounts[0]
		const addressQvAoLE = accounts[3]
		const addressNbvHUvx = accounts[0]
		const uint256GJg56PS = await RevivenXiLGat.allowance.call(addressHlAo3jg, addressF4IteP7, {from: accounts[4]});
		const uint2565Xe1NU = await RevivenXiLGat.tokensLockedAtTime.call(addressqCHaw4m, byteR5Jco7, uintmcI9tMM, {from: accounts[3]});
		const boolDPqyo5l = await RevivenXiLGat.isOwner.call({from: accounts[0]});
		const uint256lWvEM39 = await RevivenXiLGat.totalBalanceOf.call(addressQvAoLE, {from: accounts[3]});
		const uint256Cr7BMIE = await RevivenXiLGat.balanceOf.call(addressNbvHUvx, {from: accounts[3]});

		assert.equal(boolDPqyo5l, false)
		assert.equal(uint2565Xe1NU, BigInt("0"))
		assert.equal(uint256Cr7BMIE, BigInt("0"))
		assert.equal(uint256GJg56PS, BigInt("0"))
		assert.equal(uint256lWvEM39, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveF8BVTXQ = await Revive.new({from: accounts[2]});
		const addresspqL9o6E = "0x0000000000000000000000000000000000000001"
		const uint7mTB9v = BigInt("940")
		const byteHTpUQh = "0x101a1c161c170217111b03020f1e131514191f081a091617100b1b03151b191c"
		const addressV8TXpto = accounts[1]
		const uintLJkIav4 = BigInt("751")
		const uinto7sVKbk = BigInt("864")
		const byteri1vuB1 = "0x0e07150102150b121a151519101f0e1501000106070b0f1405051c1306050620"
		const addressRZ3LkbT = accounts[4]
		const addressdaJ6Arl = accounts[3]
		const uintur2RagE = BigInt("1440")
		const uintqSoMdP5 = BigInt("1305")
		const byteGJjMc7J = "0x110e040f11130f110d091f1e091c1109111f1c1a03160f0a1b161c140200131a"
		const uint256smALVrX = await ReviveF8BVTXQ.balanceOf.call(addresspqL9o6E, {from: accounts[0]});
		const uint256jI9iM4q = await ReviveF8BVTXQ.tokensLockedAtTime.call(addressV8TXpto, byteHTpUQh, uint7mTB9v, {from: accounts[0]});
		const uint256dfZf4ec = await ReviveF8BVTXQ.recoverERC20.call(uintLJkIav4, {from: accounts[4]});
		const uint256GvO2s0Q = await ReviveF8BVTXQ.tokensLockedAtTime.call(addressRZ3LkbT, byteri1vuB1, uinto7sVKbk, {from: "0x0000000000000000000000000000000000000001"});
		const addressY06Cvt = await ReviveF8BVTXQ.owner.call({from: accounts[0]});
		const uint256vIqtZyv = await ReviveF8BVTXQ.getUnlockableTokens.call(addressdaJ6Arl, {from: accounts[4]});
		const boolJG5CBi = await ReviveF8BVTXQ.lock.call(byteGJjMc7J, uintqSoMdP5, uintur2RagE, {from: accounts[5]});

		assert.equal(uint256jI9iM4q, BigInt("0"))
		assert.equal(uint256smALVrX, BigInt("0"))
		await expect(ReviveF8BVTXQ.recoverERC20.call(uintLJkIav4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintFy7VaTL = BigInt("1500")
		const addressHlgxe4J = accounts[5]
		const uintnI2LZM = BigInt("826")
		const addressDQzPkVb = accounts[1]
		const boolaujf2iv = await ReviveadB0OsV.approve.call(addressHlgxe4J, uintFy7VaTL, {from: accounts[0]});
		const addressLl8MhOo = await ReviveadB0OsV.recoverERC20.call(addressDQzPkVb, uintnI2LZM, {from: accounts[2]});

		assert.equal(boolaujf2iv, true)
		await expect(ReviveadB0OsV.recoverERC20.call(addressDQzPkVb, uintnI2LZM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uints83aSXB = BigInt("1798")
		const byteCA082IF = "0x19151d160003150214050e0009060c1b0e1207101815020512050b1a1910070f"
		const addressAKFINKD = accounts[1]
		const uintF2gfYZL = BigInt("1243")
		const addressOuIdu4N = accounts[4]
		const uintJjPHpac = BigInt("1507")
		const addressy8mvTsJ = accounts[4]
		const addressqtUUfqz = accounts[3]
		const uintDoxf7La = BigInt("130")
		const uintCNUtUY = BigInt("742")
		const byte8JhA00 = "0x1d0510201203130e0015010e13191f110209051e1902092004200c0120091f12"
		const addressMbGuzYk = accounts[4]
		const uint256On3FOgu = await ReviveadB0OsV.tokensLockedAtTime.call(addressAKFINKD, byteCA082IF, uints83aSXB, {from: accounts[1]});
		const bool93s2uT = await ReviveadB0OsV.transfer.call(addressOuIdu4N, uintF2gfYZL, {from: accounts[2]});
		const boolaujf2iv = await ReviveadB0OsV.approve.call(addressy8mvTsJ, uintJjPHpac, {from: accounts[0]});
		const uint256PqEM9Kn = await ReviveadB0OsV.unlock.call(addressqtUUfqz, {from: accounts[0]});
		const boolMhXHQx2 = await ReviveadB0OsV.transferWithLock.call(addressMbGuzYk, byte8JhA00, uintCNUtUY, uintDoxf7La, {from: accounts[0]});
		await ReviveadB0OsV.renounceOwnership.call({from: accounts[4]});

		assert.equal(bool93s2uT, true)
		assert.equal(boolaujf2iv, true)
		assert.equal(uint256On3FOgu, BigInt("0"))
		assert.equal(uint256PqEM9Kn, BigInt("0"))
		await expect(ReviveadB0OsV.transferWithLock.call(addressMbGuzYk, byte8JhA00, uintCNUtUY, uintDoxf7La, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintgTRQPv = BigInt("1798")
		const byteL3AmEGw = "0x19151d160003150214050e0009060c1b0e1207101815020512050b1a1910070f"
		const addressU5V4f8O = accounts[1]
		const uintQplRxp = BigInt("1243")
		const addressyhr0xIq = accounts[4]
		const uint4Y1hGv = BigInt("1507")
		const addressrQGsh4i = accounts[4]
		const addressbjT6Sfh = accounts[4]
		const uintPCBuYOi = BigInt("130")
		const uintwmcPGEc = BigInt("742")
		const byteJmRJqs1 = "0x1d0510201203130e0015010e13191f110209051e1902092004200c0120091f12"
		const addressXgPEA2s = accounts[4]
		const uint256On3FOgu = await ReviveadB0OsV.tokensLockedAtTime.call(addressU5V4f8O, byteL3AmEGw, uintgTRQPv, {from: accounts[1]});
		const bool93s2uT = await ReviveadB0OsV.transfer.call(addressyhr0xIq, uintQplRxp, {from: accounts[2]});
		const boolaujf2iv = await ReviveadB0OsV.approve.call(addressrQGsh4i, uint4Y1hGv, {from: accounts[0]});
		const uint256cdqmWva = await ReviveadB0OsV.totalSupply.call({from: accounts[4]});
		const uint256PqEM9Kn = await ReviveadB0OsV.unlock.call(addressbjT6Sfh, {from: accounts[0]});
		await ReviveadB0OsV.onlyOwner.call({from: accounts[0]});
		const boolMhXHQx2 = await ReviveadB0OsV.transferWithLock.call(addressXgPEA2s, byteJmRJqs1, uintwmcPGEc, uintPCBuYOi, {from: accounts[0]});

		assert.equal(bool93s2uT, true)
		assert.equal(boolaujf2iv, true)
		assert.equal(uint256On3FOgu, BigInt("0"))
		assert.equal(uint256PqEM9Kn, BigInt("0"))
		assert.equal(uint256cdqmWva, BigInt("3000000000000000000000000000"))
		await expect(ReviveadB0OsV.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexo0JVsE = await Revive.new({from: accounts[5]});
		const byteiDovg1q = "0x0e1f0f19071f1b18201b0b010b1414000c11141d071008120b040c02090d1e1d"
		const addresswJ1f2Mf = accounts[4]
		const uintioiOLK1 = BigInt("189")
		const uintkhvJcOw = BigInt("31")
		const addressz1PPqRM = accounts[2]
		const uintdKbDDtw = BigInt("1696")
		const addressLpPFBMK = accounts[4]
		const addressuJglDy6 = "0x0000000000000000000000000000000000000001"
		const uintCP6ZGsx = BigInt("162")
		const uintILNTJRQ = BigInt("1682")
		const bytejpGvKUm = "0x021b1107161b0d040613161116161b080b01100d0e1e0a121905061618091b20"
		const uint256PixfUab = await Revivexo0JVsE.tokensUnlockable.call(addresswJ1f2Mf, byteiDovg1q, {from: accounts[2]});
		const uint256w1NtAdL = await Revivexo0JVsE.recoverERC20.call(uintioiOLK1, {from: accounts[2]});
		const boolsknf3uc = await Revivexo0JVsE.transfer.call(addressz1PPqRM, uintkhvJcOw, {from: accounts[1]});
		const boolZuK25E = await Revivexo0JVsE.transferFrom.call(addressuJglDy6, addressLpPFBMK, uintdKbDDtw, {from: accounts[3]});
		const boolO8mEW0W = await Revivexo0JVsE.lock.call(bytejpGvKUm, uintILNTJRQ, uintCP6ZGsx, {from: accounts[1]});

		assert.equal(uint256PixfUab, BigInt("0"))
		await expect(Revivexo0JVsE.recoverERC20.call(uintioiOLK1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUx8xk0s = await Revive.new({from: accounts[5]});
		const uintzycGwYg = BigInt("1324")
		const addressDmFnilt = await ReviveUx8xk0s.owner.call({from: accounts[1]});
		const uint256N813QYl = await ReviveUx8xk0s.recoverERC20.call(uintzycGwYg, {from: accounts[2]});
		const addressbA7M6ng = await ReviveUx8xk0s.owner.call({from: accounts[2]});

		assert.equal(addressDmFnilt, 0x56d728313EA3c8431c5D08cF51D7058d18998770)
		await expect(ReviveUx8xk0s.recoverERC20.call(uintzycGwYg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintpd5Hf62 = BigInt("1428")
		const uintDkNcehY = BigInt("1704")
		const byteR4fLEkg = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181c01100016"
		await ReviveN1XHCp.renounceOwnership.call({from: accounts[1]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(byteR4fLEkg, uintDkNcehY, uintpd5Hf62, {from: accounts[0]});

		await expect(ReviveN1XHCp.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintyOfNLcD = BigInt("1798")
		const byteAfb4CMw = "0x19151d160003150214050e0009060c1b0e1207101815020512050b1a1910070f"
		const addressMoQdACF = accounts[1]
		const uintycqhcZp = BigInt("375")
		const addressBd9JDyD = accounts[3]
		const uintAWk2p10 = BigInt("130")
		const uintCIkB9W = BigInt("742")
		const bytew8PMwhH = "0x1d0510201203130e0015010e13191f110209051e1902092004200c0120091f12"
		const addressVNQdbbI = accounts[5]
		const uint256On3FOgu = await ReviveadB0OsV.tokensLockedAtTime.call(addressMoQdACF, byteAfb4CMw, uintyOfNLcD, {from: accounts[1]});
		const uint256wQcWmAo = await ReviveadB0OsV.recoverERC20.call(uintycqhcZp, {from: accounts[4]});
		const uint256TsBuHSs = await ReviveadB0OsV.unlock.call(addressBd9JDyD, {from: accounts[4]});
		const boolMhXHQx2 = await ReviveadB0OsV.transferWithLock.call(addressVNQdbbI, bytew8PMwhH, uintCIkB9W, uintAWk2p10, {from: accounts[0]});

		assert.equal(uint256On3FOgu, BigInt("0"))
		await expect(ReviveadB0OsV.recoverERC20.call(uintycqhcZp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const addressmfoWEHY = accounts[5]
		const uintM4GNt8R = BigInt("1025")
		const uintnT8T8h7 = BigInt("1428")
		const uinttm7va7x = BigInt("1702")
		const bytedX764UX = "0x09110317071a0302151b1b050c0d0f03090e0e12062006161102181c01100016"
		const uint256WTrUC7M = await ReviveN1XHCp.unlock.call(addressmfoWEHY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K46Smua = await ReviveN1XHCp.recoverERC20.call(uintM4GNt8R, {from: accounts[1]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(bytedX764UX, uinttm7va7x, uintnT8T8h7, {from: accounts[0]});

		assert.equal(uint256WTrUC7M, BigInt("0"))
		await expect(ReviveN1XHCp.recoverERC20.call(uintM4GNt8R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexo2aFCe = await Revive.new({from: accounts[4]});
		const addressxRXUYux = accounts[5]
		const addresssblA3eN = "0x00000000000000000000000000000000000000-1"
		const uintryOMA5Y = BigInt("852")
		const bytesfLiQeC = "0x080c11011c12180d0e1900060f031c0c151513170c1c120820001918100f131f"
		const addressQk6rP4N = accounts[2]
		const uintKzjT0Kx = BigInt("759")
		const byteUYCQI0 = "0x0f10101b11130f19110906191a07141d0c0b0504030c042010180e060c191110"
		const addressUgffcT5 = accounts[4]
		const uintV2yGRV = BigInt("969")
		const uintJ1gview = BigInt("1434")
		const byteALMora = "0x0f11050b140a131f15111007050b1c1e15051a191b10192001140e0507071b13"
		const addressUUxcu8 = accounts[1]
		const uintsJ5CDzJ = BigInt("1013")
		const addressL2WGO1O = accounts[5]
		const addresskLhCGjL = accounts[4]
		const uint256YBENGEJ = await Revivexo2aFCe.unlock.call(addressxRXUYux, {from: accounts[1]});
		const uint256gQFXSH = await Revivexo2aFCe.totalBalanceOf.call(addresssblA3eN, {from: accounts[1]});
		const uint256yqvt7Hd = await Revivexo2aFCe.tokensLockedAtTime.call(addressQk6rP4N, bytesfLiQeC, uintryOMA5Y, {from: accounts[3]});
		const uint256N7cF2Hs = await Revivexo2aFCe.tokensLockedAtTime.call(addressUgffcT5, byteUYCQI0, uintKzjT0Kx, {from: accounts[3]});
		const boolyUlCxxU = await Revivexo2aFCe.transferWithLock.call(addressUUxcu8, byteALMora, uintJ1gview, uintV2yGRV, {from: accounts[0]});
		const booltiJNpe5 = await Revivexo2aFCe.increaseAllowance.call(addressL2WGO1O, uintsJ5CDzJ, {from: accounts[1]});
		await Revivexo2aFCe.onlyOwner.call({from: accounts[4]});
		const uint256BMAiXlO = await Revivexo2aFCe.unlock.call(addresskLhCGjL, {from: accounts[3]});

		assert.equal(uint256YBENGEJ, BigInt("0"))
		await expect(Revivexo2aFCe.totalBalanceOf.call(addresssblA3eN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveA1Bzbsy = await Revive.new({from: accounts[3]});
		const uintKXPvfsY = BigInt("1781")
		const addressX0eZdAf = accounts[3]
		const uintubHXOyb = BigInt("1424")
		const addressJ455PBo = "0x0000000000000000000000000000000000000001"
		const uint256x7bLhS0 = await ReviveA1Bzbsy.recoverERC20.call(uintKXPvfsY, {from: accounts[4]});
		const uint256ZqWYYof = await ReviveA1Bzbsy.getUnlockableTokens.call(addressX0eZdAf, {from: accounts[2]});
		const boolHJMYD8o = await ReviveA1Bzbsy.transfer.call(addressJ455PBo, uintubHXOyb, {from: accounts[2]});

		await expect(ReviveA1Bzbsy.recoverERC20.call(uintKXPvfsY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const addressIP3RxEe = accounts[3]
		const addressUYpDoz3 = accounts[1]
		const bytemxJWSyV = "0x0d0704060c1513031411110e071d171d0916200d110f1b0900031210161b0103"
		const addressclNyNIp = accounts[3]
		const uintKWi34Ch = BigInt("681")
		const uintK9uOxQe = BigInt("1382")
		const byteUlJEWqN = "0x1d0307010d17201c12110f121b160c1604040d1b031e061914160c1d050f1708"
		const addressTFIvAR = accounts[2]
		const uint5ad4eB = BigInt("1443")
		const uintaxgxWcz = BigInt("1692")
		const byteAgSNhc3 = "0x09110317071a0302151b1b050c0d0f03090e0e120620061611ffffffff181c01100016"
		const uint256jUUku2V = await ReviveN1XHCp.allowance.call(addressUYpDoz3, addressIP3RxEe, {from: accounts[1]});
		const uint256nSx5hqI = await ReviveN1XHCp.tokensLocked.call(addressclNyNIp, bytemxJWSyV, {from: accounts[1]});
		const boolG23jUl = await ReviveN1XHCp.lock.call(byteUlJEWqN, uintK9uOxQe, uintKWi34Ch, {from: accounts[1]});
		const uint256QXNOWX8 = await ReviveN1XHCp.unlock.call(addressTFIvAR, {from: accounts[1]});
		const boolSN20AoP = await ReviveN1XHCp.lock.call(byteAgSNhc3, uintaxgxWcz, uint5ad4eB, {from: accounts[0]});

		assert.equal(boolG23jUl, true)
		assert.equal(uint256QXNOWX8, BigInt("0"))
		assert.equal(uint256jUUku2V, BigInt("0"))
		assert.equal(uint256nSx5hqI, BigInt("0"))
		await expect(ReviveN1XHCp.lock.call(byteAgSNhc3, uintaxgxWcz, uint5ad4eB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintuZ2DUi = BigInt("201")
		const byteJfylpFb = "0x0f1b091f06191509181d080118201e0f0f11081e0818121508040c081d091406"
		const addresscZu0y1Q = accounts[1]
		const uintpn3WUk4 = BigInt("1005")
		const addressADrW09u = accounts[3]
		const uint256LuvKFe = await ReviveadB0OsV.tokensLockedAtTime.call(addresscZu0y1Q, byteJfylpFb, uintuZ2DUi, {from: accounts[2]});
		const uint256chPESxo = await ReviveadB0OsV.recoverERC20.call(uintpn3WUk4, {from: accounts[4]});
		const uint256SRltJC9 = await ReviveadB0OsV.unlock.call(addressADrW09u, {from: accounts[2]});
		await ReviveadB0OsV.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LuvKFe, BigInt("0"))
		await expect(ReviveadB0OsV.recoverERC20.call(uintpn3WUk4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintqgJlfx = BigInt("201")
		const bytePTYgsB8 = "0x0f1b091f06191509181d080118201e0f0f11081e0818121508040c081d091406"
		const addressbEuaMkQ = accounts[1]
		const uintrUI17eX = BigInt("972")
		const addresseapfLbs = accounts[3]
		const uint256LuvKFe = await ReviveadB0OsV.tokensLockedAtTime.call(addressbEuaMkQ, bytePTYgsB8, uintqgJlfx, {from: accounts[2]});
		const uint256chPESxo = await ReviveadB0OsV.recoverERC20.call(uintrUI17eX, {from: accounts[4]});
		const uint256SRltJC9 = await ReviveadB0OsV.unlock.call(addresseapfLbs, {from: accounts[2]});
		await ReviveadB0OsV.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LuvKFe, BigInt("0"))
		await expect(ReviveadB0OsV.recoverERC20.call(uintrUI17eX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintfhkcYyp = BigInt("211")
		const addressQHvvyJP = accounts[6]
		const addressCONzXRv = accounts[4]
		const addressbCOGial = accounts[2]
		const addressAm0K3XP = await ReviveN1XHCp.owner.call({from: accounts[3]});
		const uint256fUxmcuJ = await ReviveN1XHCp.recoverERC20.call(uintfhkcYyp, {from: accounts[4]});
		const uint256WTrUC7M = await ReviveN1XHCp.unlock.call(addressQHvvyJP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mKww0N0 = await ReviveN1XHCp.totalBalanceOf.call(addressCONzXRv, {from: accounts[0]});
		const uint256aI8C5VO = await ReviveN1XHCp.balanceOf.call(addressbCOGial, {from: accounts[1]});

		assert.equal(addressAm0K3XP, 0x5EB3Ac796B791E9a80A064823420eA7af9c1EB44)
		await expect(ReviveN1XHCp.recoverERC20.call(uintfhkcYyp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintaGbqfsp = BigInt("201")
		const bytepqAEOS0 = "0x0f1b091f06191509181d080118201e0f0f11081e0818121508040c081d091406"
		const addressLaVk9x = accounts[1]
		const bytevMSL5r = "0x0a03071d03141c1d1a1107170f1d031b1e080906061b000a130e0f0f0e0f0806"
		const addressOqU8BEt = "0x0000000000000000000000000000000000000001"
		const uint0qjjhj = BigInt("1870")
		const addressbwW2SJE = accounts[3]
		const uint256LuvKFe = await ReviveadB0OsV.tokensLockedAtTime.call(addressLaVk9x, bytepqAEOS0, uintaGbqfsp, {from: accounts[2]});
		const uint256joTr6W = await ReviveadB0OsV.tokensUnlockable.call(addressOqU8BEt, bytevMSL5r, {from: accounts[0]});
		const uint256chPESxo = await ReviveadB0OsV.recoverERC20.call(uint0qjjhj, {from: accounts[4]});
		const uint256SRltJC9 = await ReviveadB0OsV.unlock.call(addressbwW2SJE, {from: accounts[2]});
		await ReviveadB0OsV.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LuvKFe, BigInt("0"))
		assert.equal(uint256joTr6W, BigInt("0"))
		await expect(ReviveadB0OsV.recoverERC20.call(uint0qjjhj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenXiLGat = await Revive.new({from: accounts[1]});
		const addressDyiP4Aa = accounts[2]
		const addresswNiGL5a = accounts[0]
		const uintBQUz097 = BigInt("1930")
		const uintD7atM00 = BigInt("236")
		const byteoLVwffH = "0x1f1f151f1e13031c001811060e150206030302160d1e020812170a191c070519"
		const addressHnCz2Ha = accounts[1]
		const uintQJgAHVl = BigInt("1127")
		const addressU6MFPO1 = accounts[5]
		const addressQ0yZf9v = "0x0000000000000000000000000000000000000001"
		const uints2okddd = BigInt("296")
		const addressijVHrGG = accounts[1]
		const uintyal4y0R = BigInt("1498")
		const byteN1ROJd6 = "0x120e000109190e0d03100e1c081a190a1509121317031707160e02000a080111"
		const addressWoCwxE = accounts[0]
		const addressWCFiAF0 = accounts[2]
		const addressDgSf63U = accounts[3]
		const uintatGVUF9 = BigInt("318")
		const byteI0I7Uy0 = "0x0511190b16120e0f110c1a06130a0b171d050b1f1b161c12040d0e160d160419"
		const addressLmXg3KE = accounts[5]
		const addressSs8HWuQ = accounts[1]
		const addressjQwXXE = accounts[4]
		const uint256GJg56PS = await RevivenXiLGat.allowance.call(addresswNiGL5a, addressDyiP4Aa, {from: accounts[4]});
		const boolHtLQUV3 = await RevivenXiLGat.transferWithLock.call(addressHnCz2Ha, byteoLVwffH, uintD7atM00, uintBQUz097, {from: accounts[1]});
		const uint256x22UzzV = await RevivenXiLGat.recoverERC20.call(uintQJgAHVl, {from: accounts[1]});
		const boolmX2kb6R = await RevivenXiLGat.isOwner.call({from: accounts[4]});
		const uint256hh5OQYa = await RevivenXiLGat.allowance.call(addressQ0yZf9v, addressU6MFPO1, {from: accounts[2]});
		const boolRcHGGQT = await RevivenXiLGat.transfer.call(addressijVHrGG, uints2okddd, {from: accounts[1]});
		const uint2565Xe1NU = await RevivenXiLGat.tokensLockedAtTime.call(addressWoCwxE, byteN1ROJd6, uintyal4y0R, {from: accounts[3]});
		const uint256UIQ2SBA = await RevivenXiLGat.getUnlockableTokens.call(addressWCFiAF0, {from: accounts[2]});
		const uint256lWvEM39 = await RevivenXiLGat.totalBalanceOf.call(addressDgSf63U, {from: accounts[3]});
		const uint256QiN0D0 = await RevivenXiLGat.tokensLockedAtTime.call(addressLmXg3KE, byteI0I7Uy0, uintatGVUF9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Cr7BMIE = await RevivenXiLGat.balanceOf.call(addressSs8HWuQ, {from: accounts[3]});
		const uint256BEPRXgW = await RevivenXiLGat.getUnlockableTokens.call(addressjQwXXE, {from: accounts[2]});

		assert.equal(boolHtLQUV3, true)
		assert.equal(uint256GJg56PS, BigInt("0"))
		await expect(RevivenXiLGat.recoverERC20.call(uintQJgAHVl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const uintL6chZgj = BigInt("1639")
		const addressgexvU0g = accounts[1]
		const uint256LP8C3Et = await ReviveadB0OsV.recoverERC20.call(uintL6chZgj, {from: accounts[4]});
		const uint256pdqlmV = await ReviveadB0OsV.totalBalanceOf.call(addressgexvU0g, {from: accounts[3]});

		await expect(ReviveadB0OsV.recoverERC20.call(uintL6chZgj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveadB0OsV = await Revive.new({from: accounts[2]});
		const addressCWBwtuX = accounts[4]
		const uinttcCJIHo = BigInt("1065")
		const uintTobYHPZ = BigInt("130")
		const uintqxbIoq = BigInt("773")
		const bytetYE3FOz = "0x1d0510201203130e0015010e13191f110209051e1902092004200c0120091f12"
		const addressATPFa65 = accounts[4]
		const uint256DGtY1E = await ReviveadB0OsV.unlock.call(addressCWBwtuX, {from: accounts[1]});
		const uint256RsCTAdC = await ReviveadB0OsV.recoverERC20.call(uinttcCJIHo, {from: accounts[4]});
		const boolMhXHQx2 = await ReviveadB0OsV.transferWithLock.call(addressATPFa65, bytetYE3FOz, uintqxbIoq, uintTobYHPZ, {from: accounts[0]});

		assert.equal(uint256DGtY1E, BigInt("0"))
		await expect(ReviveadB0OsV.recoverERC20.call(uinttcCJIHo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintY2bq1g0 = BigInt("144")
		const byteWM46FKT = "0x1d0418180b1a13161b20141909200a181013160d0915080c1c1503161b1d1601"
		const addressJXKfygE = accounts[3]
		const addressrQksL82 = accounts[2]
		const addressk28hGCG = accounts[5]
		const uint256CwN3Fvk = await ReviveN1XHCp.tokensLockedAtTime.call(addressJXKfygE, byteWM46FKT, uintY2bq1g0, {from: accounts[3]});
		const addressHpDxOZa = await ReviveN1XHCp.transferOwnership.call(addressrQksL82, {from: accounts[1]});
		const uint256C3TyCyj = await ReviveN1XHCp.totalBalanceOf.call(addressk28hGCG, {from: accounts[0]});

		assert.equal(uint256C3TyCyj, BigInt("0"))
		assert.equal(uint256CwN3Fvk, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivenXiLGat = await Revive.new({from: accounts[1]});
		const addressWdrDlen = accounts[2]
		const addressDiNyY5P = accounts[0]
		const addressCsFyLSY = accounts[3]
		const addressoxMEOcv = accounts[2]
		const uintgtyTEYQ = BigInt("1930")
		const uintZHgYVJd = BigInt("236")
		const bytejjuKJGT = "0x1f1f151f1e13031c001811060e150206030302160d1e020812170a191c070519"
		const addressuRP7PKT = accounts[1]
		const addresskZi81U = accounts[5]
		const addressqIvIxx0 = "0x0000000000000000000000000000000000000001"
		const addresspThrGLY = accounts[2]
		const uintLK2F8G5 = BigInt("1419")
		const addressXjamNB9 = accounts[3]
		const uintHyByBxv = BigInt("318")
		const byteTRt53mv = "0x0511190b16120e0f110c1a06130a0b171d050b1f1b161c12040d0e160d160419"
		const addressFEFl9C7 = accounts[5]
		const addressEcsUAUg = accounts[3]
		const addressD7qW3js = accounts[1]
		const addressOE0kHxo = accounts[0]
		const addressVKp584 = accounts[4]
		const uint256GJg56PS = await RevivenXiLGat.allowance.call(addressDiNyY5P, addressWdrDlen, {from: accounts[4]});
		const uint256r7onIzx = await RevivenXiLGat.allowance.call(addressoxMEOcv, addressCsFyLSY, {from: "0x0000000000000000000000000000000000000001"});
		const boolHtLQUV3 = await RevivenXiLGat.transferWithLock.call(addressuRP7PKT, bytejjuKJGT, uintZHgYVJd, uintgtyTEYQ, {from: accounts[1]});
		const boolmX2kb6R = await RevivenXiLGat.isOwner.call({from: accounts[4]});
		const uint256hh5OQYa = await RevivenXiLGat.allowance.call(addressqIvIxx0, addresskZi81U, {from: accounts[2]});
		const uint256UIQ2SBA = await RevivenXiLGat.getUnlockableTokens.call(addresspThrGLY, {from: accounts[2]});
		const uint256L1jG9ox = await RevivenXiLGat.recoverERC20.call(uintLK2F8G5, {from: accounts[4]});
		const uint256lWvEM39 = await RevivenXiLGat.totalBalanceOf.call(addressXjamNB9, {from: accounts[3]});
		const uint256QiN0D0 = await RevivenXiLGat.tokensLockedAtTime.call(addressFEFl9C7, byteTRt53mv, uintHyByBxv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vYGQUFY = await RevivenXiLGat.totalBalanceOf.call(addressEcsUAUg, {from: accounts[1]});
		const uint256fMl1Ul6 = await RevivenXiLGat.unlock.call(addressD7qW3js, {from: accounts[1]});
		const uint256Cr7BMIE = await RevivenXiLGat.balanceOf.call(addressOE0kHxo, {from: accounts[3]});
		const uint256BEPRXgW = await RevivenXiLGat.getUnlockableTokens.call(addressVKp584, {from: accounts[2]});

		assert.equal(boolHtLQUV3, true)
		assert.equal(boolmX2kb6R, false)
		assert.equal(uint256GJg56PS, BigInt("0"))
		assert.equal(uint256UIQ2SBA, BigInt("0"))
		assert.equal(uint256hh5OQYa, BigInt("0"))
		assert.equal(uint256r7onIzx, BigInt("0"))
		await expect(RevivenXiLGat.recoverERC20.call(uintLK2F8G5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveN1XHCp = await Revive.new({from: accounts[1]});
		const uintVU7vv83 = BigInt("911")
		const uintiRd7mBz = BigInt("770")
		const uintwhTxQ5X = BigInt("1618")
		const byteYoHZ03 = "0x18110915040518050503071f170e01070f1c1010030f080702001d05060c0a03"
		const addressG8g0sTf = accounts[5]
		const uint256r1tIv1h = await ReviveN1XHCp.recoverERC20.call(uintVU7vv83, {from: accounts[0]});
		const boolap0RetD = await ReviveN1XHCp.lock.call(byteYoHZ03, uintwhTxQ5X, uintiRd7mBz, {from: accounts[1]});
		await ReviveN1XHCp.onlyOwner.call({from: accounts[2]});
		const uint256WTrUC7M = await ReviveN1XHCp.unlock.call(addressG8g0sTf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveN1XHCp.recoverERC20.call(uintVU7vv83, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})