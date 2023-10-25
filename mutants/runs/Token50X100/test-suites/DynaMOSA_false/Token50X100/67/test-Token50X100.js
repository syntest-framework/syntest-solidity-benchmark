const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100PswhTnN = await Token50X100.new({from: accounts[0]});
		const uintIXBybwJ = BigInt("21")
		const stringjVOGHH8 = "8A3DdfAQw5Yts28KVmGD6EMx4bS2dCLiBdbq4sGA1JgU3D57w2ITYEtt"
		const stringepDjQm1 = "1xI1Nt1Cm1Uy815I4lJqxQKW2NHqoUO3g54"
		const uintr3qx7SP = BigInt("993")
		const uintM78CZl7 = BigInt("1770")
		const addressUt5qs8R = accounts[3]
		const uinteOceau7 = BigInt("1386")
		const uinttIuHLH1 = BigInt("1359")
		const addresszGS6iKu = accounts[2]
		const addressE1E4Of4 = accounts[4]
		const boolrps511n = await Token50X100PswhTnN.setSymbolNameDecimals.call(stringepDjQm1, stringjVOGHH8, uintIXBybwJ, {from: accounts[3]});
		await Token50X100PswhTnN.release.call({from: accounts[4]});
		const boolNGUO6Z8 = await Token50X100PswhTnN.setVesting.call(addressUt5qs8R, uintM78CZl7, uintr3qx7SP, {from: accounts[3]});
		const booldHYLSOR = await Token50X100PswhTnN._transfer.call(addressE1E4Of4, addresszGS6iKu, uinttIuHLH1, uinteOceau7, {from: accounts[2]});

		await expect(Token50X100PswhTnN.setSymbolNameDecimals.call(stringepDjQm1, stringjVOGHH8, uintIXBybwJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YqYFoMG = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTtYKRCm = BigInt("1589")
		const uintXOINa0 = BigInt("1646")
		const addressonvSXrS = accounts[0]
		const addressUa8kZSa = accounts[0]
		const uintR60TJlt = BigInt("1224")
		const addressk5QMXUq = accounts[5]
		const addressKYRz6aG = accounts[1]
		const uintyNtavjG = BigInt("794")
		const uintBv0Sd6C = BigInt("138")
		const addressOsERV72 = accounts[5]
		const boolPONVru = await Token50X100YqYFoMG._transfer.call(addressUa8kZSa, addressonvSXrS, uintXOINa0, uintTtYKRCm, {from: accounts[1]});
		const boolTznXYmC = await Token50X100YqYFoMG.transferFrom.call(addressKYRz6aG, addressk5QMXUq, uintR60TJlt, {from: accounts[0]});
		const boolSt0FZg4 = await Token50X100YqYFoMG.setVesting.call(addressOsERV72, uintBv0Sd6C, uintyNtavjG, {from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100yXJf87c = await Token50X100.new({from: accounts[3]});
		const uintUhDfgNF = BigInt("36")
		const addressK3aVBIE = accounts[0]
		const addressj64d2EQ = accounts[5]
		const uinteOA3WG = BigInt("941")
		const uintzp1TtN = BigInt("552")
		const addressPZy08tu = accounts[4]
		const uintci8BYsL = BigInt("6")
		const stringQ8KzqT0 = "PV7KK58qOm6Hb3WyAX"
		const stringu2VebZM = "Rw4RkJk9dGvBuIHEqrvUz"
		const addressKK3zY9A = accounts[3]
		const boolDLO00fz = await Token50X100yXJf87c.issueTokens.call(addressj64d2EQ, addressK3aVBIE, uintUhDfgNF, {from: accounts[2]});
		const boolyTGvLut = await Token50X100yXJf87c.setVesting.call(addressPZy08tu, uintzp1TtN, uinteOA3WG, {from: accounts[3]});
		await Token50X100yXJf87c.setSymbolNameDecimals.call(stringu2VebZM, stringQ8KzqT0, uintci8BYsL, {from: accounts[3]});
		await Token50X100yXJf87c.setTokenContract.call(addressKK3zY9A, {from: accounts[1]});

		await expect(Token50X100yXJf87c.issueTokens.call(addressj64d2EQ, addressK3aVBIE, uintUhDfgNF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xEmRvA6 = await Token50X100.new({from: accounts[0]});
		const uintNu9w3IA = BigInt("636")
		const boolZOUAAUQ = false
		const addressWBJc3a3 = accounts[2]
		const uintBXPTBVA = BigInt("181")
		const addressJkp2JUC = accounts[2]
		const addressoo0ORm = accounts[4]
		const uintNvCQ2Up = BigInt("850")
		const addressvvPFMl = accounts[5]
		const boolnTzDJgT = await Token50X100xEmRvA6.setMaxLockPeriod.call(uintNu9w3IA, {from: accounts[4]});
		await Token50X100xEmRvA6.setWhiteList.call(addressWBJc3a3, boolZOUAAUQ, {from: accounts[5]});
		const boolqRcQMOv = await Token50X100xEmRvA6.transferFrom.call(addressoo0ORm, addressJkp2JUC, uintBXPTBVA, {from: accounts[3]});
		const boolanJV01 = await Token50X100xEmRvA6.increaseApproval.call(addressvvPFMl, uintNvCQ2Up, {from: accounts[0]});

		assert.equal(boolnTzDJgT, false)
		await expect(Token50X100xEmRvA6.setWhiteList.call(addressWBJc3a3, boolZOUAAUQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintsMvPLcV = BigInt("601")
		const addressd1RSRjQ = accounts[1]
		const uintzqdX8df = BigInt("636")
		const uintjrHjrw = BigInt("1914")
		const uintHdIsFb = BigInt("963")
		const uintDm9reH1 = BigInt("390")
		const uintU9IQQgM = BigInt("997")
		const addressDX3tdFZ = accounts[4]
		const addresshYxF9dB = accounts[3]
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressd1RSRjQ, uintsMvPLcV, {from: accounts[2]});
		const boolHsCyzgq = await Token50X100TL7vWM4.safeLock.call(uintjrHjrw, uintzqdX8df, {from: accounts[1]});
		const boolbBeeN5 = await Token50X100TL7vWM4.safeLock.call(uintDm9reH1, uintHdIsFb, {from: accounts[1]});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addresshYxF9dB, addressDX3tdFZ, uintU9IQQgM, {from: accounts[0]});

		await expect(Token50X100TL7vWM4.transfer.call(addressd1RSRjQ, uintsMvPLcV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100y2g2aF4 = await Token50X100.new({from: accounts[4]});
		const addressD75zXYP = accounts[4]
		const addressT4OwmKU = accounts[1]
		const uinttM6e7fm = BigInt("1389")
		const uintxy8Qc7F = BigInt("1444")
		const uintGH0Ooq3 = BigInt("595")
		const addresshw7MvF2 = "0x0000000000000000000000000000000000000001"
		const addressBZtd2V = accounts[2]
		await Token50X100y2g2aF4.setLinkingAddresses.call(addressT4OwmKU, addressD75zXYP, {from: accounts[4]});
		const boolfNHgKEt = await Token50X100y2g2aF4.setMaxLockPeriod.call(uinttM6e7fm, {from: accounts[4]});
		const boolvSufk0 = await Token50X100y2g2aF4.setMaxLockPeriod.call(uintxy8Qc7F, {from: accounts[4]});
		const boolNltKBkt = await Token50X100y2g2aF4.issueTokens.call(addressBZtd2V, addresshw7MvF2, uintGH0Ooq3, {from: accounts[2]});
		await Token50X100y2g2aF4.onlyOwner.call({from: accounts[2]});

		await expect(Token50X100y2g2aF4.setLinkingAddresses.call(addressT4OwmKU, addressD75zXYP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintInrgHat = BigInt("636")
		const uintRdBbWXZ = BigInt("1914")
		const uintoA4uiwq = BigInt("890")
		const uintPFVvtmM = BigInt("963")
		const uintGcBhHoB = BigInt("390")
		const addresszcVkMiP = accounts[5]
		const addressoBmOAFO = accounts[3]
		const uintpZNqS2 = BigInt("997")
		const addressRGqL92p = accounts[4]
		const addressU6DWnV4 = accounts[3]
		const boolHsCyzgq = await Token50X100TL7vWM4.safeLock.call(uintRdBbWXZ, uintInrgHat, {from: accounts[1]});
		const boolkY3D3L5 = await Token50X100TL7vWM4.setMaxLockPeriod.call(uintoA4uiwq, {from: "0x0000000000000000000000000000000000000001"});
		const boolbBeeN5 = await Token50X100TL7vWM4.safeLock.call(uintGcBhHoB, uintPFVvtmM, {from: accounts[1]});
		const uint256EEJHlZQ = await Token50X100TL7vWM4.allowance.call(addressoBmOAFO, addresszcVkMiP, {from: accounts[3]});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addressU6DWnV4, addressRGqL92p, uintpZNqS2, {from: accounts[0]});

		await expect(Token50X100TL7vWM4.safeLock.call(uintRdBbWXZ, uintInrgHat, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100W1pwhYt = await Token50X100.new({from: accounts[5]});
		const addressP8yFLx3 = accounts[1]
		const addresseK8CjoX = accounts[4]
		const booleueUnMF = true
		const addresstd3F9Kz = accounts[0]
		const uintxZVrzKJ = BigInt("470")
		const addressNDiHszM = accounts[0]
		const uintx8kBnG4 = BigInt("1377")
		const addressoIRqy2G = accounts[1]
		const boolFDLNlYQ = true
		const addressD74wXQq = accounts[0]
		const uintQvxRP2H = BigInt("322")
		const uintEgHkAc = BigInt("1296")
		const addressLwxr8wa = accounts[0]
		const addressXGq5TqR = accounts[2]
		const uint256uCfvk1t = await Token50X100W1pwhYt.allowance.call(addresseK8CjoX, addressP8yFLx3, {from: accounts[4]});
		await Token50X100W1pwhYt.setWhiteList.call(addresstd3F9Kz, booleueUnMF, {from: accounts[3]});
		const boolLUR59S = await Token50X100W1pwhYt.transfer.call(addressNDiHszM, uintxZVrzKJ, {from: accounts[1]});
		const boolmB9pQPG = await Token50X100W1pwhYt.transfer.call(addressoIRqy2G, uintx8kBnG4, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100W1pwhYt.setWhiteListReceivers.call(addressD74wXQq, boolFDLNlYQ, {from: accounts[5]});
		const boolyvk6hk3 = await Token50X100W1pwhYt._transfer.call(addressXGq5TqR, addressLwxr8wa, uintEgHkAc, uintQvxRP2H, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256uCfvk1t, BigInt("0"))
		await expect(Token50X100W1pwhYt.setWhiteList.call(addresstd3F9Kz, booleueUnMF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const uintD3LZoM = BigInt("1581")
		const addressuKj9IZq = accounts[2]
		const uintW0jfWmf = BigInt("657")
		const addressNyzjZX9 = accounts[2]
		const uintvjErvR = BigInt("1320")
		const addressBAL8ikb = "0x0000000000000000000000000000000000000001"
		const addressgywmlG = accounts[3]
		const uintj6Hywy = BigInt("661")
		const uintaDRNlR = BigInt("423")
		const addressIN5HH75 = accounts[1]
		const addressoSgJqDN = accounts[3]
		const addressMhYZj7N = accounts[6]
		const addressuTd6FBb = accounts[2]
		const uintv45zFio = BigInt("1251")
		const uintggqjZcS = BigInt("313")
		const addressZyHA5G = accounts[5]
		const uintJ8fT9xv = BigInt("1845")
		const addressLL5ZtsT = accounts[0]
		const boolZUDxq9O = await Token50X100sPE1Q3S.decreaseApproval.call(addressuKj9IZq, uintD3LZoM, {from: accounts[3]});
		const boolI1yIbZ = await Token50X100sPE1Q3S.transfer.call(addressNyzjZX9, uintW0jfWmf, {from: accounts[5]});
		const boolCbvFjsn = await Token50X100sPE1Q3S.transferFrom.call(addressgywmlG, addressBAL8ikb, uintvjErvR, {from: accounts[3]});
		const booleErNNhD = await Token50X100sPE1Q3S._transfer.call(addressoSgJqDN, addressIN5HH75, uintaDRNlR, uintj6Hywy, {from: accounts[2]});
		const uint256g2lbZuu = await Token50X100sPE1Q3S.allowance.call(addressuTd6FBb, addressMhYZj7N, {from: accounts[2]});
		const boolldDvjw1 = await Token50X100sPE1Q3S.setVesting.call(addressZyHA5G, uintggqjZcS, uintv45zFio, {from: "0x0000000000000000000000000000000000000001"});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressLL5ZtsT, uintJ8fT9xv, {from: accounts[3]});

		assert.equal(boolZUDxq9O, true)
		await expect(Token50X100sPE1Q3S.transfer.call(addressNyzjZX9, uintW0jfWmf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const boolg64Aylr = false
		const addressaTHWaNR = accounts[1]
		const addressedLhymS = accounts[2]
		const addresspKmHLDl = accounts[5]
		const addressVLueuDI = accounts[1]
		const uintEPGK69l = BigInt("1845")
		const addressE17bJ3g = accounts[1]
		await Token50X100sPE1Q3S.setWhiteList.call(addressaTHWaNR, boolg64Aylr, {from: accounts[2]});
		await Token50X100sPE1Q3S.setTokenContract.call(addressedLhymS, {from: accounts[2]});
		const uint256g2lbZuu = await Token50X100sPE1Q3S.allowance.call(addressVLueuDI, addresspKmHLDl, {from: accounts[2]});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressE17bJ3g, uintEPGK69l, {from: accounts[3]});

		await expect(Token50X100sPE1Q3S.setWhiteList.call(addressaTHWaNR, boolg64Aylr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintieLCPjx = BigInt("249")
		const stringOGgBGlv = "nkgbCyZFuXA2DLyQo1XzMqwfceK6e8vYPfI99MmCkazYyNKPehCEGYZ"
		const stringNZd5ifs = "qHRdHPybrhbxuOFk7Nh7Uy3IPLPbZIaOssXlxbhEsCI2N3DkAaqAoCqe"
		const uintbkjoBt = BigInt("601")
		const addressmxWAroS = accounts[1]
		const uint3aX1Sh = BigInt("963")
		const uinti1MHHRP = BigInt("390")
		const uintJQZgkAu = BigInt("997")
		const addressQibFPo1 = accounts[5]
		const address5VynLk = accounts[3]
		const boolCbKOefU = await Token50X100TL7vWM4.setSymbolNameDecimals.call(stringNZd5ifs, stringOGgBGlv, uintieLCPjx, {from: accounts[1]});
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressmxWAroS, uintbkjoBt, {from: accounts[2]});
		const boolbBeeN5 = await Token50X100TL7vWM4.safeLock.call(uinti1MHHRP, uint3aX1Sh, {from: accounts[1]});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(address5VynLk, addressQibFPo1, uintJQZgkAu, {from: accounts[0]});

		await expect(Token50X100TL7vWM4.transfer.call(addressmxWAroS, uintbkjoBt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fnydl9Q = await Token50X100.new({from: accounts[2]});
		const uintQ6eXuIY = BigInt("1949")
		const address3zO8Do = accounts[3]
		const addressVW4BCAx = accounts[5]
		const uintKjotWCK = BigInt("1720")
		const addresswWZGdTW = accounts[4]
		await Token50X100fnydl9Q.release.call({from: accounts[2]});
		const boolky8bLPo = await Token50X100fnydl9Q.transferFrom.call(addressVW4BCAx, address3zO8Do, uintQ6eXuIY, {from: accounts[2]});
		const boolv4lgdMS = await Token50X100fnydl9Q.transfer.call(addresswWZGdTW, uintKjotWCK, {from: accounts[1]});

		await expect(Token50X100fnydl9Q.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const addressRQhxeGR = accounts[3]
		const uintmj8vsQx = BigInt("1581")
		const addressEWOg4mY = accounts[2]
		const uintNAKBjJ8 = BigInt("657")
		const addresshSqngO6 = accounts[2]
		const uinteDyimf = BigInt("1320")
		const addressyUUYv9R = "0x0000000000000000000000000000000000000000"
		const addressb3f1CZ = accounts[3]
		const uintbYx01T3 = BigInt("661")
		const uintcZDgicg = BigInt("423")
		const addressNtyta7z = accounts[1]
		const addressedPLhv = accounts[3]
		const addressrjpnxmJ = accounts[6]
		const addresscAQr7z = accounts[2]
		const uintPnJVBop = BigInt("2045")
		const uintJgcLpt0 = BigInt("2001")
		const addressu4PRDIW = accounts[1]
		const uintZLuYMt5 = BigInt("1251")
		const uintAlQ92pF = BigInt("313")
		const addressjQtx1QM = accounts[5]
		const uinthMopiQW = BigInt("1845")
		const addressqHuwgY7 = accounts[0]
		const uint256UB9fSGm = await Token50X100sPE1Q3S.balanceOf.call(addressRQhxeGR, {from: accounts[4]});
		const boolZUDxq9O = await Token50X100sPE1Q3S.decreaseApproval.call(addressEWOg4mY, uintmj8vsQx, {from: accounts[3]});
		const boolI1yIbZ = await Token50X100sPE1Q3S.transfer.call(addresshSqngO6, uintNAKBjJ8, {from: accounts[5]});
		const boolCbvFjsn = await Token50X100sPE1Q3S.transferFrom.call(addressb3f1CZ, addressyUUYv9R, uinteDyimf, {from: accounts[3]});
		const booleErNNhD = await Token50X100sPE1Q3S._transfer.call(addressedPLhv, addressNtyta7z, uintcZDgicg, uintbYx01T3, {from: accounts[2]});
		const uint256g2lbZuu = await Token50X100sPE1Q3S.allowance.call(addresscAQr7z, addressrjpnxmJ, {from: accounts[2]});
		const boolIvZNTCG = await Token50X100sPE1Q3S.setVesting.call(addressu4PRDIW, uintJgcLpt0, uintPnJVBop, {from: accounts[2]});
		const boolldDvjw1 = await Token50X100sPE1Q3S.setVesting.call(addressjQtx1QM, uintAlQ92pF, uintZLuYMt5, {from: "0x0000000000000000000000000000000000000001"});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressqHuwgY7, uinthMopiQW, {from: accounts[3]});

		assert.equal(boolZUDxq9O, true)
		assert.equal(uint256UB9fSGm, BigInt("0"))
		await expect(Token50X100sPE1Q3S.transfer.call(addresshSqngO6, uintNAKBjJ8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const uintVzGptz4 = BigInt("629")
		const uinttTC9ysX = BigInt("1512")
		const addressm2zhQ6T = accounts[0]
		const uintzbZ1boC = BigInt("1070")
		const addressjRCBgr = accounts[4]
		const uintEukm7uD = BigInt("113")
		const boolKX61iR = await Token50X100vSsFZns.setVesting.call(addressm2zhQ6T, uinttTC9ysX, uintVzGptz4, {from: accounts[0]});
		const boolntiYgtA = await Token50X100vSsFZns.decreaseApproval.call(addressjRCBgr, uintzbZ1boC, {from: "0x0000000000000000000000000000000000000001"});
		const boolyQ0kH2 = await Token50X100vSsFZns.setMaxLockPeriod.call(uintEukm7uD, {from: accounts[2]});

		assert.equal(boolKX61iR, true)
		assert.equal(boolntiYgtA, true)
		assert.equal(boolyQ0kH2, false)
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const uints30NYeK = BigInt("1337")
		const uintigdmRjL = BigInt("1218")
		const addressN55g8tP = accounts[2]
		const boolyQ0kH2 = await Token50X100vSsFZns.setMaxLockPeriod.call(uints30NYeK, {from: accounts[2]});
		const bool90H8RW = await Token50X100vSsFZns.increaseApproval.call(addressN55g8tP, uintigdmRjL, {from: accounts[4]});

		assert.equal(bool90H8RW, true)
		assert.equal(boolyQ0kH2, false)
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const uintYBi80n = BigInt("1581")
		const addresse7yiWhF = accounts[2]
		const uintYbbffiB = BigInt("1941")
		const addressL6dzkVt = accounts[2]
		const uintBvINGEe = BigInt("657")
		const addresseGiL2gy = accounts[2]
		const uintBDtf1uC = BigInt("1320")
		const addresswjSMDxl = "0x0000000000000000000000000000000000000001"
		const addressX0qBup5 = accounts[3]
		const addressmi6KXR = accounts[3]
		const uintHfHdtoP = BigInt("661")
		const uintoFtCLSl = BigInt("423")
		const addressuB0xa9G = accounts[1]
		const addressYuJk2yN = accounts[3]
		const uintutNHWAB = BigInt("1334")
		const addressVn3qvxW = accounts[3]
		const addressqxjMPo2 = accounts[1]
		const addressMcQvB5b = accounts[6]
		const addressrftKClo = accounts[4]
		const uintXoDqTlZ = BigInt("1845")
		const addressQCg0nvX = accounts[0]
		const boolZUDxq9O = await Token50X100sPE1Q3S.decreaseApproval.call(addresse7yiWhF, uintYBi80n, {from: accounts[3]});
		const boolG6Czc00 = await Token50X100sPE1Q3S.approve.call(addressL6dzkVt, uintYbbffiB, {from: accounts[0]});
		const boolI1yIbZ = await Token50X100sPE1Q3S.transfer.call(addresseGiL2gy, uintBvINGEe, {from: accounts[5]});
		const boolCbvFjsn = await Token50X100sPE1Q3S.transferFrom.call(addressX0qBup5, addresswjSMDxl, uintBDtf1uC, {from: accounts[3]});
		const addressNQPFGDr = await Token50X100sPE1Q3S.setOriginalContract.call(addressmi6KXR, {from: accounts[1]});
		const booleErNNhD = await Token50X100sPE1Q3S._transfer.call(addressYuJk2yN, addressuB0xa9G, uintoFtCLSl, uintHfHdtoP, {from: accounts[2]});
		const boolD7np3FE = await Token50X100sPE1Q3S.transferFrom.call(addressqxjMPo2, addressVn3qvxW, uintutNHWAB, {from: accounts[4]});
		const uint256g2lbZuu = await Token50X100sPE1Q3S.allowance.call(addressrftKClo, addressMcQvB5b, {from: accounts[2]});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressQCg0nvX, uintXoDqTlZ, {from: accounts[3]});

		assert.equal(boolG6Czc00, true)
		assert.equal(boolZUDxq9O, true)
		await expect(Token50X100sPE1Q3S.transfer.call(addresseGiL2gy, uintBvINGEe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const uintL4hSLZn = BigInt("1011")
		const addressKbUK6L = accounts[4]
		const uint2dCR2s = BigInt("1344")
		const uintHQCJyZa = BigInt("52")
		const addressmCEgyqR = accounts[2]
		const addressIDgvsx = accounts[0]
		await Token50X100vSsFZns.lock.call({from: accounts[0]});
		const boolntiYgtA = await Token50X100vSsFZns.decreaseApproval.call(addressKbUK6L, uintL4hSLZn, {from: "0x0000000000000000000000000000000000000001"});
		const boolyQ0kH2 = await Token50X100vSsFZns.setMaxLockPeriod.call(uint2dCR2s, {from: accounts[2]});
		const boolVfZ6K6G = await Token50X100vSsFZns.transferFrom.call(addressIDgvsx, addressmCEgyqR, uintHQCJyZa, {from: accounts[4]});

		await expect(Token50X100vSsFZns.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const uintDCaUZU2 = BigInt("1011")
		const addressinGnWcE = accounts[4]
		const uintw0xXw9U = BigInt("1344")
		const uinturHBGpb = BigInt("143")
		const uintDPuLdAN = BigInt("1514")
		const addresskgDlIxS = accounts[4]
		const addressfwJIwXG = "0x0000000000000000000000000000000000000001"
		const uintBMdQOB = BigInt("52")
		const addressXIdqz2j = accounts[2]
		const addressPBSEwL = accounts[0]
		const boolntiYgtA = await Token50X100vSsFZns.decreaseApproval.call(addressinGnWcE, uintDCaUZU2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yERuben = await Token50X100vSsFZns.totalSupply.call({from: accounts[5]});
		const boolyQ0kH2 = await Token50X100vSsFZns.setMaxLockPeriod.call(uintw0xXw9U, {from: accounts[2]});
		const boolZDnbt3L = await Token50X100vSsFZns._transfer.call(addressfwJIwXG, addresskgDlIxS, uintDPuLdAN, uinturHBGpb, {from: accounts[1]});
		const boolVfZ6K6G = await Token50X100vSsFZns.transferFrom.call(addressPBSEwL, addressXIdqz2j, uintBMdQOB, {from: accounts[4]});

		assert.equal(boolntiYgtA, true)
		assert.equal(boolyQ0kH2, false)
		assert.equal(uint256yERuben, BigInt("4714285714285710"))
		await expect(Token50X100vSsFZns._transfer.call(addressfwJIwXG, addresskgDlIxS, uintDPuLdAN, uinturHBGpb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const boolTSzrW3o = false
		const addressWpF5QSf = accounts[0]
		const uintoahVOl5 = BigInt("994")
		const addressOnEkQSi = accounts[5]
		const uintzZrddmU = BigInt("1337")
		const uint2MH6oW = BigInt("492")
		const addresspEDwExx = accounts[3]
		const uintrj612FR = BigInt("52")
		const addressHPusCtn = accounts[2]
		const addressuySuiy = accounts[0]
		await Token50X100vSsFZns.setWhiteListReceivers.call(addressWpF5QSf, boolTSzrW3o, {from: accounts[0]});
		const boolntiYgtA = await Token50X100vSsFZns.decreaseApproval.call(addressOnEkQSi, uintoahVOl5, {from: "0x0000000000000000000000000000000000000001"});
		const boolyQ0kH2 = await Token50X100vSsFZns.setMaxLockPeriod.call(uintzZrddmU, {from: accounts[2]});
		const boolmdwWslX = await Token50X100vSsFZns.transfer.call(addresspEDwExx, uint2MH6oW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YKekBCg = await Token50X100vSsFZns.totalSupply.call({from: accounts[1]});
		const boolVfZ6K6G = await Token50X100vSsFZns.transferFrom.call(addressuySuiy, addressHPusCtn, uintrj612FR, {from: accounts[4]});

		await expect(Token50X100vSsFZns.setWhiteListReceivers.call(addressWpF5QSf, boolTSzrW3o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const uintsk5uPiA = BigInt("1646")
		const uintDWpkkUU = BigInt("1360")
		const addressn7ED0e = accounts[0]
		const address89EO0d = accounts[0]
		const uintQ6HhLg = BigInt("216")
		const address0A0AEm = accounts[4]
		const uinthHb6uWN = BigInt("1845")
		const addressXnA4AX6 = accounts[1]
		const boolWBK6EjV = await Token50X100sPE1Q3S._transfer.call(address89EO0d, addressn7ED0e, uintDWpkkUU, uintsk5uPiA, {from: accounts[2]});
		const boolMXyFD1b = await Token50X100sPE1Q3S.transfer.call(address0A0AEm, uintQ6HhLg, {from: accounts[2]});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressXnA4AX6, uinthHb6uWN, {from: accounts[3]});

		await expect(Token50X100sPE1Q3S._transfer.call(address89EO0d, addressn7ED0e, uintDWpkkUU, uintsk5uPiA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sPE1Q3S = await Token50X100.new({from: accounts[2]});
		const uintNzooqhF = BigInt("35")
		const addressB7yqaee = "0x0000000000000000000000000000000000000000"
		const uintX2VrZm0 = BigInt("1845")
		const addressgHm44Tp = accounts[1]
		const uintakOqN4 = BigInt("254")
		const boolhGy9jc = await Token50X100sPE1Q3S.transfer.call(addressB7yqaee, uintNzooqhF, {from: accounts[4]});
		const boolDbP0gVK = await Token50X100sPE1Q3S.transfer.call(addressgHm44Tp, uintX2VrZm0, {from: accounts[3]});
		const boolZorCJXu = await Token50X100sPE1Q3S.setMaxLockPeriod.call(uintakOqN4, {from: accounts[2]});

		await expect(Token50X100sPE1Q3S.transfer.call(addressB7yqaee, uintNzooqhF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vSsFZns = await Token50X100.new({from: accounts[0]});
		const addressjnHs3YT = accounts[3]
		const uintmenfwXK = BigInt("432")
		const addressn6EHWqr = accounts[6]
		const uintskKIXAK = BigInt("720")
		const uintzZjBDhf = BigInt("1404")
		const addressljtCseJ = accounts[5]
		const addressMH7Y15f = "0x0000000000000000000000000000000000000001"
		const uintYeyAdb = BigInt("1872")
		const addressuxz88mU = accounts[1]
		const uintyJkLjfE = BigInt("455")
		const addressBbnvlDf = accounts[2]
		const addressEDAYlAi = await Token50X100vSsFZns.transferOwnership.call(addressjnHs3YT, {from: accounts[0]});
		const boolzUgqphT = await Token50X100vSsFZns.decreaseApproval.call(addressn6EHWqr, uintmenfwXK, {from: accounts[3]});
		const booleXnjlu = await Token50X100vSsFZns._transfer.call(addressMH7Y15f, addressljtCseJ, uintzZjBDhf, uintskKIXAK, {from: accounts[2]});
		const boolx6rfXoF = await Token50X100vSsFZns.transfer.call(addressuxz88mU, uintYeyAdb, {from: accounts[4]});
		const boolT4Mafvm = await Token50X100vSsFZns.transfer.call(addressBbnvlDf, uintyJkLjfE, {from: accounts[4]});

		assert.equal(boolzUgqphT, true)
		await expect(Token50X100vSsFZns._transfer.call(addressMH7Y15f, addressljtCseJ, uintzZjBDhf, uintskKIXAK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})