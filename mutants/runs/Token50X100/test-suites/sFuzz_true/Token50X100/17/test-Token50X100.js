const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100arJjLNP = await Token50X100.new({from: accounts[5]});
		const boolheBub65 = true
		const addressTtOybTs = accounts[2]
		const addressEHiZpw = accounts[4]
		const uintLPatkI6 = BigInt("238")
		const stringZLl7RWc = "EMzHySPXYKzdM5TwnOA6tv8a1v8KcOKszXatpt2VTFzEwdoasr3WmKTsCrfLLaYtrGJOo4zc5x5KocB6QkRqst2uWhWeCcIWJW"
		const stringdvs2YHH = "4MNfQsQ0omCerj"
		const uintKEUWcRM = BigInt("558")
		const addressaxlgCP8 = accounts[3]
		const addressNPUi6r = "0x0000000000000000000000000000000000000001"
		const uintIeVXNyl = BigInt("1")
		const stringzpJUeDq = "bjG0G0f7R1z3IvJTkINk5m5nDDkJ"
		const stringy2S1U3 = "gN2awGj2KPSlVjOXSoDo9wMPAyghspeQX"
		await Token50X100arJjLNP.setWhiteListReceivers.call(addressTtOybTs, boolheBub65, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100arJjLNP.setTokenContract.call(addressEHiZpw, {from: accounts[4]});
		const boolQJKLFfd = await Token50X100arJjLNP.setSymbolNameDecimals.call(stringdvs2YHH, stringZLl7RWc, uintLPatkI6, {from: accounts[1]});
		const boolRBqfyhS = await Token50X100arJjLNP.transferFrom.call(addressNPUi6r, addressaxlgCP8, uintKEUWcRM, {from: accounts[1]});
		const boolRQzxk7B = await Token50X100arJjLNP.setSymbolNameDecimals.call(stringy2S1U3, stringzpJUeDq, uintIeVXNyl, {from: accounts[0]});

		await expect(Token50X100arJjLNP.setWhiteListReceivers.call(addressTtOybTs, boolheBub65, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HL6g98M = await Token50X100.new({from: accounts[1]});
		const addressmZTSWOh = "0x0000000000000000000000000000000000000001"
		const addressmaIyBru = accounts[2]
		const uintxGRdQSx = BigInt("638")
		const addressGKLsiBz = accounts[1]
		await Token50X100HL6g98M.release.call({from: accounts[1]});
		const uint256TUZDIF = await Token50X100HL6g98M.allowance.call(addressmaIyBru, addressmZTSWOh, {from: accounts[3]});
		const boolbhmkHTu = await Token50X100HL6g98M.increaseApproval.call(addressGKLsiBz, uintxGRdQSx, {from: accounts[4]});

		await expect(Token50X100HL6g98M.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jff43W = await Token50X100.new({from: accounts[4]});
		const uintBtji0UK = BigInt("651")
		const addresswpuURX = accounts[1]
		const uintQSah9bk = BigInt("905")
		const uintsvVdoC9 = BigInt("550")
		const addressbvN4PWM = accounts[3]
		const addressHI5JQ7g = accounts[2]
		const uintw9LtUL0 = BigInt("24")
		const stringrASIFC8 = "tPLBwzCzY2whbdHp7HCwrRfSgXlRmZ6XU2gBgg3Ak4MxJjXu4lq"
		const stringlUxNnRa = "zSAICYlskiFy2QVTFbGwhQippP5LAT1yynuBFx6iCRM1QyXXNkP33MCcByI1VdCixiGxYjE842l4KOLjUzPy0QBu9SdhPfh"
		const uintpm44paB = BigInt("34")
		const addressF5OTQGJ = accounts[3]
		const boolcyG54P6 = await Token50X100Jff43W.transfer.call(addresswpuURX, uintBtji0UK, {from: accounts[4]});
		const boolI0d0Iw = await Token50X100Jff43W._transfer.call(addressHI5JQ7g, addressbvN4PWM, uintsvVdoC9, uintQSah9bk, {from: accounts[3]});
		const boolGMEV8xJ = await Token50X100Jff43W.setSymbolNameDecimals.call(stringlUxNnRa, stringrASIFC8, uintw9LtUL0, {from: accounts[5]});
		const boolCy23n14 = await Token50X100Jff43W.increaseApproval.call(addressF5OTQGJ, uintpm44paB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100Jff43W.transfer.call(addresswpuURX, uintBtji0UK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100i5XXPZ = await Token50X100.new({from: accounts[3]});
		const addressU8EIFP = accounts[0]
		const addresspHy6Q2m = accounts[4]
		const addressZSBtf7 = accounts[0]
		const addressBqBfrxx = accounts[0]
		const addressEHJsaz3 = accounts[1]
		const addressEsKdocc = accounts[3]
		const uintLfp2Smy = BigInt("741")
		const uintZsVtHs = BigInt("1767")
		const addressRnAiiUX = accounts[4]
		const addressKe6ZtJq = await Token50X100i5XXPZ.setOriginalContract.call(addressU8EIFP, {from: accounts[3]});
		await Token50X100i5XXPZ.setLinkingAddresses.call(addressZSBtf7, addresspHy6Q2m, {from: accounts[2]});
		const addressg4CUlBr = await Token50X100i5XXPZ.transferOwnership.call(addressBqBfrxx, {from: accounts[2]});
		await Token50X100i5XXPZ.setLinkingAddresses.call(addressEsKdocc, addressEHJsaz3, {from: accounts[0]});
		const boolSJffDy5 = await Token50X100i5XXPZ.setVesting.call(addressRnAiiUX, uintZsVtHs, uintLfp2Smy, {from: accounts[2]});

		await expect(Token50X100i5XXPZ.setOriginalContract.call(addressU8EIFP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uint256QCRVNSY = await Token50X100wmuUWxy.totalSupply.call({from: accounts[2]});
		await Token50X100wmuUWxy.release.call({from: accounts[0]});

		assert.equal(uint256QCRVNSY, BigInt("4714285714285710"))
		await expect(Token50X100wmuUWxy.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const addressDMCikym = accounts[3]
		const uint256gsVLFPk = await Token50X100wmuUWxy.balanceOf.call(addressDMCikym, {from: accounts[0]});
		const uint256QCRVNSY = await Token50X100wmuUWxy.totalSupply.call({from: accounts[2]});
		await Token50X100wmuUWxy.release.call({from: accounts[0]});

		assert.equal(uint256QCRVNSY, BigInt("4714285714285710"))
		assert.equal(uint256gsVLFPk, BigInt("0"))
		await expect(Token50X100wmuUWxy.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uintY6Aa5TL = BigInt("1843")
		const uintdaLdhjq = BigInt("772")
		const uinto5cXRE7 = BigInt("1290")
		const uintMTzKDdN = BigInt("148")
		const addressVUJ4nmG = accounts[0]
		const addressmcRuMSv = accounts[3]
		const boolVi2WPt = await Token50X100wmuUWxy.safeLock.call(uintdaLdhjq, uintY6Aa5TL, {from: accounts[1]});
		await Token50X100wmuUWxy.release.call({from: accounts[0]});
		const boolA2vzKzF = await Token50X100wmuUWxy._transfer.call(addressmcRuMSv, addressVUJ4nmG, uintMTzKDdN, uinto5cXRE7, {from: accounts[0]});

		await expect(Token50X100wmuUWxy.safeLock.call(uintdaLdhjq, uintY6Aa5TL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uintbDsg0PP = BigInt("1873")
		const addressLe7yCpV = accounts[4]
		const addressXE8uTOZ = accounts[0]
		const boolMgMm9C6 = await Token50X100wmuUWxy.transferFrom.call(addressXE8uTOZ, addressLe7yCpV, uintbDsg0PP, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100wmuUWxy.release.call({from: accounts[0]});

		await expect(Token50X100wmuUWxy.transferFrom.call(addressXE8uTOZ, addressLe7yCpV, uintbDsg0PP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uintT8JjWBh = BigInt("1500")
		const addressIDSDoMl = "0x0000000000000000000000000000000000000000"
		const uintXwrBY5L = BigInt("1335")
		const uintZXk5oFC = BigInt("1301")
		const addressiiGtvKy = accounts[5]
		const uintH69mRig = BigInt("684")
		const uintXTTYRj = BigInt("1543")
		const addressuRY7tRr = accounts[1]
		const addressWIvzPA = "0x0000000000000000000000000000000000000001"
		const boolWlM0Qkp = await Token50X100ZuSZWyk.transfer.call(addressIDSDoMl, uintT8JjWBh, {from: accounts[1]});
		const boolHF5dZbi = await Token50X100ZuSZWyk.setMaxLockPeriod.call(uintXwrBY5L, {from: accounts[4]});
		const boolIygqUuo = await Token50X100ZuSZWyk.transfer.call(addressiiGtvKy, uintZXk5oFC, {from: accounts[4]});
		const booldM8uGt = await Token50X100ZuSZWyk._transfer.call(addressWIvzPA, addressuRY7tRr, uintXTTYRj, uintH69mRig, {from: accounts[2]});
		await Token50X100ZuSZWyk.release.call({from: accounts[0]});
		await Token50X100ZuSZWyk.release.call({from: accounts[5]});

		await expect(Token50X100ZuSZWyk.transfer.call(addressIDSDoMl, uintT8JjWBh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Ggxnb74 = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFDMoeDo = BigInt("436")
		const addressyQnk399 = accounts[3]
		const uintklT5Lgs = BigInt("123")
		const stringXIVVqxQ = "TaHUGrGrtKDCraZNgJTHAw38r9MEPRU"
		const stringS8YHSzU = "QsbfLxZPibspJx692rozZhzmGHbVBUWwe422xyGCsCGtM36JFqpIHRWYoySPoP7C71bx9"
		const uintI8qvCwP = BigInt("1879")
		const uintLsUC2wf = BigInt("400")
		const boolbSunRzD = await Token50X100Ggxnb74.transfer.call(addressyQnk399, uintFDMoeDo, {from: accounts[1]});
		await Token50X100Ggxnb74.setSymbolNameDecimals.call(stringS8YHSzU, stringXIVVqxQ, uintklT5Lgs, {from: "0x0000000000000000000000000000000000000001"});
		const booloBmvdwt = await Token50X100Ggxnb74.safeLock.call(uintLsUC2wf, uintI8qvCwP, {from: accounts[3]});
		await Token50X100Ggxnb74.release.call({from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uintc8sGmhn = BigInt("1721")
		const addresscCLwv62 = accounts[7]
		await Token50X100wmuUWxy.lock.call({from: accounts[2]});
		const boolGtXZlSz = await Token50X100wmuUWxy.transfer.call(addresscCLwv62, uintc8sGmhn, {from: accounts[4]});

		await expect(Token50X100wmuUWxy.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uintzuMQVNd = BigInt("1335")
		const uintGLZkUc2 = BigInt("669")
		const uintBiMZ9Tr = BigInt("1543")
		const address2Kf4iQ = accounts[2]
		const addressOgNGMzA = "0x0000000000000000000000000000000000000001"
		const boolHF5dZbi = await Token50X100ZuSZWyk.setMaxLockPeriod.call(uintzuMQVNd, {from: accounts[4]});
		const booldM8uGt = await Token50X100ZuSZWyk._transfer.call(addressOgNGMzA, address2Kf4iQ, uintBiMZ9Tr, uintGLZkUc2, {from: accounts[2]});
		await Token50X100ZuSZWyk.release.call({from: accounts[0]});

		assert.equal(boolHF5dZbi, false)
		await expect(Token50X100ZuSZWyk._transfer.call(addressOgNGMzA, address2Kf4iQ, uintBiMZ9Tr, uintGLZkUc2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uintUsBYHcj = BigInt("1500")
		const addresswmuqxSH = "0x00000000000000000000000000000000000000-1"
		const boolWlM0Qkp = await Token50X100ZuSZWyk.transfer.call(addresswmuqxSH, uintUsBYHcj, {from: accounts[1]});
		await Token50X100ZuSZWyk.lock.call({from: accounts[2]});

		await expect(Token50X100ZuSZWyk.transfer.call(addresswmuqxSH, uintUsBYHcj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uintyjIgspx = BigInt("1150")
		const addressRLuTtLh = accounts[4]
		const boolK1RjPTT = await Token50X100wmuUWxy.approve.call(addressRLuTtLh, uintyjIgspx, {from: accounts[4]});
		await Token50X100wmuUWxy.release.call({from: accounts[0]});

		assert.equal(boolK1RjPTT, true)
		await expect(Token50X100wmuUWxy.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const uintPUgBHN = BigInt("188")
		const stringQcJiddt = "s427MpIYeHJyZ0UbSIEMGMXRamLg9tBrZt9BwI2ypWySFkO1VoI"
		const stringxXCpayF = "cd1NZsI1UGMf82qThpQruds9EaPqRphSVTi7jQ6BnQ1XhJpKiAjsqD1TdQ2bAxZcbvxkg"
		const uintZdAD9UL = BigInt("1843")
		const uintoie9Fq4 = BigInt("806")
		await Token50X100wmuUWxy.setSymbolNameDecimals.call(stringxXCpayF, stringQcJiddt, uintPUgBHN, {from: accounts[2]});
		const boolVi2WPt = await Token50X100wmuUWxy.safeLock.call(uintoie9Fq4, uintZdAD9UL, {from: accounts[1]});

		await expect(Token50X100wmuUWxy.setSymbolNameDecimals.call(stringxXCpayF, stringQcJiddt, uintPUgBHN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uintVXykUX = BigInt("454")
		const addressui48d8E = accounts[4]
		const uint8zObjm = BigInt("1500")
		const addressiEUsO51 = "0x0000000000000000000000000000000000000000"
		const booloznaxds = await Token50X100ZuSZWyk.decreaseApproval.call(addressui48d8E, uintVXykUX, {from: accounts[2]});
		const boolWlM0Qkp = await Token50X100ZuSZWyk.transfer.call(addressiEUsO51, uint8zObjm, {from: accounts[1]});

		assert.equal(booloznaxds, true)
		await expect(Token50X100ZuSZWyk.transfer.call(addressiEUsO51, uint8zObjm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const addressLMKaRfM = accounts[3]
		const uintIqScUd2 = BigInt("1214")
		const uintYnsPs1m = BigInt("1105")
		const addressQk5iWMj = "0x0000000000000000000000000000000000000000"
		await Token50X100ZuSZWyk.setTokenContract.call(addressLMKaRfM, {from: accounts[2]});
		const boolsPamebw = await Token50X100ZuSZWyk.setMaxLockPeriod.call(uintIqScUd2, {from: accounts[0]});
		const boolWlM0Qkp = await Token50X100ZuSZWyk.transfer.call(addressQk5iWMj, uintYnsPs1m, {from: accounts[1]});

		await expect(Token50X100ZuSZWyk.setTokenContract.call(addressLMKaRfM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const addressuIZBUqO = accounts[2]
		const addressfAeGJOs = accounts[1]
		const uintLyzP1f7 = BigInt("171")
		const uintGbHXGX = BigInt("1229")
		const uintd40H00I = BigInt("1844")
		const uintfhc0awm = BigInt("772")
		await Token50X100wmuUWxy.setLinkingAddresses.call(addressfAeGJOs, addressuIZBUqO, {from: accounts[2]});
		const boolK6XDvPs = await Token50X100wmuUWxy.safeLock.call(uintGbHXGX, uintLyzP1f7, {from: accounts[5]});
		const boolVi2WPt = await Token50X100wmuUWxy.safeLock.call(uintfhc0awm, uintd40H00I, {from: accounts[1]});

		await expect(Token50X100wmuUWxy.setLinkingAddresses.call(addressfAeGJOs, addressuIZBUqO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uinteYj3du = BigInt("944")
		const uintgNc54k0 = BigInt("1307")
		const addressoMGu0Lm = accounts[4]
		const uintOm9cogO = BigInt("1500")
		const addressGN4UIHo = "0x0000000000000000000000000000000000000001"
		const boolKKZb12r = await Token50X100ZuSZWyk.setVesting.call(addressoMGu0Lm, uintgNc54k0, uinteYj3du, {from: accounts[2]});
		const boolWlM0Qkp = await Token50X100ZuSZWyk.transfer.call(addressGN4UIHo, uintOm9cogO, {from: accounts[1]});

		assert.equal(boolKKZb12r, true)
		await expect(Token50X100ZuSZWyk.transfer.call(addressGN4UIHo, uintOm9cogO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZuSZWyk = await Token50X100.new({from: accounts[2]});
		const uintQU7ntlc = BigInt("117")
		const addressbQELIY = accounts[5]
		const boolQ83nRcH = false
		const addressLgJVPMB = accounts[4]
		const addressi8wjl28 = "0x0000000000000000000000000000000000000001"
		const addresso8zODLK = accounts[0]
		const boolZLxM5XV = await Token50X100ZuSZWyk.decreaseApproval.call(addressbQELIY, uintQU7ntlc, {from: accounts[3]});
		await Token50X100ZuSZWyk.setWhiteList.call(addressLgJVPMB, boolQ83nRcH, {from: accounts[2]});
		await Token50X100ZuSZWyk.setLinkingAddresses.call(addresso8zODLK, addressi8wjl28, {from: accounts[3]});

		assert.equal(boolZLxM5XV, true)
		await expect(Token50X100ZuSZWyk.setWhiteList.call(addressLgJVPMB, boolQ83nRcH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const addressUj3BFf = accounts[0]
		const uintUNSsBky = BigInt("700")
		const addressbrM16ip = "0x0000000000000000000000000000000000000001"
		const addressRZ18vOO = accounts[1]
		const addressk13922o = await Token50X100wmuUWxy.transferOwnership.call(addressUj3BFf, {from: accounts[2]});
		const boolyoCeiti = await Token50X100wmuUWxy.transferFrom.call(addressRZ18vOO, addressbrM16ip, uintUNSsBky, {from: accounts[2]});

		await expect(Token50X100wmuUWxy.transferFrom.call(addressRZ18vOO, addressbrM16ip, uintUNSsBky, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wmuUWxy = await Token50X100.new({from: accounts[2]});
		const boolqybTPY = true
		const addressGEniqAS = accounts[5]
		const uintZpufngi = BigInt("700")
		const addressExXR2xZ = "0x0000000000000000000000000000000000000001"
		const addressI3iDd3l = accounts[0]
		await Token50X100wmuUWxy.setWhiteListReceivers.call(addressGEniqAS, boolqybTPY, {from: accounts[2]});
		const boolyoCeiti = await Token50X100wmuUWxy.transferFrom.call(addressI3iDd3l, addressExXR2xZ, uintZpufngi, {from: accounts[2]});
		await Token50X100wmuUWxy.lock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100wmuUWxy.setWhiteListReceivers.call(addressGEniqAS, boolqybTPY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})