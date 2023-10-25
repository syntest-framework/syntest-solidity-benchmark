const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresscOu4rnU = accounts[4]
		const addressCx1NICG = accounts[2]
		const QuickTokenPNbIaJW = await QuickToken.new(addresscOu4rnU, addressCx1NICG, {from: accounts[0]});
		const addressIRFlru4 = accounts[0]
		const uintZUW8n4p = BigInt("249")
		const addresswiLuNG8 = accounts[0]
		const uintG0fu4w = BigInt("1497")
		const addressYdhOWJR = accounts[3]
		const uintOEI4Qq = BigInt("1592")
		const addressPggXsIR = accounts[2]
		const addressNyOOmoL = accounts[4]
		const addressS9Zosrz = "0x0000000000000000000000000000000000000001"
		const addressiADqZoP = accounts[1]
		const addressoWiwMl7 = accounts[0]
//		const addressqlCEnxf = await QuickTokenPNbIaJW.setMinter.call(addressIRFlru4, {from: accounts[1]});
//		const boolOJ2Oa7 = await QuickTokenPNbIaJW.transfer.call(addresswiLuNG8, uintZUW8n4p, {from: accounts[4]});
//		const boolk8pHm9U = await QuickTokenPNbIaJW.transfer.call(addressYdhOWJR, uintG0fu4w, {from: accounts[3]});
//		const boolAwbRTmN = await QuickTokenPNbIaJW.transferFrom.call(addressNyOOmoL, addressPggXsIR, uintOEI4Qq, {from: accounts[5]});
//		const uint0jjr0A = await QuickTokenPNbIaJW.allowance.call(addressiADqZoP, addressS9Zosrz, {from: accounts[4]});
//		const uinttm5jxK = await QuickTokenPNbIaJW.balanceOf.call(addressoWiwMl7, {from: accounts[2]});

		await expect(QuickTokenPNbIaJW.setMinter.call(addressIRFlru4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressS3d51zu = accounts[2]
		const addressT1CAIY7 = accounts[3]
		const QuickTokenc9zz6ti = await QuickToken.new(addressS3d51zu, addressT1CAIY7, {from: accounts[1]});
		const uintjpqDc7G = BigInt("191")
		const addresstMpRXIh = accounts[1]
		const uintGfLIxFB = BigInt("540")
		const addressIWMY8NF = accounts[4]
		const uintbHHEkXl = BigInt("692")
		const addressmdQlbdv = "0x0000000000000000000000000000000000000001"
//		const addressS72m5dN = await QuickTokenc9zz6ti.mint.call(addresstMpRXIh, uintjpqDc7G, {from: accounts[1]});
//		const addresshGziFW = await QuickTokenc9zz6ti.mint.call(addressIWMY8NF, uintGfLIxFB, {from: accounts[0]});
//		const boolYq0NCmB = await QuickTokenc9zz6ti.transfer.call(addressmdQlbdv, uintbHHEkXl, {from: accounts[3]});

		await expect(QuickTokenc9zz6ti.mint.call(addresstMpRXIh, uintjpqDc7G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressy4vexwc = accounts[1]
		const addressmMMz80 = "0x0000000000000000000000000000000000000001"
		const QuickTokenwIfaeM6 = await QuickToken.new(addressy4vexwc, addressmMMz80, {from: accounts[3]});
		const uintSRqoWjo = BigInt("735")
		const addressbkkA0Uj = accounts[3]
		const addressD62fEZQ = "0x0000000000000000000000000000000000000001"
		const boolHmI1HM5 = await QuickTokenwIfaeM6.approve.call(addressbkkA0Uj, uintSRqoWjo, {from: accounts[3]});
//		const addressW7p1j7x = await QuickTokenwIfaeM6.setMinter.call(addressD62fEZQ, {from: accounts[0]});

		assert.equal(boolHmI1HM5, true)
		await expect(QuickTokenwIfaeM6.setMinter.call(addressD62fEZQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresshkMphp = accounts[0]
		const addressIfGIFB = accounts[0]
		const QuickTokenv0QTzJK = await QuickToken.new(addresshkMphp, addressIfGIFB, {from: accounts[4]});
		const uinttRsE0aX = BigInt("562")
		const addresse9L9DkZ = accounts[5]
		const uintFB9TwF6 = BigInt("1066")
		const addressnOfR7ll = accounts[4]
		const addressLbulLD0 = "0x0000000000000000000000000000000000000001"
		const addresswymQTFd = accounts[2]
		const boolVOxmT7F = await QuickTokenv0QTzJK.approve.call(addresse9L9DkZ, uinttRsE0aX, {from: accounts[0]});
//		const boolSyxsckO = await QuickTokenv0QTzJK.transferFrom.call(addressLbulLD0, addressnOfR7ll, uintFB9TwF6, {from: accounts[3]});
//		const addressN4AdXw = await QuickTokenv0QTzJK.setMinter.call(addresswymQTFd, {from: accounts[0]});

		assert.equal(boolVOxmT7F, true)
		await expect(QuickTokenv0QTzJK.transferFrom.call(addressLbulLD0, addressnOfR7ll, uintFB9TwF6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressE8YjUsV = accounts[0]
		const addressKS7egkL = "0x0000000000000000000000000000000000000001"
		const QuickTokenKpLw7a = await QuickToken.new(addressE8YjUsV, addressKS7egkL, {from: accounts[1]});
		const uintYrtLIWk = BigInt("29")
		const addressumAfFxa = accounts[0]
		const uintr4xwoUk = BigInt("35")
		const addressiMRrL9 = accounts[0]
		const addressZxEoMtY = accounts[5]
//		const booliKAjTjH = await QuickTokenKpLw7a.transfer.call(addressumAfFxa, uintYrtLIWk, {from: accounts[4]});
//		const addressss7ksLA = await QuickTokenKpLw7a.mint.call(addressiMRrL9, uintr4xwoUk, {from: accounts[4]});
//		const uintfpBIReh = await QuickTokenKpLw7a.balanceOf.call(addressZxEoMtY, {from: accounts[2]});

		await expect(QuickTokenKpLw7a.transfer.call(addressumAfFxa, uintYrtLIWk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressVRgKSi = accounts[2]
		const addressnIDFVPC = accounts[2]
		const QuickTokenP27WsKx = await QuickToken.new(addressVRgKSi, addressnIDFVPC, {from: accounts[1]});
		const addresseqyQAIT = accounts[4]
		const addressdPWB0go = "0x0000000000000000000000000000000000000001"
		const addressdAUqQjF = accounts[1]
		const uintz9joUge = BigInt("29")
		const addresskCUCxVG = accounts[3]
		const addressBbnlv9V = "0x0000000000000000000000000000000000000001"
		const uintqMW9f8I = BigInt("1767")
		const addressS8fmsA8 = accounts[5]
		const addressm9xPcvX = accounts[5]
		const addressKa0XQ2k = "0x0000000000000000000000000000000000000001"
		const uintMHekSIK = await QuickTokenP27WsKx.balanceOf.call(addresseqyQAIT, {from: accounts[1]});
		const uintsdjUIRr = await QuickTokenP27WsKx.allowance.call(addressdAUqQjF, addressdPWB0go, {from: accounts[3]});
		const addressMPuNZwZ = await QuickTokenP27WsKx.mint.call(addresskCUCxVG, uintz9joUge, {from: accounts[2]});
		const uintqZKLx4 = await QuickTokenP27WsKx.balanceOf.call(addressBbnlv9V, {from: accounts[3]});
//		const addressx9AmzF = await QuickTokenP27WsKx.mint.call(addressS8fmsA8, uintqMW9f8I, {from: accounts[0]});
//		const uintzdxKXyD = await QuickTokenP27WsKx.allowance.call(addressKa0XQ2k, addressm9xPcvX, {from: accounts[5]});

		assert.equal(uintMHekSIK, BigInt("0"))
		assert.equal(uintqZKLx4, BigInt("0"))
		assert.equal(uintsdjUIRr, BigInt("0"))
		await expect(QuickTokenP27WsKx.mint.call(addressS8fmsA8, uintqMW9f8I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressX63u1DY = "0x0000000000000000000000000000000000000001"
		const addressm1rpS5 = accounts[2]
		const QuickTokenuGSumc4 = await QuickToken.new(addressX63u1DY, addressm1rpS5, {from: "0x0000000000000000000000000000000000000001"});
		const uintAObQcZi = BigInt("146")
		const addresspmwAZZ = "0x0000000000000000000000000000000000000001"
		const uintDy2PDVc = BigInt("605")
		const addresseMTrpm4 = accounts[3]
		const uintE2eS3eE = BigInt("1305")
		const addressV28Xf7s = accounts[2]
		const boolmGUfpa = await QuickTokenuGSumc4.transfer.call(addresspmwAZZ, uintAObQcZi, {from: accounts[1]});
		const bool50PGg9 = await QuickTokenuGSumc4.approve.call(addresseMTrpm4, uintDy2PDVc, {from: accounts[0]});
		const addressB0394n = await QuickTokenuGSumc4.mint.call(addressV28Xf7s, uintE2eS3eE, {from: accounts[4]});
	});

	it('test for QuickToken', async () => {
		const addressslQaLk = accounts[2]
		const addressP3ZcOCV = accounts[3]
		const QuickTokenHWlLTz = await QuickToken.new(addressslQaLk, addressP3ZcOCV, {from: accounts[4]});
		const addressEjD60VU = "0x0000000000000000000000000000000000000001"
		const uintJFzTvO = BigInt("216")
		const addresswr6BJlv = "0x0000000000000000000000000000000000000000"
		const uintnDfQ3mJ = await QuickTokenHWlLTz.balanceOf.call(addressEjD60VU, {from: accounts[0]});
//		const addresswtY0W0t = await QuickTokenHWlLTz.mint.call(addresswr6BJlv, uintJFzTvO, {from: accounts[3]});

		assert.equal(uintnDfQ3mJ, BigInt("0"))
		await expect(QuickTokenHWlLTz.mint.call(addresswr6BJlv, uintJFzTvO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})