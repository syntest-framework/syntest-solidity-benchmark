const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgislcYJi7O = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcnlWR0t = BigInt("581")
		const addresspomICHE = accounts[0]
		const addressZHyAtUK = accounts[2]
		const uintE5AgAIs = BigInt("762")
		const addressWhG08F8 = accounts[3]
		const uintCG7rWQM = BigInt("906")
		const uintzRWU7lK = BigInt("1550")
		const addressKBhV2qi = accounts[1]
		const uintle7xl8y = BigInt("1458")
		const addresstM1dC4l = accounts[5]
		const boolHEE8IiV = await LedgislcYJi7O.transferFrom.call(addressZHyAtUK, addresspomICHE, uintcnlWR0t, {from: accounts[3]});
		const boolMwG1BHR = await LedgislcYJi7O.transfer.call(addressWhG08F8, uintE5AgAIs, {from: accounts[4]});
		const uint256C9rDUHe = await LedgislcYJi7O.totalSupply.call({from: accounts[2]});
		const boolHzFWGl = await LedgislcYJi7O.transferWithLock.call(addressKBhV2qi, uintzRWU7lK, uintCG7rWQM, {from: accounts[5]});
		await LedgislcYJi7O.whenNotPaused.call({from: accounts[5]});
		await LedgislcYJi7O.lockState.call(addresstM1dC4l, uintle7xl8y, {from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const LedgisQLoMvZD = await Ledgis.new({from: accounts[4]});
		const addressHBdxlM = accounts[4]
		const uintfk6DBYn = BigInt("2")
		const addressxO4KSi2 = accounts[2]
//		await LedgisQLoMvZD.whenPaused.call({from: accounts[1]});
//		const boolNyxfxee = await LedgisQLoMvZD.isFrozen.call(addressHBdxlM, {from: accounts[1]});
//		const boolOqmSiep = await LedgisQLoMvZD.transfer.call(addressxO4KSi2, uintfk6DBYn, {from: accounts[5]});

		await expect(LedgisQLoMvZD.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNv2JH0n = await Ledgis.new({from: accounts[1]});
		const addressWDnyJwv = accounts[3]
		const addressuYcflp = accounts[3]
		const uintdE7RoT8 = BigInt("1666")
		const uintkbWFtd6 = BigInt("239")
		const address0TEjiE = accounts[3]
		const uintfW565yC = BigInt("60")
		const addresskjiUp4 = accounts[4]
		const uintYKcqn9S = BigInt("365")
		const addressdZifDSc = accounts[3]
//		await LedgisNv2JH0n.pause.call({from: accounts[1]});
//		const uint256ldYyCxm = await LedgisNv2JH0n.allowance.call(addressuYcflp, addressWDnyJwv, {from: accounts[0]});
//		const boolZcRBMG = await LedgisNv2JH0n.transferWithLock.call(address0TEjiE, uintkbWFtd6, uintdE7RoT8, {from: accounts[0]});
//		const boolqkom3zH = await LedgisNv2JH0n.transfer.call(addresskjiUp4, uintfW565yC, {from: accounts[1]});
//		const boolnnNz3B4 = await LedgisNv2JH0n.decreaseAllowance.call(addressdZifDSc, uintYKcqn9S, {from: accounts[3]});

		await expect(LedgisNv2JH0n.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintqXO5xmJ = BigInt("1452")
		const addresslS6DbWt = accounts[3]
		const uintOYO6MUZ = BigInt("1419")
		const addressZXdR7yl = accounts[0]
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addresslS6DbWt, uintqXO5xmJ, {from: accounts[1]});
		const boolfJ03wDs = await Ledgis85i8aW.increaseAllowance.call(addressZXdR7yl, uintOYO6MUZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVppYCE4, true)
		assert.equal(boolfJ03wDs, true)
	});

	it('test for Ledgis', async () => {
		const LedgisKGYxNk = await Ledgis.new({from: accounts[4]});
		const uintMQdnu5U = BigInt("61")
		const uintiSviY0 = BigInt("344")
		const addressGKWzN9w = accounts[4]
		const uintJJEK0l2 = BigInt("1779")
		const addresspNOJnbS = accounts[4]
		const uintGQvQu2I = BigInt("721")
		const addresscT7USZa = accounts[2]
		const uint256DDbb7TL = await LedgisKGYxNk.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressLQn0btQ = await LedgisKGYxNk.lockAfter.call(addressGKWzN9w, uintiSviY0, uintMQdnu5U, {from: accounts[1]});
//		await LedgisKGYxNk.whenNotPaused.call({from: accounts[4]});
//		const boolakHGaW = await LedgisKGYxNk.approve.call(addresspNOJnbS, uintJJEK0l2, {from: accounts[3]});
//		const boolIWqEBFe = await LedgisKGYxNk.decreaseAllowance.call(addresscT7USZa, uintGQvQu2I, {from: accounts[0]});
//		await LedgisKGYxNk.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256DDbb7TL, BigInt("1630229956"))
		await expect(LedgisKGYxNk.lockAfter.call(addressGKWzN9w, uintiSviY0, uintMQdnu5U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const addressuSSvs6u = accounts[4]
		const uintxv1vtT = BigInt("1738")
		const uintIFjX36O = BigInt("1147")
		const addressp9ZBV2u = accounts[0]
		const uintgiWD5cH = BigInt("1493")
		const addressTrp3061 = accounts[5]
		const uintBdNBMcH = BigInt("1177")
		const addressqFB0BAG = accounts[2]
		const addressgGG8iIr = accounts[0]
		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressuSSvs6u, {from: accounts[4]});
//		const booliL8xyKG = await LedgisDwldHWW.transferWithLockAfter.call(addressp9ZBV2u, uintIFjX36O, uintxv1vtT, {from: accounts[3]});
//		const addressvxZy7XI = await LedgisDwldHWW.burn.call(addressTrp3061, uintgiWD5cH, {from: accounts[1]});
//		const addressMgxKGAo = await LedgisDwldHWW.unlock.call(addressqFB0BAG, uintBdNBMcH, {from: accounts[2]});
//		const uint256ezCeeEX = await LedgisDwldHWW.balanceOf.call(addressgGG8iIr, {from: accounts[3]});

		assert.equal(uint256tyDtGnj, BigInt("0"))
		await expect(LedgisDwldHWW.transferWithLockAfter.call(addressp9ZBV2u, uintIFjX36O, uintxv1vtT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB81v4Ij = await Ledgis.new({from: accounts[4]});
		const addressoYhAmp = accounts[5]
		const addressGVJow7o = accounts[0]
		const uintX9C8dwY = BigInt("1799")
		const addresssoqlun1 = accounts[3]
		const uintGTB4AGE = BigInt("757")
		const addressDDWhkEo = accounts[5]
		const uintz5FzoD3 = BigInt("791")
		const addressmYkGvez = accounts[0]
		const addressblFCCRf = accounts[1]
		const uint256uvV0bBX = await LedgisB81v4Ij.allowance.call(addressGVJow7o, addressoYhAmp, {from: accounts[1]});
//		const boolHoH8V8V = await LedgisB81v4Ij.transfer.call(addresssoqlun1, uintX9C8dwY, {from: accounts[5]});
//		const boolc2lXtuX = await LedgisB81v4Ij.increaseAllowance.call(addressDDWhkEo, uintGTB4AGE, {from: accounts[2]});
//		const boolYzIhvX = await LedgisB81v4Ij.approve.call(addressmYkGvez, uintz5FzoD3, {from: accounts[4]});
//		const addressBsnetSu = await LedgisB81v4Ij.transferOwnership.call(addressblFCCRf, {from: accounts[1]});

		assert.equal(uint256uvV0bBX, BigInt("0"))
		await expect(LedgisB81v4Ij.transfer.call(addresssoqlun1, uintX9C8dwY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintu8KdciP = BigInt("9")
		const addressblL3dGY = accounts[4]
		const uintCG5rKVw = BigInt("1540")
		const addressxHZlezG = accounts[1]
		const uintInq5PEV = BigInt("1452")
		const addresscxQgB4e = accounts[3]
//		const boolYmMT5PY = await Ledgis85i8aW.decreaseAllowance.call(addressblL3dGY, uintu8KdciP, {from: accounts[4]});
//		const addressebTe0tG = await Ledgis85i8aW.unlock.call(addressxHZlezG, uintCG5rKVw, {from: accounts[4]});
//		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addresscxQgB4e, uintInq5PEV, {from: accounts[1]});

		await expect(Ledgis85i8aW.decreaseAllowance.call(addressblL3dGY, uintu8KdciP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintSjFIEfX = BigInt("1454")
		const addressrCH1cYB = accounts[3]
		const uintjgukTVL = BigInt("1236")
		const addressfKqQWy5 = accounts[0]
		const addressVwVjNHL = accounts[0]
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressrCH1cYB, uintSjFIEfX, {from: accounts[1]});
//		const booluChrFuu = await Ledgis85i8aW.transferFrom.call(addressVwVjNHL, addressfKqQWy5, uintjgukTVL, {from: accounts[4]});
//		const uint256AzNoZF8 = await Ledgis85i8aW.totalSupply.call({from: accounts[0]});

		assert.equal(boolVppYCE4, true)
		await expect(Ledgis85i8aW.transferFrom.call(addressVwVjNHL, addressfKqQWy5, uintjgukTVL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintOgai3G3 = BigInt("1569")
		const addressdhVsdEX = "0x0000000000000000000000000000000000000001"
		const uintKUbxS0F = BigInt("1157")
		const uintSGKJZXD = BigInt("558")
		const addressYBlZj15 = accounts[1]
		const address27iycV = accounts[1]
		const uintCznE9n = BigInt("1501")
		const addressoApCrAR = accounts[3]
		const uint256YIYPIT5 = await Ledgis85i8aW.totalSupply.call({from: accounts[1]});
//		const boolkItw416 = await Ledgis85i8aW.transfer.call(addressdhVsdEX, uintOgai3G3, {from: accounts[3]});
//		const boolYml3jY = await Ledgis85i8aW.transferWithLock.call(addressYBlZj15, uintSGKJZXD, uintKUbxS0F, {from: accounts[0]});
//		const uint256CaJYvq6 = await Ledgis85i8aW.lockCount.call(address27iycV, {from: accounts[0]});
//		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressoApCrAR, uintCznE9n, {from: accounts[1]});
//		await Ledgis85i8aW.whenPaused.call({from: accounts[5]});

		assert.equal(uint256YIYPIT5, BigInt("10000000000000"))
		await expect(Ledgis85i8aW.transfer.call(addressdhVsdEX, uintOgai3G3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa8bdefR = await Ledgis.new({from: accounts[3]});
		const addressX3LbuNY = accounts[0]
		const uintltmf5hL = BigInt("311")
		const addressju093tX = accounts[2]
		const uintFxGmyaZ = BigInt("542")
		const addressDAALkd4 = accounts[0]
		const uint256ZG70bji = await Ledgisa8bdefR.lockCount.call(addressX3LbuNY, {from: accounts[4]});
//		await Ledgisa8bdefR.whenPaused.call({from: accounts[4]});
//		const bool6vwx0Q = await Ledgisa8bdefR.transfer.call(addressju093tX, uintltmf5hL, {from: accounts[1]});
//		const boolKfvMN53 = await Ledgisa8bdefR.decreaseAllowance.call(addressDAALkd4, uintFxGmyaZ, {from: accounts[1]});

		assert.equal(uint256ZG70bji, BigInt("0"))
		await expect(Ledgisa8bdefR.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintgUYocW6 = BigInt("1452")
		const addressWoU6GOx = accounts[3]
		const uintbBPMArN = BigInt("1875")
		const uintwzv8js = BigInt("1137")
		const addressPtVDlC7 = accounts[3]
		const uint256pMFTx1e = await Ledgis85i8aW.currentTime.call({from: accounts[1]});
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressWoU6GOx, uintgUYocW6, {from: accounts[1]});
		const booldZuT6Wm = await Ledgis85i8aW.transferWithLockAfter.call(addressPtVDlC7, uintwzv8js, uintbBPMArN, {from: accounts[0]});

		assert.equal(boolVppYCE4, true)
		assert.equal(booldZuT6Wm, true)
		assert.equal(uint256pMFTx1e, BigInt("1630229957"))
	});

	it('test for Ledgis', async () => {
		const Ledgisy2mQJo4 = await Ledgis.new({from: accounts[0]});
		const addresszb2CIg = accounts[4]
		const uintMsG3U6Q = BigInt("646")
		const addressorp9kO = accounts[0]
		const uintYGIZsv = BigInt("1496")
		const addressFRFa9gV = accounts[1]
		const addressYwGqqVJ = accounts[3]
		const uinttmnF0Nj = BigInt("351")
		const addressaj9NqJi = accounts[0]
		const boolRMlGe3 = await Ledgisy2mQJo4.isFrozen.call(addresszb2CIg, {from: accounts[4]});
//		await Ledgisy2mQJo4.whenNotPaused.call({from: accounts[1]});
//		const boolJjrjGac = await Ledgisy2mQJo4.approve.call(addressorp9kO, uintMsG3U6Q, {from: accounts[2]});
//		const boolezS5KS1 = await Ledgisy2mQJo4.transferFrom.call(addressYwGqqVJ, addressFRFa9gV, uintYGIZsv, {from: accounts[0]});
//		await Ledgisy2mQJo4.lockState.call(addressaj9NqJi, uinttmnF0Nj, {from: accounts[3]});

		assert.equal(boolRMlGe3, false)
		await expect(Ledgisy2mQJo4.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintFajAfM0 = BigInt("1157")
		const uintiRa6b1O = BigInt("552")
		const addressKazQh92 = accounts[2]
		const boolYml3jY = await Ledgis85i8aW.transferWithLock.call(addressKazQh92, uintiRa6b1O, uintFajAfM0, {from: accounts[0]});

		assert.equal(boolYml3jY, true)
	});

	it('test for Ledgis', async () => {
		const Ledgise6734XE = await Ledgis.new({from: accounts[2]});
		const addressVz4cGIL = "0x0000000000000000000000000000000000000001"
		const uintaNy8sCf = BigInt("1050")
		const addresssDTlxkq = accounts[1]
		const uintupHQGks = BigInt("1061")
		const addressIwAFWcW = accounts[2]
		const addressuwOmx2u = await Ledgise6734XE.transferOwnership.call(addressVz4cGIL, {from: accounts[2]});
//		const addressquHWkhe = await Ledgise6734XE.unlock.call(addresssDTlxkq, uintaNy8sCf, {from: accounts[0]});
//		const boolKVMyEbr = await Ledgise6734XE.approve.call(addressIwAFWcW, uintupHQGks, {from: accounts[3]});
//		await Ledgise6734XE.renounceOwnership.call({from: accounts[4]});

		await expect(Ledgise6734XE.unlock.call(addresssDTlxkq, uintaNy8sCf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintFBrnIl0 = BigInt("189")
		const addressevUZuNm = accounts[1]
		const addressExyJpt = accounts[4]
		const address3OQbS2 = accounts[3]
		const uintSVGaLtf = BigInt("1428")
		const addresss35zvr0 = accounts[3]
//		await Ledgis85i8aW.lockState.call(addressevUZuNm, uintFBrnIl0, {from: accounts[4]});
//		const uint256iyZBhGs = await Ledgis85i8aW.allowance.call(address3OQbS2, addressExyJpt, {from: accounts[3]});
//		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addresss35zvr0, uintSVGaLtf, {from: accounts[1]});

		await expect(Ledgis85i8aW.lockState.call(addressevUZuNm, uintFBrnIl0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintPVABJ2w = BigInt("1615")
		const uintLmBvVVb = BigInt("196")
		const addressKCiuClB = accounts[5]
		const uintTQvue7g = BigInt("1452")
		const addressLyaCUqx = accounts[3]
//		const addressYPADw1b = await Ledgis85i8aW.lockAfter.call(addressKCiuClB, uintLmBvVVb, uintPVABJ2w, {from: accounts[0]});
//		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressLyaCUqx, uintTQvue7g, {from: accounts[1]});

		await expect(Ledgis85i8aW.lockAfter.call(addressKCiuClB, uintLmBvVVb, uintPVABJ2w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const uintJxN7dgO = BigInt("141")
		const addressarEZrrP = accounts[6]
		const uint256p1HYYj = await LedgisDwldHWW.afterTime.call(uintJxN7dgO, {from: accounts[1]});
		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressarEZrrP, {from: accounts[4]});

		assert.equal(uint256p1HYYj, BigInt("1630230110"))
		assert.equal(uint256tyDtGnj, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const addressJMhcZ0l = accounts[2]
		const uinteN29QSI = BigInt("1592")
		const addressbXav1mE = "0x0000000000000000000000000000000000000001"
//		await Ledgis85i8aW.unpause.call({from: accounts[0]});
//		const uint256rEaU45L = await Ledgis85i8aW.balanceOf.call(addressJMhcZ0l, {from: accounts[2]});
//		const boolkItw416 = await Ledgis85i8aW.transfer.call(addressbXav1mE, uinteN29QSI, {from: accounts[3]});
//		await Ledgis85i8aW.pause.call({from: accounts[4]});

		await expect(Ledgis85i8aW.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintyULpTyG = BigInt("1488")
		const addressHUACbN = accounts[3]
		const uintJMEip1r = BigInt("1324")
		const addresshJl6fRm = accounts[0]
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressHUACbN, uintyULpTyG, {from: accounts[1]});
		const boolyj1twS = await Ledgis85i8aW.mint.call(addresshJl6fRm, uintJMEip1r, {from: accounts[0]});

		assert.equal(boolVppYCE4, true)
		assert.equal(boolyj1twS, true)
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const addressvwcr1Ou = accounts[5]
		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressvwcr1Ou, {from: accounts[4]});
//		await LedgisDwldHWW.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256tyDtGnj, BigInt("10000000000000"))
		await expect(LedgisDwldHWW.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintJvM7h9 = BigInt("1098")
		const addressbNArXWb = accounts[4]
		const uintIJYwCPM = BigInt("1482")
		const addresspVud3Qi = accounts[3]
		const uintwJKr0oN = BigInt("2042")
		const uintOWpvAqi = BigInt("651")
		const addressmQjuhHe = accounts[2]
		const uintDEImc4 = BigInt("1012")
		const uintkZMPc8 = BigInt("1316")
		const addressxFwH8vu = accounts[1]
		const boolG3jwXhw = await Ledgis85i8aW.increaseAllowance.call(addressbNArXWb, uintJvM7h9, {from: accounts[0]});
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addresspVud3Qi, uintIJYwCPM, {from: accounts[1]});
		const boolkQsOcTH = await Ledgis85i8aW.transferWithLockAfter.call(addressmQjuhHe, uintOWpvAqi, uintwJKr0oN, {from: accounts[0]});
//		const addressKMBTLnp = await Ledgis85i8aW.lock.call(addressxFwH8vu, uintkZMPc8, uintDEImc4, {from: accounts[0]});

		assert.equal(boolG3jwXhw, true)
		assert.equal(boolVppYCE4, true)
		assert.equal(boolkQsOcTH, true)
		await expect(Ledgis85i8aW.lock.call(addressxFwH8vu, uintkZMPc8, uintDEImc4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const addressh3p7RG8 = "0x0000000000000000000000000000000000000001"
		const uintvoVohQw = BigInt("604")
		const addressvlWlvhO = "0x0000000000000000000000000000000000000001"
		const addressWyy2yQT = accounts[6]
		const uint256Ned3iKq = await LedgisDwldHWW.balanceOf.call(addressh3p7RG8, {from: accounts[4]});
//		const addressfik4SR6 = await LedgisDwldHWW.unlock.call(addressvlWlvhO, uintvoVohQw, {from: accounts[5]});
//		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressWyy2yQT, {from: accounts[4]});

		assert.equal(uint256Ned3iKq, BigInt("0"))
		await expect(LedgisDwldHWW.unlock.call(addressvlWlvhO, uintvoVohQw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis85i8aW = await Ledgis.new({from: accounts[0]});
		const uintgLCsZ3J = BigInt("1413")
		const addressOqVfvo = accounts[3]
		const uintOTXHeyp = BigInt("284")
		const addressAqsdG3r = accounts[2]
		const boolVppYCE4 = await Ledgis85i8aW.approve.call(addressOqVfvo, uintgLCsZ3J, {from: accounts[1]});
//		const addressQUp9iX = await Ledgis85i8aW.burn.call(addressAqsdG3r, uintOTXHeyp, {from: accounts[0]});

		assert.equal(boolVppYCE4, true)
		await expect(Ledgis85i8aW.burn.call(addressAqsdG3r, uintOTXHeyp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const addressuc2CIl = accounts[0]
		const addressdVD7iPh = accounts[2]
		const addressQiO97qj = accounts[5]
		const addressn89bb3N = accounts[6]
		const uint256cFvs9NG = await LedgisDwldHWW.allowance.call(addressdVD7iPh, addressuc2CIl, {from: accounts[4]});
		const addressv99plSb = await LedgisDwldHWW.unfreeze.call(addressQiO97qj, {from: accounts[5]});
		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressn89bb3N, {from: accounts[4]});

		assert.equal(uint256cFvs9NG, BigInt("0"))
		assert.equal(uint256tyDtGnj, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisDwldHWW = await Ledgis.new({from: accounts[5]});
		const addressgtPMzt6 = accounts[6]
		const addressye7FULy = accounts[0]
		const uint256tyDtGnj = await LedgisDwldHWW.balanceOf.call(addressgtPMzt6, {from: accounts[4]});
		const addressMziccqD = await LedgisDwldHWW.freeze.call(addressye7FULy, {from: accounts[5]});

		assert.equal(uint256tyDtGnj, BigInt("0"))
	});
})