const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100xJvxR41 = await Token50X100.new({from: accounts[1]});
		const uintTeRFjHJ = BigInt("974")
		const addressGjYoomO = accounts[3]
		const addressbyQZS78 = accounts[4]
		const addressp0cQX7X = "0x0000000000000000000000000000000000000001"
		const addressIrjbaoZ = "0x0000000000000000000000000000000000000001"
		const uintYxQEHsc = BigInt("436")
		const uintIBxmRza = BigInt("1045")
		const addressVs9vHzJ = accounts[0]
		const booloGT0Ne0 = await Token50X100xJvxR41.transferFrom.call(addressbyQZS78, addressGjYoomO, uintTeRFjHJ, {from: accounts[3]});
		const uint256wrcbl2g = await Token50X100xJvxR41.allowance.call(addressIrjbaoZ, addressp0cQX7X, {from: accounts[1]});
		const boolpQfXh0 = await Token50X100xJvxR41.setVesting.call(addressVs9vHzJ, uintIBxmRza, uintYxQEHsc, {from: accounts[5]});

		await expect(Token50X100xJvxR41.transferFrom.call(addressbyQZS78, addressGjYoomO, uintTeRFjHJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100p98KQZG = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB3qO4uX = BigInt("170")
		const stringL9H8VxE = "lCSy0SE4ytGBpDXEDN3cBaaCPJhYPlKNJ932ZpS2ds1sk3nOALCTlHxyQATN3"
		const stringXr2bx4K = "p4s8mR3YbJ4t4ByesQnIpW1LOetr3p3u46lkg7dGUWtuXgxB83odljvB4PWo"
		const uintybGgkXr = BigInt("1273")
		const addresssHeZAFr = accounts[5]
		const addressO7JM9ZL = accounts[5]
		await Token50X100p98KQZG.onlyOwner.call({from: accounts[1]});
		const boolmpUPKId = await Token50X100p98KQZG.setSymbolNameDecimals.call(stringXr2bx4K, stringL9H8VxE, uintB3qO4uX, {from: accounts[3]});
		const booljHxp71P = await Token50X100p98KQZG.transferFrom.call(addressO7JM9ZL, addresssHeZAFr, uintybGgkXr, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100dTFl8Qz = await Token50X100.new({from: accounts[1]});
		const addressybsEzn1 = accounts[3]
		const addressgvI51Hk = "0x0000000000000000000000000000000000000001"
		const addressXnAA8vH = "0x0000000000000000000000000000000000000001"
		const uint256la1J6cZ = await Token50X100dTFl8Qz.balanceOf.call(addressybsEzn1, {from: accounts[2]});
		const uint256ZtCyAH = await Token50X100dTFl8Qz.allowance.call(addressXnAA8vH, addressgvI51Hk, {from: accounts[4]});

		assert.equal(uint256ZtCyAH, BigInt("0"))
		assert.equal(uint256la1J6cZ, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100OauwON = await Token50X100.new({from: accounts[2]});
		const addressvaIbUx6 = accounts[1]
		const addressvrDPBXR = "0x0000000000000000000000000000000000000001"
		const addressgxCrA0R = accounts[0]
		const uintkqrU4h1 = BigInt("1057")
		const address4b0XEs = accounts[2]
		const addresso9SFBfE = "0x0000000000000000000000000000000000000001"
		const uintmFtPy50 = BigInt("885")
		const uintfmauEZo = BigInt("245")
		const addressJPDnhED = accounts[3]
		const addressvHLcfDK = accounts[3]
		const addressmxRN86T = await Token50X100OauwON.setOriginalContract.call(addressvaIbUx6, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100OauwON.setLinkingAddresses.call(addressgxCrA0R, addressvrDPBXR, {from: accounts[1]});
		const booljRmwAb = await Token50X100OauwON.transferFrom.call(addresso9SFBfE, address4b0XEs, uintkqrU4h1, {from: accounts[4]});
		const boolcTW1OHs = await Token50X100OauwON._transfer.call(addressvHLcfDK, addressJPDnhED, uintfmauEZo, uintmFtPy50, {from: accounts[4]});

		await expect(Token50X100OauwON.setOriginalContract.call(addressvaIbUx6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const uintCmb18Ru = BigInt("371")
		const uintm63NcnW = BigInt("263")
		const addresstWB4AfU = accounts[1]
		const addressLTwEAlj = accounts[3]
		const uintzXCvMLZ = BigInt("1827")
		const addressOtxoXxM = accounts[2]
		const uintcdVegnB = BigInt("1827")
		const addressfGiE2v0 = accounts[0]
		const addressgI2zOEy = accounts[4]
		const boolihDeGCH = await Token50X100iEpiCAM._transfer.call(addressLTwEAlj, addresstWB4AfU, uintm63NcnW, uintCmb18Ru, {from: accounts[2]});
		const boolpwlePcX = await Token50X100iEpiCAM.transfer.call(addressOtxoXxM, uintzXCvMLZ, {from: "0x0000000000000000000000000000000000000001"});
		const booliotLECl = await Token50X100iEpiCAM.transferFrom.call(addressgI2zOEy, addressfGiE2v0, uintcdVegnB, {from: accounts[5]});

		await expect(Token50X100iEpiCAM._transfer.call(addressLTwEAlj, addresstWB4AfU, uintm63NcnW, uintCmb18Ru, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const uintCFp3IU = BigInt("1827")
		const addressx3i0MZz = accounts[2]
		const addressLL7lem3 = "0x0000000000000000000000000000000000000001"
		const uintg2FCTSb = BigInt("1827")
		const addressL7ePwsD = accounts[0]
		const addressgLmoxHR = accounts[4]
		await Token50X100iEpiCAM.release.call({from: accounts[2]});
		const boolpwlePcX = await Token50X100iEpiCAM.transfer.call(addressx3i0MZz, uintCFp3IU, {from: "0x0000000000000000000000000000000000000001"});
		const addressfIARWzf = await Token50X100iEpiCAM.setOriginalContract.call(addressLL7lem3, {from: accounts[5]});
		const booliotLECl = await Token50X100iEpiCAM.transferFrom.call(addressgLmoxHR, addressL7ePwsD, uintg2FCTSb, {from: accounts[5]});

		await expect(Token50X100iEpiCAM.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100F7mN3cp = await Token50X100.new({from: accounts[0]});
		const uintSW1A0DR = BigInt("649")
		const boolMg73zHx = true
		const addressBLg1x8J = accounts[0]
		const boolLHZVtFh = await Token50X100F7mN3cp.setMaxLockPeriod.call(uintSW1A0DR, {from: accounts[2]});
		await Token50X100F7mN3cp.setWhiteList.call(addressBLg1x8J, boolMg73zHx, {from: accounts[3]});

		assert.equal(boolLHZVtFh, false)
		await expect(Token50X100F7mN3cp.setWhiteList.call(addressBLg1x8J, boolMg73zHx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xJvxR41 = await Token50X100.new({from: accounts[1]});
		const uintZ5f5rn3 = BigInt("85")
		const uintXmHH8Cb = BigInt("1330")
		const addressOExcl1 = accounts[2]
		const uintnF6sIn8 = BigInt("1405")
		const addressb7C50pq = accounts[4]
		const addressQlEtWJl = accounts[4]
		const boolcbEtnv = await Token50X100xJvxR41.setMaxLockPeriod.call(uintZ5f5rn3, {from: "0x0000000000000000000000000000000000000001"});
		const boolmQ4ckpB = await Token50X100xJvxR41.increaseApproval.call(addressOExcl1, uintXmHH8Cb, {from: accounts[4]});
		const booloGT0Ne0 = await Token50X100xJvxR41.transferFrom.call(addressQlEtWJl, addressb7C50pq, uintnF6sIn8, {from: accounts[3]});

		assert.equal(boolcbEtnv, false)
		assert.equal(boolmQ4ckpB, true)
		await expect(Token50X100xJvxR41.transferFrom.call(addressQlEtWJl, addressb7C50pq, uintnF6sIn8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const uintBDfm75Y = BigInt("17")
		const addressozyUWjb = "0x0000000000000000000000000000000000000001"
		const uintJIBTg6t = BigInt("1827")
		const addressRb8Z0hw = accounts[2]
		const uintdv3xcb8 = BigInt("1926")
		const uintK74BwJ8 = BigInt("209")
		const addressk3buQno = accounts[3]
		const boolEwywN5K = await Token50X100iEpiCAM.approve.call(addressozyUWjb, uintBDfm75Y, {from: accounts[4]});
		const boolpwlePcX = await Token50X100iEpiCAM.transfer.call(addressRb8Z0hw, uintJIBTg6t, {from: "0x0000000000000000000000000000000000000001"});
		const boolhbJgEd7 = await Token50X100iEpiCAM.setVesting.call(addressk3buQno, uintK74BwJ8, uintdv3xcb8, {from: accounts[0]});

		assert.equal(boolEwywN5K, true)
		await expect(Token50X100iEpiCAM.transfer.call(addressRb8Z0hw, uintJIBTg6t, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xJvxR41 = await Token50X100.new({from: accounts[1]});
		const uintiY81BCZ = BigInt("924")
		const addresseyy9hWK = accounts[0]
		const uintyPxFJGU = BigInt("974")
		const addressPCQsjRB = accounts[5]
		const addressIkKyFa1 = accounts[4]
		const boollSjbaV = await Token50X100xJvxR41.decreaseApproval.call(addresseyy9hWK, uintiY81BCZ, {from: "0x0000000000000000000000000000000000000001"});
		const booloGT0Ne0 = await Token50X100xJvxR41.transferFrom.call(addressIkKyFa1, addressPCQsjRB, uintyPxFJGU, {from: accounts[3]});

		assert.equal(boollSjbaV, true)
		await expect(Token50X100xJvxR41.transferFrom.call(addressIkKyFa1, addressPCQsjRB, uintyPxFJGU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const uintOR7XkIl = BigInt("1822")
		const uintuk6Hcb4 = BigInt("271")
		const uintY6tMRPZ = BigInt("1827")
		const addressJSkTbS = accounts[3]
		const addressRIp8OE5 = accounts[4]
		const addressnccpqP = accounts[1]
		const uintSkXTFk1 = BigInt("1954")
		const uintOWcRWa = BigInt("221")
		const addresscHP5vfI = accounts[0]
		const uintEHAICnz = BigInt("1827")
		const addressBUhHS88 = accounts[0]
		const addressbaS6xv = accounts[4]
		await Token50X100iEpiCAM.release.call({from: accounts[2]});
		const boolHsTjVZ = await Token50X100iEpiCAM.safeLock.call(uintuk6Hcb4, uintOR7XkIl, {from: accounts[4]});
		const boolpwlePcX = await Token50X100iEpiCAM.transfer.call(addressJSkTbS, uintY6tMRPZ, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100iEpiCAM.setLinkingAddresses.call(addressnccpqP, addressRIp8OE5, {from: accounts[4]});
		const boolCrJxtMe = await Token50X100iEpiCAM.setVesting.call(addresscHP5vfI, uintOWcRWa, uintSkXTFk1, {from: accounts[5]});
		const booliotLECl = await Token50X100iEpiCAM.transferFrom.call(addressbaS6xv, addressBUhHS88, uintEHAICnz, {from: accounts[5]});

		await expect(Token50X100iEpiCAM.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xJvxR41 = await Token50X100.new({from: accounts[1]});
		const uintQ3H0HzI = BigInt("53")
		const stringsArytvu = "9qaBjgAKqszF9Uuvnd2tY31xy45DiAodubFvR19rTwl"
		const stringjz2ndY = "26OMo4a56XhYxvOPqE0tDlELgzIXyvRM5K2xd"
		const uintEeuzM6p = BigInt("974")
		const addressHEMmSTz = accounts[4]
		const addressv27wgPL = accounts[4]
		await Token50X100xJvxR41.setSymbolNameDecimals.call(stringjz2ndY, stringsArytvu, uintQ3H0HzI, {from: accounts[1]});
		const booloGT0Ne0 = await Token50X100xJvxR41.transferFrom.call(addressv27wgPL, addressHEMmSTz, uintEeuzM6p, {from: accounts[3]});

		await expect(Token50X100xJvxR41.setSymbolNameDecimals.call(stringjz2ndY, stringsArytvu, uintQ3H0HzI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xJvxR41 = await Token50X100.new({from: accounts[1]});
		const uintnAPsi04 = BigInt("901")
		const addressFpqrxqq = accounts[0]
		const uint256ZaWx72S = await Token50X100xJvxR41.totalSupply.call({from: accounts[1]});
		const boollSjbaV = await Token50X100xJvxR41.decreaseApproval.call(addressFpqrxqq, uintnAPsi04, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollSjbaV, true)
		assert.equal(uint256ZaWx72S, BigInt("4714285714285710"))
	});

	it('test for Token50X100', async () => {
		const Token50X100PoBXgSl = await Token50X100.new({from: accounts[2]});
		const addressc5bzmZL = accounts[1]
		const addressyi62oQi = accounts[3]
		const uintgWQy2W = BigInt("455")
		const addressaiNCvvV = accounts[0]
		const uintTaM6qiA = BigInt("377")
		const uintC7dpe8z = BigInt("1681")
		const uintp69C0N = BigInt("741")
		await Token50X100PoBXgSl.setLinkingAddresses.call(addressyi62oQi, addressc5bzmZL, {from: accounts[2]});
		const boolnvlzpVY = await Token50X100PoBXgSl.decreaseApproval.call(addressaiNCvvV, uintgWQy2W, {from: accounts[3]});
		const booljMi6Zd2 = await Token50X100PoBXgSl.safeLock.call(uintC7dpe8z, uintTaM6qiA, {from: accounts[3]});
		const boolRAPbrPL = await Token50X100PoBXgSl.setMaxLockPeriod.call(uintp69C0N, {from: accounts[0]});

		await expect(Token50X100PoBXgSl.setLinkingAddresses.call(addressyi62oQi, addressc5bzmZL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const uintZIHvRTk = BigInt("1780")
		const addressA4GFcM9 = accounts[2]
		const addressVT5jX4G = "0x0000000000000000000000000000000000000001"
		const uintkzkOgc6 = BigInt("1030")
		const uintO3aeaTR = BigInt("1903")
		const addressCAIlWF = accounts[4]
		const addressgC6Hw2 = accounts[3]
		const uintRM3A38 = BigInt("1827")
		const addressW1SD5Bt = accounts[0]
		const addressp6FCbZD = accounts[4]
		await Token50X100iEpiCAM.lock.call({from: accounts[2]});
		await Token50X100iEpiCAM.release.call({from: accounts[2]});
		await Token50X100iEpiCAM.release.call({from: accounts[4]});
		const boolpwlePcX = await Token50X100iEpiCAM.transfer.call(addressA4GFcM9, uintZIHvRTk, {from: "0x0000000000000000000000000000000000000001"});
		const addressfIARWzf = await Token50X100iEpiCAM.setOriginalContract.call(addressVT5jX4G, {from: accounts[5]});
		const boolB3OiEUX = await Token50X100iEpiCAM._transfer.call(addressgC6Hw2, addressCAIlWF, uintO3aeaTR, uintkzkOgc6, {from: accounts[4]});
		const booliotLECl = await Token50X100iEpiCAM.transferFrom.call(addressp6FCbZD, addressW1SD5Bt, uintRM3A38, {from: accounts[5]});

		await expect(Token50X100iEpiCAM.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PoBXgSl = await Token50X100.new({from: accounts[2]});
		const uintiDlSMb6 = BigInt("132")
		const uintjodLKB0 = BigInt("361")
		const addressoHfkZbR = accounts[0]
		const uintTv8CyB = BigInt("430")
		const addresstdb3ICE = accounts[0]
		const uinthfEqbKR = BigInt("2021")
		const addressQ4dpCg1 = accounts[1]
		const uintfq5laLr = BigInt("976")
		const uintZKVy7kT = BigInt("87")
		const boolbOTkeDN = await Token50X100PoBXgSl.setVesting.call(addressoHfkZbR, uintjodLKB0, uintiDlSMb6, {from: accounts[2]});
		const boolnvlzpVY = await Token50X100PoBXgSl.decreaseApproval.call(addresstdb3ICE, uintTv8CyB, {from: accounts[3]});
		const boolvxpVC2i = await Token50X100PoBXgSl.transfer.call(addressQ4dpCg1, uinthfEqbKR, {from: accounts[1]});
		const booljMi6Zd2 = await Token50X100PoBXgSl.safeLock.call(uintZKVy7kT, uintfq5laLr, {from: accounts[3]});

		assert.equal(boolbOTkeDN, true)
		assert.equal(boolnvlzpVY, true)
		await expect(Token50X100PoBXgSl.transfer.call(addressQ4dpCg1, uinthfEqbKR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PoBXgSl = await Token50X100.new({from: accounts[2]});
		const uintf7Uno8Y = BigInt("430")
		const addressew32vxd = accounts[0]
		const uintPm2cOK0 = BigInt("1805")
		const addresssDfuDd = "0x0000000000000000000000000000000000000000"
		const uintdPjGNMO = BigInt("637")
		const addressQghLFR2 = accounts[2]
		const uinttcevayq = BigInt("104")
		const stringKmmxwl8 = "VMDH2d"
		const stringUV3JvMO = "hdxmk0koszPbRTPJxZwSnyQ"
		const uintnuLQdL4 = BigInt("382")
		const uintC3hw9ig = BigInt("87")
		const boolnvlzpVY = await Token50X100PoBXgSl.decreaseApproval.call(addressew32vxd, uintf7Uno8Y, {from: accounts[3]});
		const boolttrDEVx = await Token50X100PoBXgSl.transfer.call(addresssDfuDd, uintPm2cOK0, {from: "0x0000000000000000000000000000000000000001"});
		const boolBOOkxkU = await Token50X100PoBXgSl.decreaseApproval.call(addressQghLFR2, uintdPjGNMO, {from: accounts[3]});
		const boolikeGQXK = await Token50X100PoBXgSl.setSymbolNameDecimals.call(stringUV3JvMO, stringKmmxwl8, uinttcevayq, {from: "0x0000000000000000000000000000000000000001"});
		const booljMi6Zd2 = await Token50X100PoBXgSl.safeLock.call(uintC3hw9ig, uintnuLQdL4, {from: accounts[3]});

		assert.equal(boolnvlzpVY, true)
		await expect(Token50X100PoBXgSl.transfer.call(addresssDfuDd, uintPm2cOK0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iEpiCAM = await Token50X100.new({from: accounts[2]});
		const addresssGqU1nT = accounts[1]
		const uintDG4AZGg = BigInt("888")
		const uintEThoAH = BigInt("324")
		const addresszCGrIQs = "0x0000000000000000000000000000000000000002"
		const addressrQO3fPF = accounts[2]
		await Token50X100iEpiCAM.setTokenContract.call(addresssGqU1nT, {from: accounts[2]});
		const bool4OgCCF = await Token50X100iEpiCAM._transfer.call(addressrQO3fPF, addresszCGrIQs, uintEThoAH, uintDG4AZGg, {from: accounts[2]});

		await expect(Token50X100iEpiCAM.setTokenContract.call(addresssGqU1nT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100DykOTUo = await Token50X100.new({from: accounts[3]});
		const uintqUp1HIJ = BigInt("1375")
		const addressPysNhAS = accounts[5]
		const boolrjGG3ti = false
		const addressb1BbqNB = accounts[3]
		const uintaGuVcl4 = BigInt("47")
		const addressu4tsdMj = "0x0000000000000000000000000000000000000001"
		const addressW3xmIYo = accounts[5]
		const boolBgQjfa9 = await Token50X100DykOTUo.increaseApproval.call(addressPysNhAS, uintqUp1HIJ, {from: accounts[5]});
		await Token50X100DykOTUo.setWhiteList.call(addressb1BbqNB, boolrjGG3ti, {from: accounts[3]});
		const boollM7TZGG = await Token50X100DykOTUo.transferFrom.call(addressW3xmIYo, addressu4tsdMj, uintaGuVcl4, {from: accounts[2]});

		assert.equal(boolBgQjfa9, true)
		await expect(Token50X100DykOTUo.setWhiteList.call(addressb1BbqNB, boolrjGG3ti, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PoBXgSl = await Token50X100.new({from: accounts[2]});
		const boolYmRaZV4 = true
		const addressVeM7b7k = accounts[2]
		const uintEZm5ecd = BigInt("430")
		const addressJkh0YEE = accounts[0]
		const uint256jNALofn = await Token50X100PoBXgSl.totalSupply.call({from: accounts[2]});
		await Token50X100PoBXgSl.setWhiteListReceivers.call(addressVeM7b7k, boolYmRaZV4, {from: accounts[2]});
		const boolnvlzpVY = await Token50X100PoBXgSl.decreaseApproval.call(addressJkh0YEE, uintEZm5ecd, {from: accounts[3]});

		assert.equal(uint256jNALofn, BigInt("4714285714285710"))
		await expect(Token50X100PoBXgSl.setWhiteListReceivers.call(addressVeM7b7k, boolYmRaZV4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PoBXgSl = await Token50X100.new({from: accounts[2]});
		const uintCzx77Nk = BigInt("430")
		const addressgyVr2H = accounts[0]
		const uintuZuJQ10 = BigInt("1805")
		const addressNHpVgu8 = "0x00000000000000000000000000000000000000-1"
		const uintnEqWwzP = BigInt("637")
		const addressXlKdYL = "0x0000000000000000000000000000000000000001"
		const uinty7VEnnk = BigInt("104")
		const stringKmmxwl8 = "VMDH2d"
		const stringUV3JvMO = "hdxmk0koszPbRTPJxZwSnyQ"
		const uintW57m1ML = BigInt("1972")
		const addressiww4ZD = accounts[1]
		const uintsKj3PvF = BigInt("382")
		const uintAF4DLVP = BigInt("87")
		const boolnvlzpVY = await Token50X100PoBXgSl.decreaseApproval.call(addressgyVr2H, uintCzx77Nk, {from: accounts[3]});
		const boolttrDEVx = await Token50X100PoBXgSl.transfer.call(addressNHpVgu8, uintuZuJQ10, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100PoBXgSl.onlyOwner.call({from: accounts[2]});
		const boolBOOkxkU = await Token50X100PoBXgSl.decreaseApproval.call(addressXlKdYL, uintnEqWwzP, {from: accounts[3]});
		const boolikeGQXK = await Token50X100PoBXgSl.setSymbolNameDecimals.call(stringUV3JvMO, stringKmmxwl8, uinty7VEnnk, {from: "0x0000000000000000000000000000000000000001"});
		const boolcCdXlKD = await Token50X100PoBXgSl.transfer.call(addressiww4ZD, uintW57m1ML, {from: accounts[4]});
		const booljMi6Zd2 = await Token50X100PoBXgSl.safeLock.call(uintAF4DLVP, uintsKj3PvF, {from: accounts[3]});

		assert.equal(boolnvlzpVY, true)
		await expect(Token50X100PoBXgSl.transfer.call(addressNHpVgu8, uintuZuJQ10, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})