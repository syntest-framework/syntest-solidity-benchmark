const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintmsokWmZ = BigInt("2028")
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintmsokWmZ, {from: accounts[2]});
		await WeedburnbJmgpYk.enableLimitMode.call({from: accounts[4]});

		await expect(WeedburnbJmgpYk.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnaaKMI0j = await Weedburn.new({from: accounts[2]});
		await WeedburnaaKMI0j.disableLimitMode.call({from: accounts[2]});
		const uint8eTj1HLT = await WeedburnaaKMI0j.decimals.call({from: accounts[3]});
		await WeedburnaaKMI0j.enableLimitMode.call({from: accounts[2]});

		await expect(WeedburnaaKMI0j.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncF75ke = await Weedburn.new({from: accounts[1]});
		const stringB9gMp0d = await WeedburncF75ke.symbol.call({from: accounts[2]});
		await WeedburncF75ke.enableLimitMode.call({from: accounts[2]});
		await WeedburncF75ke.enableLimitMode.call({from: accounts[4]});
		const uint256Ejva9o = await WeedburncF75ke.totalSupply.call({from: accounts[0]});

		assert.equal(stringB9gMp0d, "Weedburn")
		await expect(WeedburncF75ke.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnFDywUUo = await Weedburn.new({from: accounts[4]});
		const addressAGLGEf = accounts[1]
		const addressmsrzzhJ = "0x0000000000000000000000000000000000000001"
		const addressa2q1Wdh = accounts[4]
		const uint256vUWCHGN = await WeedburnFDywUUo.balanceOf.call(addressAGLGEf, {from: accounts[4]});
		const uint256zAwViUK = await WeedburnFDywUUo.totalSupply.call({from: accounts[3]});
		const stringO3lfiCT = await WeedburnFDywUUo.name.call({from: accounts[5]});
		const uint256wE1Wcc7 = await WeedburnFDywUUo.allowance.call(addressa2q1Wdh, addressmsrzzhJ, {from: accounts[3]});
		const uint8WXj5T0l = await WeedburnFDywUUo.decimals.call({from: accounts[4]});

		assert.equal(stringO3lfiCT, "t.me/burnweed1")
		assert.equal(uint256vUWCHGN, BigInt("0"))
		assert.equal(uint256wE1Wcc7, BigInt("0"))
		assert.equal(uint256zAwViUK, BigInt("100000000000000000000000"))
		assert.equal(uint8WXj5T0l, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const stringMpPkWOx = "xtJrzuGLU73jvryGzKXVMZUORqWtizHMuQi7gbqzemp63its9uh5hAwypn"
		const stringRuSSUTH = "f933hgHp5wBasm3TbrSt6297Xa8SAbqAvybk2qJx21qd1On4yiRD7lLNP577x1Odsa5g6nob"
		const uintMjexEQf = BigInt("52")
		const WeedburnhknYrkF = await Weedburn.new(stringMpPkWOx, stringRuSSUTH, uintMjexEQf, {from: accounts[1]});
		const addressdei3LK4 = accounts[2]
		const addresswj23g3N = accounts[3]
		const uintHoXDFPB = BigInt("1890")
		const addressc7ARohZ = accounts[4]
		const uintcqw4T3I = BigInt("1405")
		const addressNAUWfOL = accounts[3]
		const uintVeAtkZO = BigInt("341")
		const addressW62tgDA = accounts[2]
		const uintQZ2UG5N = BigInt("1056")
		const addressEme5gdj = "0x0000000000000000000000000000000000000001"
		const uint256a23Mkf3 = await WeedburnhknYrkF.allowance.call(addresswj23g3N, addressdei3LK4, {from: accounts[5]});
		const addressClceNpU = await WeedburnhknYrkF.burnFrom.call(addressc7ARohZ, uintHoXDFPB, {from: accounts[0]});
		const booltLzVmTy = await WeedburnhknYrkF.decreaseAllowance.call(addressNAUWfOL, uintcqw4T3I, {from: accounts[1]});
		const boolYg3uCmZ = await WeedburnhknYrkF.increaseAllowance.call(addressW62tgDA, uintVeAtkZO, {from: accounts[4]});
		const uint8njN3C9 = await WeedburnhknYrkF.decimals.call({from: accounts[2]});
		const booltOVBG8l = await WeedburnhknYrkF.approve.call(addressEme5gdj, uintQZ2UG5N, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnVRhnKLR = await Weedburn.new({from: accounts[1]});
		const uintq0Qh8xH = BigInt("1846")
		const addressUDxhH5C = accounts[3]
		const addressNwmp5tP = accounts[0]
		const uintz5ZIL7 = BigInt("1097")
		const addressTs1uR3v = accounts[4]
		const uintOK1ndVP = BigInt("1175")
		const addressy356eEO = accounts[4]
		const stringUCU1XWm = await WeedburnVRhnKLR.symbol.call({from: accounts[4]});
		const bool7VzEjx = await WeedburnVRhnKLR.transferFrom.call(addressNwmp5tP, addressUDxhH5C, uintq0Qh8xH, {from: accounts[2]});
		const boolJm2fA7 = await WeedburnVRhnKLR.increaseAllowance.call(addressTs1uR3v, uintz5ZIL7, {from: accounts[2]});
		const uint256LiSTlER = await WeedburnVRhnKLR.totalSupply.call({from: accounts[0]});
		const addressTqKGr9Q = await WeedburnVRhnKLR.burnFrom.call(addressy356eEO, uintOK1ndVP, {from: accounts[3]});

		assert.equal(stringUCU1XWm, "Weedburn")
		await expect(WeedburnVRhnKLR.transferFrom.call(addressNwmp5tP, addressUDxhH5C, uintq0Qh8xH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZCLtZWS = await Weedburn.new({from: accounts[1]});
		const uintW59k3Tj = BigInt("598")
		const addressWTVvTL = accounts[0]
		const uint8cIvkd = BigInt("167")
		const addresskTm63S7 = accounts[3]
		const uintI4gMQtP = BigInt("1820")
		const addressHmvN0Va = accounts[1]
		const uintUCWLiqj = BigInt("145")
		const addressYCzmurj = accounts[4]
		const addressucEjJPw = accounts[1]
		const boolEVsjnYy = await WeedburnZCLtZWS.transfer.call(addressWTVvTL, uintW59k3Tj, {from: accounts[5]});
		const bool45wa4Q = await WeedburnZCLtZWS.transfer.call(addresskTm63S7, uint8cIvkd, {from: accounts[3]});
		await WeedburnZCLtZWS.enableLimitMode.call({from: accounts[1]});
		const boolpKqfCuL = await WeedburnZCLtZWS.increaseAllowance.call(addressHmvN0Va, uintI4gMQtP, {from: accounts[1]});
		const boolUUzxmy = await WeedburnZCLtZWS.transferFrom.call(addressucEjJPw, addressYCzmurj, uintUCWLiqj, {from: accounts[3]});

		await expect(WeedburnZCLtZWS.transfer.call(addressWTVvTL, uintW59k3Tj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintM8SmZte = BigInt("446")
		const addresslNtUbCH = "0x0000000000000000000000000000000000000001"
		const uintv29bMM7 = BigInt("2057")
		const boolrnZs2cD = await WeedburnbJmgpYk.increaseAllowance.call(addresslNtUbCH, uintM8SmZte, {from: accounts[2]});
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintv29bMM7, {from: accounts[2]});
		await WeedburnbJmgpYk.enableLimitMode.call({from: accounts[4]});

		assert.equal(boolrnZs2cD, true)
		await expect(WeedburnbJmgpYk.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintO87puh5 = BigInt("2028")
		const addressb8l6SU7 = accounts[3]
		const addressRrZcy4U = accounts[3]
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintO87puh5, {from: accounts[2]});
		await WeedburnbJmgpYk.disableDevMode.call({from: accounts[2]});
		await WeedburnbJmgpYk.enableLimitMode.call({from: accounts[4]});
		const uint256dcagzF = await WeedburnbJmgpYk.allowance.call(addressRrZcy4U, addressb8l6SU7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnbJmgpYk.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintIEMHAq9 = BigInt("1214")
		const addressurTc2e = "0x0000000000000000000000000000000000000001"
		const uintIXQNIiX = BigInt("2058")
		const addressrtKNQPY = accounts[1]
		const addressMdrnqbS = await WeedburnbJmgpYk.burnFrom.call(addressurTc2e, uintIEMHAq9, {from: accounts[2]});
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintIXQNIiX, {from: accounts[2]});
		const uint256U3nghlH = await WeedburnbJmgpYk.balanceOf.call(addressrtKNQPY, {from: accounts[1]});

		await expect(WeedburnbJmgpYk.burnFrom.call(addressurTc2e, uintIEMHAq9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintdxZcPI = BigInt("2028")
		await WeedburnbJmgpYk.enableDevMode.call({from: accounts[1]});
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintdxZcPI, {from: accounts[2]});

		await expect(WeedburnbJmgpYk.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBgGyy66 = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintC9ADWp4 = BigInt("266")
		const addressXcu31wg = accounts[1]
		const addressX2CDIeH = accounts[5]
		const addressN1MfZ3O = accounts[3]
		const uintSpnsK8Y = BigInt("397")
		const addressrEsfuIt = accounts[1]
		const addressBZNBg5 = accounts[0]
		const uintM14zw7 = BigInt("1540")
		const uintBYu2izi = BigInt("305")
		const addressJi7RTBF = accounts[4]
		const boolFhJA2Rg = await WeedburnBgGyy66.approve.call(addressXcu31wg, uintC9ADWp4, {from: accounts[0]});
		await WeedburnBgGyy66.enableLimitMode.call({from: accounts[0]});
		const uint256YfAtN9o = await WeedburnBgGyy66.allowance.call(addressN1MfZ3O, addressX2CDIeH, {from: accounts[3]});
		const boole7u8AXH = await WeedburnBgGyy66.transferFrom.call(addressBZNBg5, addressrEsfuIt, uintSpnsK8Y, {from: accounts[0]});
		const uint256Bh8LCbf = await WeedburnBgGyy66.burn.call(uintM14zw7, {from: accounts[1]});
		const boolTktGKYZ = await WeedburnBgGyy66.decreaseAllowance.call(addressJi7RTBF, uintBYu2izi, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintqUesBws = BigInt("752")
		const addressGk7TpHr = accounts[3]
		const uintSgpcuPP = BigInt("2008")
		const boolgwMV6wl = await WeedburnbJmgpYk.decreaseAllowance.call(addressGk7TpHr, uintqUesBws, {from: accounts[2]});
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintSgpcuPP, {from: accounts[2]});

		await expect(WeedburnbJmgpYk.decreaseAllowance.call(addressGk7TpHr, uintqUesBws, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintKYndvWV = BigInt("239")
		const uinttFuhNY1 = BigInt("1423")
		const uintD5hil1u = BigInt("1332")
		const addressGmg0Fjm = accounts[2]
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintKYndvWV, {from: accounts[2]});
		const uint256Z30lJAD = await WeedburnbJmgpYk.burn.call(uinttFuhNY1, {from: accounts[2]});
		const boolLAB7lE2 = await WeedburnbJmgpYk.approve.call(addressGmg0Fjm, uintD5hil1u, {from: accounts[3]});

		assert.equal(boolLAB7lE2, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnbJmgpYk = await Weedburn.new({from: accounts[2]});
		const uintzdFkz2C = BigInt("2037")
		const uintjrPklep = BigInt("1299")
		const addressXAVFYBe = accounts[1]
		const stringVASNKDw = await WeedburnbJmgpYk.symbol.call({from: accounts[4]});
		const uint256Hivmgor = await WeedburnbJmgpYk.burn.call(uintzdFkz2C, {from: accounts[2]});
		const bool8FiJwB = await WeedburnbJmgpYk.transfer.call(addressXAVFYBe, uintjrPklep, {from: accounts[2]});

		assert.equal(bool8FiJwB, true)
		assert.equal(stringVASNKDw, "Weedburn")
	});
})