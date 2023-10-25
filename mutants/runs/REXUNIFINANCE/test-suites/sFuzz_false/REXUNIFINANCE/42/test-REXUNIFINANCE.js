const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEMk8oLNL = await REXUNIFINANCE.new({from: accounts[4]});
		const uintruej6jY = BigInt("145")
		const addresss9lW0Jv = "0x0000000000000000000000000000000000000001"
		const addressakA7CUZ = accounts[0]
		const uinte7GD3pp = BigInt("1605")
		const addresscfhiKV7 = accounts[1]
		const uintPLx8u5z = BigInt("1946")
		const address9apxhI = accounts[3]
		const uinttAZp9sG = BigInt("1089")
		const addressgQnXlxm = accounts[0]
		const addressVQkcrTl = accounts[1]
		const uintpDu2yfX = BigInt("996")
		const addressrw9mExI = accounts[3]
		const addressLLRz7OG = accounts[3]
		const boolzd3heoD = await REXUNIFINANCEMk8oLNL.transferFrom.call(addressakA7CUZ, addresss9lW0Jv, uintruej6jY, {from: accounts[1]});
		const boolkBftLoW = await REXUNIFINANCEMk8oLNL.transfer.call(addresscfhiKV7, uinte7GD3pp, {from: "0x0000000000000000000000000000000000000001"});
		const boolT4dITkl = await REXUNIFINANCEMk8oLNL.increaseApproval.call(address9apxhI, uintPLx8u5z, {from: accounts[3]});
		const boolaRz5HXo = await REXUNIFINANCEMk8oLNL.transferFrom.call(addressVQkcrTl, addressgQnXlxm, uinttAZp9sG, {from: accounts[0]});
		const booljkk0wSX = await REXUNIFINANCEMk8oLNL.transferFrom.call(addressLLRz7OG, addressrw9mExI, uintpDu2yfX, {from: accounts[4]});

		await expect(REXUNIFINANCEMk8oLNL.transferFrom.call(addressakA7CUZ, addresss9lW0Jv, uintruej6jY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEsSeICo1 = await REXUNIFINANCE.new({from: accounts[4]});
		const addressTGc1DHX = accounts[3]
		const addresslNHNqYJ = "0x0000000000000000000000000000000000000001"
		const addressYDAVLzn = accounts[4]
		const uint256uvPNAEh = await REXUNIFINANCEsSeICo1.allowance.call(addresslNHNqYJ, addressTGc1DHX, {from: accounts[2]});
		const uint256r7PVWYe = await REXUNIFINANCEsSeICo1.balanceOf.call(addressYDAVLzn, {from: accounts[3]});

		assert.equal(uint256r7PVWYe, BigInt("0"))
		assert.equal(uint256uvPNAEh, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEq1OZDGb = await REXUNIFINANCE.new({from: accounts[0]});
		const uinty4HP8Zp = BigInt("1145")
		const addressy0vxTvf = accounts[3]
		const addressn2wkofj = accounts[1]
		const addressa2ziNF = accounts[3]
		const uintybj2tH1 = BigInt("409")
		const addressNXbVVo = accounts[4]
		const addressdugZYD = accounts[3]
		const uintEsAYd0J = BigInt("1786")
		const addressO6OPZwm = accounts[3]
		const uintsG1pH1j = BigInt("314")
		const addressBZellRZ = "0x0000000000000000000000000000000000000001"
		const addresszOeiZYZ = accounts[1]
		const booltvcxXBQ = await REXUNIFINANCEq1OZDGb.transfer.call(addressy0vxTvf, uinty4HP8Zp, {from: accounts[0]});
		const uint256uEaFDpY = await REXUNIFINANCEq1OZDGb.allowance.call(addressa2ziNF, addressn2wkofj, {from: accounts[1]});
		const boolBhkghAJ = await REXUNIFINANCEq1OZDGb.transferFrom.call(addressdugZYD, addressNXbVVo, uintybj2tH1, {from: accounts[1]});
		const boolTLwLIw = await REXUNIFINANCEq1OZDGb.increaseApproval.call(addressO6OPZwm, uintEsAYd0J, {from: accounts[0]});
		const booltieVrWw = await REXUNIFINANCEq1OZDGb.transferFrom.call(addresszOeiZYZ, addressBZellRZ, uintsG1pH1j, {from: accounts[1]});

		await expect(REXUNIFINANCEq1OZDGb.transfer.call(addressy0vxTvf, uinty4HP8Zp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEbRXeCWH = await REXUNIFINANCE.new({from: accounts[2]});
		const addressgKQD1th = accounts[4]
		const addresszumaa9V = accounts[1]
		const uinteDqzPnf = BigInt("1824")
		const addressparfrH = accounts[2]
		const uint256iXp4RE = await REXUNIFINANCEbRXeCWH.balanceOf.call(addressgKQD1th, {from: accounts[3]});
		const addressaTusGN7 = await REXUNIFINANCEbRXeCWH.transferOwnership.call(addresszumaa9V, {from: accounts[0]});
		const boolqdO7N0z = await REXUNIFINANCEbRXeCWH.transfer.call(addressparfrH, uinteDqzPnf, {from: accounts[3]});

		assert.equal(uint256iXp4RE, BigInt("0"))
		await expect(REXUNIFINANCEbRXeCWH.transferOwnership.call(addresszumaa9V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEazpmTp7 = await REXUNIFINANCE.new({from: accounts[3]});
		const addressMSANST1 = accounts[5]
		const uintg95Atqe = BigInt("1229")
		const addressn88fe9n = accounts[2]
		const uintlWlFwL = BigInt("827")
		const addressop8KN5c = accounts[2]
		const addressb0HHYPl = accounts[1]
		const addressReC4fmr = accounts[3]
		const uint2560kWI6a = await REXUNIFINANCEazpmTp7.balanceOf.call(addressMSANST1, {from: accounts[0]});
		const boolCiItorY = await REXUNIFINANCEazpmTp7.increaseApproval.call(addressn88fe9n, uintg95Atqe, {from: accounts[3]});
		const boolsFONzxd = await REXUNIFINANCEazpmTp7.transfer.call(addressop8KN5c, uintlWlFwL, {from: accounts[3]});
		const uint256dHQtYOn = await REXUNIFINANCEazpmTp7.balanceOf.call(addressb0HHYPl, {from: accounts[2]});
		const uint256ZMmiFwE = await REXUNIFINANCEazpmTp7.transferableTokens.call(addressReC4fmr, {from: accounts[1]});

		assert.equal(boolCiItorY, true)
		assert.equal(uint2560kWI6a, BigInt("0"))
		await expect(REXUNIFINANCEazpmTp7.transfer.call(addressop8KN5c, uintlWlFwL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnjkMDO = await REXUNIFINANCE.new({from: accounts[2]});
		const addressvyFfGXs = accounts[1]
		const addresscKfBUhD = "0x0000000000000000000000000000000000000001"
		const uintIGmrknU = BigInt("1788")
		const addressln1RAP = accounts[0]
		const addressqkGvQ0Y = accounts[4]
		const uint256nu2FuuV = await REXUNIFINANCEnjkMDO.transferableTokens.call(addressvyFfGXs, {from: accounts[4]});
		const uint256jfHS0Qo = await REXUNIFINANCEnjkMDO.balanceOf.call(addresscKfBUhD, {from: accounts[5]});
		const boolBHaHdp = await REXUNIFINANCEnjkMDO.decreaseApproval.call(addressln1RAP, uintIGmrknU, {from: accounts[3]});
		const uint256osnlRrP = await REXUNIFINANCEnjkMDO.transferableTokens.call(addressqkGvQ0Y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBHaHdp, true)
		assert.equal(uint256jfHS0Qo, BigInt("0"))
		assert.equal(uint256nu2FuuV, BigInt("0"))
		assert.equal(uint256osnlRrP, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEgM792bC = await REXUNIFINANCE.new({from: accounts[3]});
		const uintshpkwNU = BigInt("1867")
		const addressXJH1fsW = accounts[5]
		const uintDRInwi6 = BigInt("390")
		const addresssFeulOK = accounts[0]
		const addresseC7NtVo = accounts[2]
		const uintM3szZ6I = BigInt("1443")
		const addressjOordwa = "0x0000000000000000000000000000000000000001"
		const boolHOjjs0s = await REXUNIFINANCEgM792bC.increaseApproval.call(addressXJH1fsW, uintshpkwNU, {from: accounts[3]});
		const boolNoUDMG = await REXUNIFINANCEgM792bC.approve.call(addresssFeulOK, uintDRInwi6, {from: accounts[4]});
		const uint256PONqbEy = await REXUNIFINANCEgM792bC.transferableTokens.call(addresseC7NtVo, {from: accounts[4]});
		const boolKTLWsa9 = await REXUNIFINANCEgM792bC.approve.call(addressjOordwa, uintM3szZ6I, {from: accounts[0]});

		assert.equal(boolHOjjs0s, true)
		assert.equal(boolKTLWsa9, true)
		assert.equal(boolNoUDMG, true)
		assert.equal(uint256PONqbEy, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAahoXRD = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoyWKex8 = BigInt("947")
		const addressAwo776e = accounts[1]
		const addressNVHRIhZ = accounts[1]
		const addressEDGkNj3 = accounts[1]
		const boolmws4gAU = await REXUNIFINANCEAahoXRD.transfer.call(addressAwo776e, uintoyWKex8, {from: accounts[2]});
		const uint256CJ9Yaap = await REXUNIFINANCEAahoXRD.allowance.call(addressEDGkNj3, addressNVHRIhZ, {from: accounts[4]});
	});
})