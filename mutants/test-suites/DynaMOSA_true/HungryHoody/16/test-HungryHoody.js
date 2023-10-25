const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyujsQN4r = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUrVM8d = BigInt("163")
		const addressohrfOA = accounts[3]
		const addressvWXM6WY = accounts[3]
		const uintLQZSMD7 = BigInt("1703")
		const uintsGBAsZ = BigInt("599")
		const uintAzn1crA = BigInt("1163")
		const addressGMuynQu = accounts[3]
		const addressJkUAGHK = accounts[4]
		const uintkiQxl6o = BigInt("1378")
		const addressxpVWLB0 = accounts[5]
		const addressW0T93eD = accounts[3]
		const booltxyhASJ = await HungryHoodyujsQN4r.transferFrom.call(addressvWXM6WY, addressohrfOA, uintUrVM8d, {from: accounts[1]});
		const uintCdy2xFD = await HungryHoodyujsQN4r.safeDiv.call(uintsGBAsZ, uintLQZSMD7, {from: accounts[5]});
		const boolnypDi6t = await HungryHoodyujsQN4r.transfer.call(addressGMuynQu, uintAzn1crA, {from: accounts[3]});
		const uintk85PaaD = await HungryHoodyujsQN4r.balanceOf.call(addressJkUAGHK, {from: accounts[4]});
		const boolGgQ369E = await HungryHoodyujsQN4r.transferFrom.call(addressW0T93eD, addressxpVWLB0, uintkiQxl6o, {from: accounts[4]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyrVbLBFm = await HungryHoody.new({from: accounts[2]});
		const addressIwldJrD = accounts[2]
		const addresstcPcBkV = accounts[1]
		const addressI3G7VmG = accounts[1]
		const addressNdOPHA2 = accounts[4]
		const addressC8BqQA = accounts[4]
		const addresscfCpa1 = accounts[1]
		const uintRqpvtAy = BigInt("712")
		const uintBc5VxQ3 = BigInt("748")
		const uintvH5QjRB = BigInt("507")
		const addressZsAgtg5 = accounts[2]
		const addressV7mada4 = accounts[1]
		const uintzWX1mkn = await HungryHoodyrVbLBFm.allowance.call(addresstcPcBkV, addressIwldJrD, {from: accounts[2]});
		const uintgC5CHcJ = await HungryHoodyrVbLBFm.allowance.call(addressNdOPHA2, addressI3G7VmG, {from: accounts[4]});
		const uintG2sP68Y = await HungryHoodyrVbLBFm.allowance.call(addresscfCpa1, addressC8BqQA, {from: "0x0000000000000000000000000000000000000001"});
		const uintLTZZzJ6 = await HungryHoodyrVbLBFm.safeMul.call(uintBc5VxQ3, uintRqpvtAy, {from: accounts[4]});
//		const boolR9rq1I = await HungryHoodyrVbLBFm.transferFrom.call(addressV7mada4, addressZsAgtg5, uintvH5QjRB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintG2sP68Y, BigInt("0"))
		assert.equal(uintLTZZzJ6, BigInt("532576"))
		assert.equal(uintgC5CHcJ, BigInt("0"))
		assert.equal(uintzWX1mkn, BigInt("0"))
		await expect(HungryHoodyrVbLBFm.transferFrom.call(addressV7mada4, addressZsAgtg5, uintvH5QjRB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyoOCNrnP = await HungryHoody.new({from: accounts[2]});
		const uintK9a76pn = BigInt("1996")
		const addressbpaLnPf = accounts[4]
		const uintlZldm9 = BigInt("1281")
		const addressXDkqkPe = accounts[0]
		const uintCeJEJvd = BigInt("338")
		const addressxG2MU9t = accounts[2]
		const addressctNJ53L = accounts[5]
		const uintRvz4TDy = BigInt("227")
		const addressKHp70ZY = accounts[0]
		const uintEgUi6U0 = await HungryHoodyoOCNrnP.totalSupply.call({from: accounts[1]});
		const boolJfOBC84 = await HungryHoodyoOCNrnP.approve.call(addressbpaLnPf, uintK9a76pn, {from: accounts[1]});
//		const boolRjAKtZl = await HungryHoodyoOCNrnP.transfer.call(addressXDkqkPe, uintlZldm9, {from: accounts[0]});
//		const boolUNSriZp = await HungryHoodyoOCNrnP.transferFrom.call(addressctNJ53L, addressxG2MU9t, uintCeJEJvd, {from: accounts[2]});
//		const boolFAyfIKF = await HungryHoodyoOCNrnP.transfer.call(addressKHp70ZY, uintRvz4TDy, {from: accounts[4]});

		assert.equal(boolJfOBC84, true)
		assert.equal(uintEgUi6U0, BigInt("25000000000000000000"))
		await expect(HungryHoodyoOCNrnP.transfer.call(addressXDkqkPe, uintlZldm9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuaTLgN = await HungryHoody.new({from: accounts[1]});
		const uintymYdxVq = BigInt("1935")
		const uintyp9rVIR = BigInt("547")
		const uintiHVQX6e = BigInt("1949")
		const uintY3q1gco = BigInt("1254")
		const uintgoHzB2o = BigInt("1663")
		const uintHrSjDCU = BigInt("1917")
		const uintNzrM8Yi = await HungryHoodyuaTLgN.safeDiv.call(uintyp9rVIR, uintymYdxVq, {from: "0x0000000000000000000000000000000000000001"});
		const uintwan5zUZ = await HungryHoodyuaTLgN.safeMul.call(uintY3q1gco, uintiHVQX6e, {from: accounts[3]});
		const uintwWzYi7k = await HungryHoodyuaTLgN.safeSub.call(uintHrSjDCU, uintgoHzB2o, {from: accounts[3]});

		assert.equal(uintNzrM8Yi, BigInt("0"))
		assert.equal(uintwWzYi7k, BigInt("254"))
		assert.equal(uintwan5zUZ, BigInt("2444046"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyS1m0SSu = await HungryHoody.new({from: accounts[3]});
		const uintrvWHD1T = BigInt("1221")
		const uintPkxJY3 = BigInt("782")
		const addresshsENYJD = "0x0000000000000000000000000000000000000001"
		const addressJs0yFch = accounts[1]
		const uintxr6M1LF = BigInt("540")
		const addressXzyD6Qd = "0x0000000000000000000000000000000000000001"
		const addressQwRrle0 = accounts[3]
		const addresshQcwfHT = accounts[1]
		const addressE3hp2u = accounts[1]
		const uintjiKGvIA = BigInt("1203")
		const uintDgtS7Z = BigInt("1570")
		const uintXowZtN9 = BigInt("1960")
		const uintPY4ohii = BigInt("115")
		const uintRjPQkL = await HungryHoodyS1m0SSu.safeAdd.call(uintPkxJY3, uintrvWHD1T, {from: accounts[2]});
		const uintgTo109T = await HungryHoodyS1m0SSu.allowance.call(addressJs0yFch, addresshsENYJD, {from: accounts[5]});
//		const boolwQZor5r = await HungryHoodyS1m0SSu.transferFrom.call(addressQwRrle0, addressXzyD6Qd, uintxr6M1LF, {from: accounts[4]});
//		const uintZIjOvh = await HungryHoodyS1m0SSu.allowance.call(addressE3hp2u, addresshQcwfHT, {from: accounts[1]});
//		const uintWlspGl9 = await HungryHoodyS1m0SSu.safeDiv.call(uintDgtS7Z, uintjiKGvIA, {from: accounts[2]});
//		const uintn2flLGs = await HungryHoodyS1m0SSu.safeDiv.call(uintPY4ohii, uintXowZtN9, {from: accounts[0]});

		assert.equal(uintRjPQkL, BigInt("2003"))
		assert.equal(uintgTo109T, BigInt("0"))
		await expect(HungryHoodyS1m0SSu.transferFrom.call(addressQwRrle0, addressXzyD6Qd, uintxr6M1LF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodypvdqYrp = await HungryHoody.new({from: accounts[1]});
		const addresscUJbIzM = accounts[3]
		const address69UQUR = accounts[4]
		const addresshYxGWOn = accounts[2]
		const uintKM1G5Gf = BigInt("1439")
		const addressqX6T4DJ = accounts[4]
		const addressUoO3xVb = accounts[0]
		const addresst22iee7 = accounts[4]
		const uintsQ17Yp4 = BigInt("886")
		const addresse5wp0oK = accounts[1]
		const uintVPYQQO4 = BigInt("1973")
		const addressCT8vybv = accounts[3]
		const addressk1gIxFe = accounts[3]
		const uintYcgfLRJ = await HungryHoodypvdqYrp.allowance.call(address69UQUR, addresscUJbIzM, {from: accounts[0]});
		const uintFXVJQ4x = await HungryHoodypvdqYrp.balanceOf.call(addresshYxGWOn, {from: accounts[4]});
		const boolkbHtOLq = await HungryHoodypvdqYrp.transfer.call(addressqX6T4DJ, uintKM1G5Gf, {from: accounts[1]});
		const uintuhAhsoQ = await HungryHoodypvdqYrp.allowance.call(addresst22iee7, addressUoO3xVb, {from: accounts[3]});
		const boolCH7wQJZ = await HungryHoodypvdqYrp.approve.call(addresse5wp0oK, uintsQ17Yp4, {from: accounts[3]});
//		const booll9gLT03 = await HungryHoodypvdqYrp.transferFrom.call(addressk1gIxFe, addressCT8vybv, uintVPYQQO4, {from: accounts[2]});

		assert.equal(boolCH7wQJZ, true)
		assert.equal(boolkbHtOLq, true)
		assert.equal(uintFXVJQ4x, BigInt("0"))
		assert.equal(uintYcgfLRJ, BigInt("0"))
		assert.equal(uintuhAhsoQ, BigInt("0"))
		await expect(HungryHoodypvdqYrp.transferFrom.call(addressk1gIxFe, addressCT8vybv, uintVPYQQO4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})