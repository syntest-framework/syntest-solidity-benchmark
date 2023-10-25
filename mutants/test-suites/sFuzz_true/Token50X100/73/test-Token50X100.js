const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100sZ59DQt = await Token50X100.new({from: accounts[3]});
		const uintQLbdrpt = BigInt("1222")
		const addressJ1L7bQM = accounts[4]
		const uintUrncjhQ = BigInt("325")
		const uintShtpCIu = BigInt("1870")
		const addressEesCQGE = accounts[2]
		const addresscNRCNTw = accounts[3]
		const addressD4ftc5X = "0x0000000000000000000000000000000000000001"
		const boolRbk6rg = await Token50X100sZ59DQt.increaseApproval.call(addressJ1L7bQM, uintQLbdrpt, {from: accounts[3]});
//		const boolgHb7vdc = await Token50X100sZ59DQt.setVesting.call(addressEesCQGE, uintShtpCIu, uintUrncjhQ, {from: accounts[4]});
//		await Token50X100sZ59DQt.setLinkingAddresses.call(addressD4ftc5X, addresscNRCNTw, {from: accounts[1]});

		assert.equal(boolRbk6rg, true)
		await expect(Token50X100sZ59DQt.setVesting.call(addressEesCQGE, uintShtpCIu, uintUrncjhQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintBik3u4n = BigInt("1006")
		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintBik3u4n, {from: accounts[0]});
//		await Token50X100bRrfnG.release.call({from: accounts[2]});

		assert.equal(boolbtN9sb2, false)
		await expect(Token50X100bRrfnG.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WagckI1 = await Token50X100.new({from: accounts[0]});
		const addressFUY8tST = accounts[2]
		const addressQBBniUK = accounts[4]
		const uintTr0Xc0h = BigInt("1828")
		const uintAzQpDGX = BigInt("928")
		const addressg2G66YT = accounts[4]
		const addressxY3Qrz = accounts[1]
		const uint256RarzinN = await Token50X100WagckI1.allowance.call(addressQBBniUK, addressFUY8tST, {from: accounts[3]});
//		const bool2lxFZr = await Token50X100WagckI1._transfer.call(addressxY3Qrz, addressg2G66YT, uintAzQpDGX, uintTr0Xc0h, {from: accounts[2]});

		assert.equal(uint256RarzinN, BigInt("0"))
		await expect(Token50X100WagckI1._transfer.call(addressxY3Qrz, addressg2G66YT, uintAzQpDGX, uintTr0Xc0h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bYFFUoa = await Token50X100.new({from: accounts[3]});
		const uintYVseM4 = BigInt("109")
		const addressvnfoWAT = accounts[1]
		const addressuFUNw5r = accounts[4]
		const boolZvg9Vs7 = true
		const addresss9xWYqd = accounts[3]
		const uintDHrfIZI = BigInt("470")
		const addressVYvTs48 = accounts[0]
//		const boolSSvdpy = await Token50X100bYFFUoa.transferFrom.call(addressuFUNw5r, addressvnfoWAT, uintYVseM4, {from: accounts[5]});
//		await Token50X100bYFFUoa.lock.call({from: accounts[3]});
//		await Token50X100bYFFUoa.setWhiteListReceivers.call(addresss9xWYqd, boolZvg9Vs7, {from: accounts[4]});
//		const boolCmbB9gt = await Token50X100bYFFUoa.increaseApproval.call(addressVYvTs48, uintDHrfIZI, {from: accounts[2]});

		await expect(Token50X100bYFFUoa.transferFrom.call(addressuFUNw5r, addressvnfoWAT, uintYVseM4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100jUu0yqY = await Token50X100.new({from: accounts[1]});
		const uintQdAbP4Y = BigInt("1527")
		const uintA03FgZE = BigInt("379")
		const addressrl8ICa = accounts[2]
		const uint6RF3C9 = BigInt("15")
		const addressKbOJ1Rr = accounts[3]
		const uintWH4Zzum = BigInt("1825")
		const addressIiOgJjm = "0x0000000000000000000000000000000000000001"
		const addressyHc41LR = accounts[4]
		const uintguNEwGN = BigInt("1477")
		const address0l9aOj = accounts[2]
		const addressQe8hs4O = accounts[2]
		const boolY2UujIa = await Token50X100jUu0yqY.setVesting.call(addressrl8ICa, uintA03FgZE, uintQdAbP4Y, {from: accounts[1]});
		const booliAYEYi1 = await Token50X100jUu0yqY.increaseApproval.call(addressKbOJ1Rr, uint6RF3C9, {from: accounts[0]});
//		const boolMdri51S = await Token50X100jUu0yqY.issueTokens.call(addressyHc41LR, addressIiOgJjm, uintWH4Zzum, {from: accounts[3]});
//		const booliXSTUd8 = await Token50X100jUu0yqY.transferFrom.call(addressQe8hs4O, address0l9aOj, uintguNEwGN, {from: accounts[3]});

		assert.equal(boolY2UujIa, true)
		assert.equal(booliAYEYi1, true)
		await expect(Token50X100jUu0yqY.issueTokens.call(addressyHc41LR, addressIiOgJjm, uintWH4Zzum, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FYGOS1 = await Token50X100.new({from: accounts[5]});
		const uintKPgimmq = BigInt("899")
		const addressuAo6aS = accounts[0]
		const uintt0nmCs6 = BigInt("1243")
		const addressOsFD9Of = accounts[4]
		const addressazLxMPF = accounts[1]
		const addressdg9a8AC = accounts[4]
		const addressrWrSzU9 = accounts[0]
		const uinthP8GoFA = BigInt("1292")
		const uintf82SdCO = BigInt("488")
		const addressFE542s = accounts[2]
//		const boolacHhfk = await Token50X100FYGOS1.transfer.call(addressuAo6aS, uintKPgimmq, {from: accounts[3]});
//		const boolCnrMIb1 = await Token50X100FYGOS1.issueTokens.call(addressazLxMPF, addressOsFD9Of, uintt0nmCs6, {from: accounts[5]});
//		await Token50X100FYGOS1.setLinkingAddresses.call(addressrWrSzU9, addressdg9a8AC, {from: accounts[0]});
//		await Token50X100FYGOS1.release.call({from: accounts[2]});
//		const boolOlRUQID = await Token50X100FYGOS1.setVesting.call(addressFE542s, uintf82SdCO, uinthP8GoFA, {from: accounts[1]});

		await expect(Token50X100FYGOS1.transfer.call(addressuAo6aS, uintKPgimmq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bYFFUoa = await Token50X100.new({from: accounts[3]});
		const boolZvg9Vs7 = true
		const addressCIeCX6 = accounts[3]
		const uintoOYYR89 = BigInt("460")
		const addressMwW16JJ = accounts[0]
//		await Token50X100bYFFUoa.lock.call({from: accounts[3]});
//		await Token50X100bYFFUoa.setWhiteListReceivers.call(addressCIeCX6, boolZvg9Vs7, {from: accounts[4]});
//		const boolCmbB9gt = await Token50X100bYFFUoa.increaseApproval.call(addressMwW16JJ, uintoOYYR89, {from: accounts[2]});

		await expect(Token50X100bYFFUoa.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bYFFUoa = await Token50X100.new({from: accounts[3]});
		const addressQtqKCtF = accounts[3]
		const uintZnyb5cG = BigInt("109")
		const addressIM0o3Q1 = accounts[1]
		const addressl8UHrZ = accounts[4]
		const addresscwTgs4 = accounts[1]
		const addressyBigkMk = accounts[1]
		const uintZZEU9Tk = BigInt("576")
		const uintCgIUP1C = BigInt("775")
		const addresslkwlzCh = accounts[0]
		const addressBKDCvZ5 = accounts[4]
		const boolZvg9Vs7 = true
		const addressqOllSpx = accounts[3]
		const uintBkDlFEn = BigInt("470")
		const addressLDMUdU = accounts[0]
//		await Token50X100bYFFUoa.setTokenContract.call(addressQtqKCtF, {from: accounts[3]});
//		const boolSSvdpy = await Token50X100bYFFUoa.transferFrom.call(addressl8UHrZ, addressIM0o3Q1, uintZnyb5cG, {from: accounts[5]});
//		const uint256ORxueec = await Token50X100bYFFUoa.allowance.call(addressyBigkMk, addresscwTgs4, {from: accounts[3]});
//		const boolXSo7HU = await Token50X100bYFFUoa._transfer.call(addressBKDCvZ5, addresslkwlzCh, uintCgIUP1C, uintZZEU9Tk, {from: accounts[1]});
//		await Token50X100bYFFUoa.lock.call({from: accounts[3]});
//		await Token50X100bYFFUoa.setWhiteListReceivers.call(addressqOllSpx, boolZvg9Vs7, {from: accounts[4]});
//		const boolCmbB9gt = await Token50X100bYFFUoa.increaseApproval.call(addressLDMUdU, uintBkDlFEn, {from: accounts[2]});

		await expect(Token50X100bYFFUoa.setTokenContract.call(addressQtqKCtF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintAsl50nd = BigInt("1462")
		const uintuRnzLr2 = BigInt("1697")
		const uint2gkzsH = BigInt("948")
		const uintJBQG0Wx = BigInt("1002")
//		const boolBX4VYzZ = await Token50X100bRrfnG.safeLock.call(uintuRnzLr2, uintAsl50nd, {from: accounts[1]});
//		const boolOQ4QhZl = await Token50X100bRrfnG.setMaxLockPeriod.call(uint2gkzsH, {from: accounts[0]});
//		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintJBQG0Wx, {from: accounts[0]});
//		await Token50X100bRrfnG.release.call({from: accounts[2]});

		await expect(Token50X100bRrfnG.safeLock.call(uintuRnzLr2, uintAsl50nd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ct98WSS = await Token50X100.new({from: accounts[5]});
		const uintOEfdSU8 = BigInt("969")
		const addressJiju1VT = "0x0000000000000000000000000000000000000001"
		const boolzLL14m2 = false
		const addressUAh4abi = accounts[5]
		const uinta9qxSE2 = BigInt("137")
		const boolDEABps = await Token50X100ct98WSS.increaseApproval.call(addressJiju1VT, uintOEfdSU8, {from: accounts[5]});
//		await Token50X100ct98WSS.setWhiteList.call(addressUAh4abi, boolzLL14m2, {from: accounts[5]});
//		const boolgVTnfVE = await Token50X100ct98WSS.setMaxLockPeriod.call(uinta9qxSE2, {from: accounts[1]});

		assert.equal(boolDEABps, true)
		await expect(Token50X100ct98WSS.setWhiteList.call(addressUAh4abi, boolzLL14m2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintJE5ZzYI = BigInt("1006")
		const uintiACO6lY = BigInt("650")
		const addresshAHIn89 = accounts[0]
		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintJE5ZzYI, {from: accounts[0]});
		const boolh6lPlhS = await Token50X100bRrfnG.decreaseApproval.call(addresshAHIn89, uintiACO6lY, {from: accounts[2]});
//		await Token50X100bRrfnG.release.call({from: accounts[2]});

		assert.equal(boolbtN9sb2, false)
		assert.equal(boolh6lPlhS, true)
		await expect(Token50X100bRrfnG.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bYFFUoa = await Token50X100.new({from: accounts[3]});
		const uintfXQjVJP = BigInt("460")
		const addressYuVEzM = accounts[0]
		const uinthAnUVl0 = BigInt("904")
		const address25zNNs = accounts[1]
//		await Token50X100bYFFUoa.lock.call({from: accounts[3]});
//		const boolCmbB9gt = await Token50X100bYFFUoa.increaseApproval.call(addressYuVEzM, uintfXQjVJP, {from: accounts[2]});
//		const boolpA2Dm3R = await Token50X100bYFFUoa.approve.call(address25zNNs, uinthAnUVl0, {from: accounts[1]});

		await expect(Token50X100bYFFUoa.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bYFFUoa = await Token50X100.new({from: accounts[3]});
		const addressakwX44A = accounts[2]
		const uintccicrl = BigInt("1979")
		const addressJ0SJ6n9 = accounts[0]
		const uintF69mh8i = BigInt("497")
		const addressto0JQz2 = accounts[0]
//		await Token50X100bYFFUoa.lock.call({from: accounts[3]});
//		const uint256Qp6TEoA = await Token50X100bYFFUoa.balanceOf.call(addressakwX44A, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmWCVhGg = await Token50X100bYFFUoa.decreaseApproval.call(addressJ0SJ6n9, uintccicrl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCmbB9gt = await Token50X100bYFFUoa.increaseApproval.call(addressto0JQz2, uintF69mh8i, {from: accounts[2]});

		await expect(Token50X100bYFFUoa.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const addresszQ54WnJ = accounts[3]
		const addressIV2esW4 = accounts[4]
		const uintkINUoPZ = BigInt("161")
//		await Token50X100bRrfnG.setLinkingAddresses.call(addressIV2esW4, addresszQ54WnJ, {from: accounts[3]});
//		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintkINUoPZ, {from: accounts[0]});

		await expect(Token50X100bRrfnG.setLinkingAddresses.call(addressIV2esW4, addresszQ54WnJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintJj7ONnm = BigInt("205")
		const string604UDk = "BsSM7PGh3uCJ2wY68ahtn8LkAp5aodig7aLPaU4vFOclPDvd7byuqFjx3NrWr4m0LdAu2CALuowJvs"
		const stringFRfqrRn = "kpuO4HyZmhdgC0R6sQaxg7Rs3yKiwbrcI9sCTa6igXvb"
		const uintGkHBs3 = BigInt("29")
		const uintKEBkoqz = BigInt("1462")
		const uintLj16pAQ = BigInt("1723")
//		await Token50X100bRrfnG.setSymbolNameDecimals.call(stringFRfqrRn, string604UDk, uintJj7ONnm, {from: accounts[3]});
//		await Token50X100bRrfnG.release.call({from: accounts[5]});
//		const bool0S7r5s = await Token50X100bRrfnG.setMaxLockPeriod.call(uintGkHBs3, {from: accounts[0]});
//		const boolBX4VYzZ = await Token50X100bRrfnG.safeLock.call(uintLj16pAQ, uintKEBkoqz, {from: accounts[1]});

		await expect(Token50X100bRrfnG.setSymbolNameDecimals.call(stringFRfqrRn, string604UDk, uintJj7ONnm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100QocKlh = await Token50X100.new({from: accounts[2]});
		const uintF6W2Pz = BigInt("43")
		const uint2PZz4u = BigInt("1863")
		const addressDrlRQoH = accounts[5]
		const addressZsnXUpk = accounts[0]
		const uintU8zWrGw = BigInt("1747")
		const uint095Z9o = BigInt("841")
		const uintotzXo4d = BigInt("145")
		const addressP21YMCH = accounts[1]
		const addressrek8sId = accounts[4]
		const addressQBbWwmG = "0x0000000000000000000000000000000000000001"
//		const boolhQHiUY6 = await Token50X100QocKlh._transfer.call(addressZsnXUpk, addressDrlRQoH, uint2PZz4u, uintF6W2Pz, {from: accounts[2]});
//		const boolEFbi5W2 = await Token50X100QocKlh.safeLock.call(uint095Z9o, uintU8zWrGw, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100QocKlh.lock.call({from: accounts[2]});
//		const boolUPQOd9o = await Token50X100QocKlh.transfer.call(addressP21YMCH, uintotzXo4d, {from: accounts[5]});
//		const uint256FAYTz9w = await Token50X100QocKlh.allowance.call(addressQBbWwmG, addressrek8sId, {from: accounts[3]});

		await expect(Token50X100QocKlh._transfer.call(addressZsnXUpk, addressDrlRQoH, uint2PZz4u, uintF6W2Pz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintbFZRcc = BigInt("1006")
		const uinteT85CmH = BigInt("1412")
		const addresswXFbOD = "0x0000000000000000000000000000000000000000"
		const uintpKZ0j5x = BigInt("1904")
		const addressj53VzK8 = "0x0000000000000000000000000000000000000001"
		const addressI6pchki = accounts[1]
		const uintU1YW5HE = BigInt("2029")
		const uinthOUJeTj = BigInt("965")
		const addressxzz1BRE = accounts[1]
		const addressU7uQJ1v = accounts[5]
		const uintrXtskiB = BigInt("261")
		const addressSasgZj0 = accounts[5]
		const addressE4Yzocm = accounts[4]
		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintbFZRcc, {from: accounts[0]});
//		const boolBZTnRsK = await Token50X100bRrfnG.transfer.call(addresswXFbOD, uinteT85CmH, {from: accounts[2]});
//		const bool8EgSlS = await Token50X100bRrfnG.transferFrom.call(addressI6pchki, addressj53VzK8, uintpKZ0j5x, {from: accounts[2]});
//		const boolASruAoQ = await Token50X100bRrfnG._transfer.call(addressU7uQJ1v, addressxzz1BRE, uinthOUJeTj, uintU1YW5HE, {from: accounts[5]});
//		const boolNj0WlU = await Token50X100bRrfnG.transfer.call(addressSasgZj0, uintrXtskiB, {from: accounts[3]});
//		const addressydGkGGV = await Token50X100bRrfnG.transferOwnership.call(addressE4Yzocm, {from: accounts[4]});

		assert.equal(boolbtN9sb2, false)
		await expect(Token50X100bRrfnG.transfer.call(addresswXFbOD, uinteT85CmH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintZ5jrIn = BigInt("632")
		const addressH4MPKPC = accounts[0]
		const addressW08F278 = accounts[0]
		const addressbWgDoEs = accounts[0]
		const uint256vKEJLWI = await Token50X100bRrfnG.totalSupply.call({from: accounts[0]});
		const boolh6lPlhS = await Token50X100bRrfnG.decreaseApproval.call(addressH4MPKPC, uintZ5jrIn, {from: accounts[2]});
//		await Token50X100bRrfnG.setLinkingAddresses.call(addressbWgDoEs, addressW08F278, {from: accounts[3]});

		assert.equal(boolh6lPlhS, true)
		assert.equal(uint256vKEJLWI, BigInt("4714285714285710"))
		await expect(Token50X100bRrfnG.setLinkingAddresses.call(addressbWgDoEs, addressW08F278, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const addressh9mrqeK = accounts[1]
		const uintaFIPkgZ = BigInt("513")
		const addressR9JJdj = accounts[1]
		const uintIe1Vjdm = BigInt("1462")
		const uintyHnSyB4 = BigInt("1696")
		const addressBqHEIa = await Token50X100bRrfnG.transferOwnership.call(addressh9mrqeK, {from: accounts[3]});
		const booljq6kqu = await Token50X100bRrfnG.increaseApproval.call(addressR9JJdj, uintaFIPkgZ, {from: accounts[4]});
//		const boolBX4VYzZ = await Token50X100bRrfnG.safeLock.call(uintyHnSyB4, uintIe1Vjdm, {from: accounts[1]});

		assert.equal(booljq6kqu, true)
		await expect(Token50X100bRrfnG.safeLock.call(uintyHnSyB4, uintIe1Vjdm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintJiwAuEv = BigInt("161")
		const uintWJdaea = BigInt("2015")
		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintJiwAuEv, {from: accounts[0]});
//		await Token50X100bRrfnG.release.call({from: accounts[3]});
//		const boolGI0E11T = await Token50X100bRrfnG.setMaxLockPeriod.call(uintWJdaea, {from: accounts[1]});

		assert.equal(boolbtN9sb2, false)
		await expect(Token50X100bRrfnG.release.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qmqBswP = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addresski01DFn = accounts[3]
		const uintA89Y2So = BigInt("642")
		const uintoCKYpKH = BigInt("1568")
		const addressPUFKEay = accounts[0]
		const addresslUEvWGK = await Token50X100qmqBswP.setOriginalContract.call(addresski01DFn, {from: accounts[3]});
		const boolvW2IstY = await Token50X100qmqBswP.setMaxLockPeriod.call(uintA89Y2So, {from: accounts[2]});
		const boolvJiPUCD = await Token50X100qmqBswP.increaseApproval.call(addressPUFKEay, uintoCKYpKH, {from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100bRrfnG = await Token50X100.new({from: accounts[3]});
		const uintsSnMjC3 = BigInt("1932")
		const boolL2hIvHY = true
		const addresswKiEMLs = accounts[1]
		const uintB0vBjuO = BigInt("183")
		const boolQ3SBG1o = await Token50X100bRrfnG.setMaxLockPeriod.call(uintsSnMjC3, {from: accounts[4]});
//		await Token50X100bRrfnG.setWhiteListReceivers.call(addresswKiEMLs, boolL2hIvHY, {from: accounts[3]});
//		const boolbtN9sb2 = await Token50X100bRrfnG.setMaxLockPeriod.call(uintB0vBjuO, {from: accounts[0]});

		assert.equal(boolQ3SBG1o, false)
		await expect(Token50X100bRrfnG.setWhiteListReceivers.call(addresswKiEMLs, boolL2hIvHY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})