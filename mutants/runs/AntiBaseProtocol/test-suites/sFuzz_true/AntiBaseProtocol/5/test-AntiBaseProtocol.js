const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqv3Tlrf = await AntiBaseProtocol.new({from: accounts[1]});
		const uintAaNMAB6 = BigInt("1811")
		const addressZ5V1KU8 = "0x0000000000000000000000000000000000000001"
		await AntiBaseProtocolqv3Tlrf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolKvLYhm3 = await AntiBaseProtocolqv3Tlrf.decreaseAllowance.call(addressZ5V1KU8, uintAaNMAB6, {from: accounts[2]});

		await expect(AntiBaseProtocolqv3Tlrf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringqYTnsmf = "qAkxFbAR8nMKbEaunvvExAzER3cc7KTnFpbO6sR8mVxTe7xXEtGAwGewOR3JhlFa9hBihTez"
		const stringYvhI3qb = "wbKksLCv8ZOt"
		const uintYnijhRX = BigInt("74")
		const AntiBaseProtocoldJ1BmF = await AntiBaseProtocol.new(stringqYTnsmf, stringYvhI3qb, uintYnijhRX, {from: "0x0000000000000000000000000000000000000001"});
		const uintSzIhMna = BigInt("432")
		const addressRnGClbN = accounts[2]
		const uintR9hwzwJ = BigInt("261")
		const addresssGObQ5z = accounts[1]
		const addressp6iCdTn = accounts[2]
		const uintqFpGNlW = BigInt("1007")
		const boolHoHgzk5 = await AntiBaseProtocoldJ1BmF.approve.call(addressRnGClbN, uintSzIhMna, {from: accounts[5]});
		const addressS5StwmW = await AntiBaseProtocoldJ1BmF._approve.call(addressp6iCdTn, addresssGObQ5z, uintR9hwzwJ, {from: accounts[4]});
		const boolBjWFCwo = await AntiBaseProtocoldJ1BmF.isOwner.call({from: accounts[2]});
		const uint256SZ1gZH8 = await AntiBaseProtocoldJ1BmF.burn.call(uintqFpGNlW, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolQ6T1oWK = await AntiBaseProtocol.new({from: accounts[0]});
		const address1qcJ9s = "0x0000000000000000000000000000000000000001"
		const addressdR1ZQpN = accounts[4]
		const addressf8cyYcZ = await AntiBaseProtocolQ6T1oWK.transferOwnership.call(address1qcJ9s, {from: accounts[1]});
		const uint8l3m6Rwr = await AntiBaseProtocolQ6T1oWK.decimals.call({from: accounts[5]});
		const addressYKOyU3e = await AntiBaseProtocolQ6T1oWK.transferOwnership.call(addressdR1ZQpN, {from: accounts[3]});

		await expect(AntiBaseProtocolQ6T1oWK.transferOwnership.call(address1qcJ9s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkKdabMR = await AntiBaseProtocol.new({from: accounts[1]});
		const uintiU85ny = BigInt("1428")
		const addressi29XHJV = accounts[3]
		const addressBWiLnP6 = accounts[0]
		const uint8gaQe88E = await AntiBaseProtocolkKdabMR.decimals.call({from: accounts[3]});
		const addressFmdlOf8 = await AntiBaseProtocolkKdabMR._approve.call(addressBWiLnP6, addressi29XHJV, uintiU85ny, {from: accounts[4]});

		assert.equal(uint8gaQe88E, BigInt("18"))
		await expect(AntiBaseProtocolkKdabMR._approve.call(addressBWiLnP6, addressi29XHJV, uintiU85ny, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintbMgzD6i = BigInt("471")
		const addressCFwuQRb = accounts[0]
		const addressuCkOEO6 = accounts[2]
		const uintup07bEH = BigInt("1764")
		const addressO7iYSV = accounts[5]
		const uintLSPZ8yv = BigInt("1076")
		const addressZIlv74 = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressuCkOEO6, addressCFwuQRb, uintbMgzD6i, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressO7iYSV, uintup07bEH, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addressZIlv74, uintLSPZ8yv, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressuCkOEO6, addressCFwuQRb, uintbMgzD6i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqv3Tlrf = await AntiBaseProtocol.new({from: accounts[1]});
		const uintNWNyWEl = BigInt("1669")
		const addresszXNfOWt = accounts[2]
		const uintveTuxSX = BigInt("1983")
		const addressNyMvD3x = accounts[3]
		const uintPPrNkqa = BigInt("1284")
		const addressfPDiX8h = "0x0000000000000000000000000000000000000001"
		const boolL8CyeOb = await AntiBaseProtocolqv3Tlrf.approve.call(addresszXNfOWt, uintNWNyWEl, {from: accounts[0]});
		await AntiBaseProtocolqv3Tlrf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGMXZztI = await AntiBaseProtocolqv3Tlrf._mint.call(addressNyMvD3x, uintveTuxSX, {from: accounts[3]});
		const addresssbUOmcf = await AntiBaseProtocolqv3Tlrf.burnFrom.call(addressfPDiX8h, uintPPrNkqa, {from: accounts[3]});

		assert.equal(boolL8CyeOb, true)
		await expect(AntiBaseProtocolqv3Tlrf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const addressf1CO1rg = accounts[5]
		const uintOkQsT7V = BigInt("471")
		const addressACGXzLs = accounts[0]
		const addressvtt2J82 = accounts[2]
		const uintizlbS0b = BigInt("1217")
		const uintbY6Y1Um = BigInt("1768")
		const addressiJvMLfj = accounts[5]
		const uintPFWDtAs = BigInt("1076")
		const addresszngC07 = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const addressha4x9Ii = await AntiBaseProtocolk7bOjV.transferOwnership.call(addressf1CO1rg, {from: accounts[2]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressvtt2J82, addressACGXzLs, uintOkQsT7V, {from: accounts[3]});
		const uint256b8gb1NU = await AntiBaseProtocolk7bOjV.findBurnFee.call(uintizlbS0b, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressiJvMLfj, uintbY6Y1Um, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addresszngC07, uintPFWDtAs, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressvtt2J82, addressACGXzLs, uintOkQsT7V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintGQug03H = BigInt("1717")
		const uintzNiMuor = BigInt("719")
		const addressBnsSRMy = accounts[3]
		const uintULtRA33 = BigInt("471")
		const addressWsnN4Mp = accounts[0]
		const addresstpQqQZx = accounts[2]
		const uintdz9HDCE = BigInt("1764")
		const addressoOW3W28 = accounts[5]
		const uintatybaam = BigInt("1076")
		const addressvGfqTR = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const uint256aBkJjr = await AntiBaseProtocolk7bOjV.findRewardFee.call(uintGQug03H, {from: accounts[3]});
		const addressoJJvPy4 = await AntiBaseProtocolk7bOjV.burnFrom.call(addressBnsSRMy, uintzNiMuor, {from: accounts[4]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addresstpQqQZx, addressWsnN4Mp, uintULtRA33, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressoOW3W28, uintdz9HDCE, {from: "0x0000000000000000000000000000000000000001"});
		const stringE5wJyHj = await AntiBaseProtocolk7bOjV.name.call({from: accounts[2]});
		const stringbijUL1r = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[3]});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addressvGfqTR, uintatybaam, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		assert.equal(uint256aBkJjr, BigInt("90"))
		await expect(AntiBaseProtocolk7bOjV.burnFrom.call(addressBnsSRMy, uintzNiMuor, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintM2B4o2u = BigInt("1764")
		const addressRebTPU = accounts[5]
		const uint38t5Ar = BigInt("1076")
		const addresssQFj6Gh = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressRebTPU, uintM2B4o2u, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addresssQFj6Gh, uint38t5Ar, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		await expect(AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressRebTPU, uintM2B4o2u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintzxAKQ7 = BigInt("471")
		const addresslebfUyS = accounts[0]
		const addressVBv3SFQ = accounts[2]
		const uintKkXHta = BigInt("1764")
		const addressrXx1N8n = accounts[5]
		const uintqADZrl5 = BigInt("1076")
		const addressKUBOAka = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const stringyXwhqT5 = await AntiBaseProtocolk7bOjV.name.call({from: accounts[4]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressVBv3SFQ, addresslebfUyS, uintzxAKQ7, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressrXx1N8n, uintKkXHta, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addressKUBOAka, uintqADZrl5, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		assert.equal(stringyXwhqT5, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressVBv3SFQ, addresslebfUyS, uintzxAKQ7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbrKIXlV = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVvsQXE9 = BigInt("1892")
		const addresscW85imx = accounts[3]
		const address8JUfHj = accounts[2]
		const uintX0rt3SH = BigInt("1156")
		const addresse1frR3y = accounts[4]
		const uintmI7DSOJ = BigInt("465")
		const addressLSlcqX = await AntiBaseProtocolbrKIXlV._burn.call(addresscW85imx, uintVvsQXE9, {from: accounts[1]});
		const uint256ZvqV7Vx = await AntiBaseProtocolbrKIXlV.balanceOf.call(address8JUfHj, {from: "0x0000000000000000000000000000000000000001"});
		const boolOLadvU = await AntiBaseProtocolbrKIXlV.increaseAllowance.call(addresse1frR3y, uintX0rt3SH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yWGUR3 = await AntiBaseProtocolbrKIXlV.burn.call(uintmI7DSOJ, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintN3OAcNu = BigInt("471")
		const addressjREIIlo = accounts[0]
		const addressRQOOhCD = accounts[3]
		const uintRTn02pX = BigInt("1764")
		const address98Gio3 = accounts[5]
		const uintbri8hs = BigInt("1076")
		const addresse0UAEhC = accounts[1]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressRQOOhCD, addressjREIIlo, uintN3OAcNu, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(address98Gio3, uintRTn02pX, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addresse0UAEhC, uintbri8hs, {from: accounts[3]});

		assert.equal(stringCNpASMV, "ABASE")
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressRQOOhCD, addressjREIIlo, uintN3OAcNu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqv3Tlrf = await AntiBaseProtocol.new({from: accounts[1]});
		const uintoAf0wNJ = BigInt("486")
		const uint256a60o2Z = await AntiBaseProtocolqv3Tlrf.burn.call(uintoAf0wNJ, {from: accounts[5]});
		await AntiBaseProtocolqv3Tlrf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolqv3Tlrf.burn.call(uintoAf0wNJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintoQ1gJBH = BigInt("89")
		const addresszQd45wy = accounts[0]
		const uintzeiwBee = BigInt("1372")
		const addressLQAMdNS = "0x0000000000000000000000000000000000000001"
		const addressQ3FIsjT = accounts[1]
		const uintlrd8tdc = BigInt("471")
		const addressGTlvvP5 = accounts[1]
		const addresshIMUPm6 = accounts[2]
		const uintYcs8R50 = BigInt("1764")
		const addressLvE24EX = accounts[5]
		const uintf7Yol0t = BigInt("1076")
		const addressJt4upv3 = accounts[1]
		const boolgX27Khg = await AntiBaseProtocolk7bOjV.increaseAllowance.call(addresszQd45wy, uintoQ1gJBH, {from: accounts[0]});
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const boollgkEQRx = await AntiBaseProtocolk7bOjV.transferFrom.call(addressQ3FIsjT, addressLQAMdNS, uintzeiwBee, {from: accounts[2]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addresshIMUPm6, addressGTlvvP5, uintlrd8tdc, {from: accounts[3]});
		const bool8IPC5F = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressLvE24EX, uintYcs8R50, {from: "0x0000000000000000000000000000000000000001"});
		const addressmkYDEDX = await AntiBaseProtocolk7bOjV._burn.call(addressJt4upv3, uintf7Yol0t, {from: accounts[3]});

		assert.equal(boolgX27Khg, true)
		assert.equal(stringCNpASMV, "ABASE")
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressQ3FIsjT, addressLQAMdNS, uintzeiwBee, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVRec25w = await AntiBaseProtocol.new({from: accounts[2]});
		const uintt4whDK = BigInt("52")
		const addressWFpUMtC = accounts[3]
		const addressVVY4oMo = accounts[3]
		const addressuq4bbxc = accounts[1]
		const boolzcipc7o = await AntiBaseProtocolVRec25w.increaseAllowance.call(addressWFpUMtC, uintt4whDK, {from: accounts[2]});
		const uint256bBZKs0 = await AntiBaseProtocolVRec25w.allowance.call(addressuq4bbxc, addressVVY4oMo, {from: accounts[2]});
		const stringrJKHGcU = await AntiBaseProtocolVRec25w.name.call({from: accounts[2]});
		const boolMvJxLk = await AntiBaseProtocolVRec25w.isOwner.call({from: accounts[3]});

		assert.equal(boolMvJxLk, false)
		assert.equal(boolzcipc7o, true)
		assert.equal(stringrJKHGcU, "https://t.me/antibaseprotocol")
		assert.equal(uint256bBZKs0, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolt6zBrpE = await AntiBaseProtocol.new({from: accounts[3]});
		const addressdcAmx2f = accounts[4]
		const addresst8LrTPc = accounts[3]
		const uintxS1PBEA = BigInt("1959")
		const addressBljmfL = accounts[5]
		const uint256fP0kCwF = await AntiBaseProtocolt6zBrpE.allowance.call(addresst8LrTPc, addressdcAmx2f, {from: accounts[4]});
		const boolQ6sSpJu = await AntiBaseProtocolt6zBrpE.approve.call(addressBljmfL, uintxS1PBEA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BJuYMpw = await AntiBaseProtocolt6zBrpE.totalSupply.call({from: accounts[1]});

		assert.equal(boolQ6sSpJu, true)
		assert.equal(uint256BJuYMpw, BigInt("31250000000000000000"))
		assert.equal(uint256fP0kCwF, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintPO7dWpJ = BigInt("274")
		const addresspPpREEf = accounts[0]
		const addressRjO70An = accounts[3]
		const uintMp2Pvw5 = BigInt("471")
		const addressjDI1Fo2 = accounts[0]
		const addresssgc2Se = accounts[3]
		const boolmBV1Bn = await AntiBaseProtocolk7bOjV.transfer.call(addresspPpREEf, uintPO7dWpJ, {from: accounts[0]});
		await AntiBaseProtocolk7bOjV.renounceOwnership.call({from: accounts[1]});
		const addressYKQMZK = await AntiBaseProtocolk7bOjV._transferOwnership.call(addressRjO70An, {from: accounts[1]});
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addresssgc2Se, addressjDI1Fo2, uintMp2Pvw5, {from: accounts[3]});

		await expect(AntiBaseProtocolk7bOjV.transfer.call(addresspPpREEf, uintPO7dWpJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const addressattk7p = accounts[5]
		const uintEIoL3Cc = BigInt("471")
		const addresshWtO1ov = accounts[0]
		const addressEcqcap = accounts[2]
		const uintbEqlV4L = BigInt("1298")
		const addressCMkbad6 = accounts[4]
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const uint256N0lkZ8O = await AntiBaseProtocolk7bOjV.balanceOf.call(addressattk7p, {from: accounts[1]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressEcqcap, addresshWtO1ov, uintEIoL3Cc, {from: accounts[3]});
		const boolDQSGGGT = await AntiBaseProtocolk7bOjV.decreaseAllowance.call(addressCMkbad6, uintbEqlV4L, {from: accounts[1]});

		assert.equal(stringCNpASMV, "ABASE")
		assert.equal(uint256N0lkZ8O, BigInt("0"))
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressEcqcap, addresshWtO1ov, uintEIoL3Cc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const addressYIihrkF = accounts[4]
		const uintOo36mA = BigInt("471")
		const addressC80X9NW = accounts[1]
		const addressALDxPrV = accounts[2]
		const addressqkf5P95 = accounts[4]
		const addressZNogcfc = accounts[1]
		const uint256vSIakdw = await AntiBaseProtocolk7bOjV.balanceOf.call(addressYIihrkF, {from: accounts[3]});
		const addresszbket5 = await AntiBaseProtocolk7bOjV.owner.call({from: accounts[1]});
		const stringCNpASMV = await AntiBaseProtocolk7bOjV.symbol.call({from: accounts[1]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressALDxPrV, addressC80X9NW, uintOo36mA, {from: accounts[3]});
		const uint256d6kjosL = await AntiBaseProtocolk7bOjV.allowance.call(addressZNogcfc, addressqkf5P95, {from: accounts[2]});

		assert.equal(addresszbket5, 0x42e4FEf127621846ba41fED5C079f6F7B6d7d122)
		assert.equal(stringCNpASMV, "ABASE")
		assert.equal(uint256vSIakdw, BigInt("0"))
		await expect(AntiBaseProtocolk7bOjV.transferFrom.call(addressALDxPrV, addressC80X9NW, uintOo36mA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPrKRtis = accounts[0]
		const uintdNKxios = BigInt("471")
		const addressboJ1vqD = accounts[0]
		const addressRyxC7gd = accounts[2]
		const addressn9Jc8ki = await AntiBaseProtocolk7bOjV.transferOwnership.call(addressPrKRtis, {from: accounts[2]});
		await AntiBaseProtocolk7bOjV.renounceOwnership.call({from: accounts[2]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressRyxC7gd, addressboJ1vqD, uintdNKxios, {from: accounts[3]});

		await expect(AntiBaseProtocolk7bOjV.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolk7bOjV = await AntiBaseProtocol.new({from: accounts[2]});
		const addressLc7AqwQ = accounts[3]
		const addressC2mwW4r = accounts[2]
		const uintY3lh7t = BigInt("731")
		const addressjOmKN5D = accounts[2]
		const uintk90w3p = BigInt("471")
		const addressqXLZVQM = accounts[0]
		const addressSLMsz80 = accounts[2]
		const uint256f9eFTf0 = await AntiBaseProtocolk7bOjV.allowance.call(addressC2mwW4r, addressLc7AqwQ, {from: accounts[4]});
		const addressg6apfum = await AntiBaseProtocolk7bOjV.burnFrom.call(addressjOmKN5D, uintY3lh7t, {from: accounts[5]});
		const boolhbncKq = await AntiBaseProtocolk7bOjV.transferFrom.call(addressSLMsz80, addressqXLZVQM, uintk90w3p, {from: accounts[3]});

		assert.equal(uint256f9eFTf0, BigInt("0"))
		await expect(AntiBaseProtocolk7bOjV.burnFrom.call(addressjOmKN5D, uintY3lh7t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqv3Tlrf = await AntiBaseProtocol.new({from: accounts[1]});
		const addressftNVH84 = accounts[0]
		const uintHKdd42n = BigInt("17")
		const addressTHh8OMh = accounts[0]
		const addressZHqcKns = accounts[2]
		const addressFo3LWv2 = accounts[3]
		const uint7qn7vU = BigInt("1116")
		const addressm8YbpP1 = accounts[3]
		const addresstjkNqPo = accounts[4]
		const uint256PMLo17a = await AntiBaseProtocolqv3Tlrf.totalSupply.call({from: accounts[0]});
		const uint256XGlgmES = await AntiBaseProtocolqv3Tlrf.balanceOf.call(addressftNVH84, {from: accounts[2]});
		const boolXc1plld = await AntiBaseProtocolqv3Tlrf.transfer.call(addressTHh8OMh, uintHKdd42n, {from: accounts[1]});
		const uint256JQT2UJk = await AntiBaseProtocolqv3Tlrf.allowance.call(addressFo3LWv2, addressZHqcKns, {from: accounts[2]});
		const addresscUbwvv1 = await AntiBaseProtocolqv3Tlrf._approve.call(addresstjkNqPo, addressm8YbpP1, uint7qn7vU, {from: accounts[2]});

		assert.equal(uint256PMLo17a, BigInt("31250000000000000000"))
		assert.equal(uint256XGlgmES, BigInt("0"))
		await expect(AntiBaseProtocolqv3Tlrf.transfer.call(addressTHh8OMh, uintHKdd42n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTyHASu = await AntiBaseProtocol.new({from: accounts[2]});
		const uintIUHsvz = BigInt("872")
		const addressq5E3W0J = accounts[3]
		const uint90nAOd = BigInt("1341")
		const addressZDpxUDk = "0x00000000000000000000000000000000000000-1"
		const uintSZmSYbg = BigInt("130")
		const boolOQsjlN8 = await AntiBaseProtocolTyHASu.approve.call(addressq5E3W0J, uintIUHsvz, {from: "0x0000000000000000000000000000000000000001"});
		const boolkSIeZaW = await AntiBaseProtocolTyHASu.transfer.call(addressZDpxUDk, uint90nAOd, {from: accounts[4]});
		const uint256hiSCN8M = await AntiBaseProtocolTyHASu.findBurnFee.call(uintSZmSYbg, {from: accounts[1]});

		assert.equal(boolOQsjlN8, true)
		await expect(AntiBaseProtocolTyHASu.transfer.call(addressZDpxUDk, uint90nAOd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})