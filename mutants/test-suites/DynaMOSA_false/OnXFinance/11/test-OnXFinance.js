const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintcXrtF0J = BigInt("9")
		const OnXFinanceT7dVxiB = await OnXFinance.new(stringlv7uv9X, stringWd0Gq1d, uintcXrtF0J, {from: accounts[3]});
		const uintrR4C7gX = BigInt("409")
		const addressV1mSAL = accounts[5]
		const uintOHnXj8k = BigInt("1731")
		const addresstJcCRsv = "0x0000000000000000000000000000000000000001"
		const addressJflIKQ7 = accounts[4]
		const boolCg7FQWl = await OnXFinanceT7dVxiB.transfer.call(addressV1mSAL, uintrR4C7gX, {from: accounts[3]});
//		const boolxdC4Ho = await OnXFinanceT7dVxiB.transfer.call(addresstJcCRsv, uintOHnXj8k, {from: accounts[5]});
//		const boolIn9nPcv = await OnXFinanceT7dVxiB.transferownership.call(addressJflIKQ7, {from: accounts[1]});

		assert.equal(boolCg7FQWl, true)
		await expect(OnXFinanceT7dVxiB.transfer.call(addresstJcCRsv, uintOHnXj8k, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringcKH8bzI = "jEyFo9sUC4PHoy"
		const stringaZT5k2 = "P6QLUV5vhmy3y"
		const uintcN3mPIS = BigInt("752")
		const OnXFinanceWop2DgJ = await OnXFinance.new(stringcKH8bzI, stringaZT5k2, uintcN3mPIS, {from: accounts[4]});
		const uintese84wr = BigInt("655")
		const addressiJi5Jq2 = accounts[3]
		const uintNpp4veV = BigInt("1894")
		const addressPfYrqV7 = accounts[2]
		const uinte7LnLXE = BigInt("1768")
		const addressfxxw3k = accounts[2]
		const uint8Dtk3vDU = await OnXFinanceWop2DgJ.decimals.call({from: accounts[2]});
//		const boolZEKBXaM = await OnXFinanceWop2DgJ.increaseAllowance.call(addressiJi5Jq2, uintese84wr, {from: accounts[2]});
//		const stringi8EANY = await OnXFinanceWop2DgJ.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringRnCJeVy = await OnXFinanceWop2DgJ.name.call({from: accounts[1]});
//		const booliY30GzZ = await OnXFinanceWop2DgJ.approve.call(addressPfYrqV7, uintNpp4veV, {from: accounts[0]});
//		const boolAxM6QEA = await OnXFinanceWop2DgJ.approve.call(addressfxxw3k, uinte7LnLXE, {from: accounts[2]});

		assert.equal(uint8Dtk3vDU, BigInt("18"))
		await expect(OnXFinanceWop2DgJ.increaseAllowance.call(addressiJi5Jq2, uintese84wr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringclqGWz = "rsLpfOjRd0BoXLcQwiygU3Ao6Mia3r7azsE4mIUb8oFdBtlaot0hNEBMQ"
		const stringGpQzwY4 = "RwYHOUbpZ1WqpsOwkaCfFWAfmsQ7fgkJbwOhkA7fSJ9IotkWK6Uc724DOtiShKRFnPUwbggx3"
		const uintZilnD0V = BigInt("162")
		const OnXFinanceCtFE481 = await OnXFinance.new(stringclqGWz, stringGpQzwY4, uintZilnD0V, {from: "0x0000000000000000000000000000000000000001"});
		const uintibaLO6 = BigInt("69")
		const addresswIovseL = accounts[2]
		const uintQqa2Msa = BigInt("1027")
		const addressy624Pv5 = accounts[3]
		const uintma0TK02 = BigInt("1214")
		const addressw6Nssor = accounts[2]
		const uintG5kufc3 = BigInt("1487")
		const addressjyR3zY0 = "0x0000000000000000000000000000000000000001"
		const booljlnsEkp = await OnXFinanceCtFE481.decreaseAllowance.call(addresswIovseL, uintibaLO6, {from: "0x0000000000000000000000000000000000000001"});
		const boolKKAHfQc = await OnXFinanceCtFE481.transfer.call(addressy624Pv5, uintQqa2Msa, {from: accounts[0]});
		const stringBhs8aVJ = await OnXFinanceCtFE481.symbol.call({from: accounts[2]});
		const booljGqLu8r = await OnXFinanceCtFE481.increaseAllowance.call(addressw6Nssor, uintma0TK02, {from: accounts[0]});
		const boolQ8LDZpu = await OnXFinanceCtFE481.transfer.call(addressjyR3zY0, uintG5kufc3, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for OnXFinance', async () => {
		const stringQXR3q8h = "bGGERJyQi2NviE3Nr2MPcMLP60MeEJKjnLlkRgiEYv2vTPpwFvDOjOe6EYp4wevZzH7Ak6tGaElcqrwwKkZKFHq"
		const stringGtVRgHC = "tsxkxoIkhWgaF9WV5ukXN"
		const uintwCKmqfl = BigInt("91")
		const OnXFinanceDM1JKtd = await OnXFinance.new(stringQXR3q8h, stringGtVRgHC, uintwCKmqfl, {from: accounts[3]});
		const uintuXS52f = BigInt("307")
		const addressZFNDHvx = accounts[3]
		const addressHrFVEnq = accounts[3]
		const uintzTUZBfR = BigInt("1782")
		const addressGQcwg6k = accounts[2]
		const boolYOZAIpz = await OnXFinanceDM1JKtd.approve.call(addressZFNDHvx, uintuXS52f, {from: accounts[2]});
		const uintdvl0AZ = await OnXFinanceDM1JKtd.balanceOf.call(addressHrFVEnq, {from: accounts[0]});
		const boolwoKsqJJ = await OnXFinanceDM1JKtd.approve.call(addressGQcwg6k, uintzTUZBfR, {from: accounts[0]});
		const uint8INx80G = await OnXFinanceDM1JKtd.decimals.call({from: accounts[0]});

		assert.equal(boolYOZAIpz, true)
		assert.equal(boolwoKsqJJ, true)
		assert.equal(uint8INx80G, BigInt("18"))
		assert.equal(uintdvl0AZ, BigInt("91000000000000000000"))
	});

	it('test for OnXFinance', async () => {
		const stringFbW0biB = "XGjNnRSqEx3uoT7MsihDx0K3HKaJ7K4cRefQqoQBfyxqQgPUYm03FjVCb46iTlGbl9T3Y5JnRsrzaO0B"
		const stringbAma5o = "jBCTaPyNR4IkIwFby6m1QBlhDvDIkm2kK6EjNNOSu"
		const uintD6eARrj = BigInt("996")
		const OnXFinancex3NYE1l = await OnXFinance.new(stringFbW0biB, stringbAma5o, uintD6eARrj, {from: accounts[4]});
		const addressMkdPjsH = accounts[4]
		const uintSi6gbOx = BigInt("59")
		const addressaf0eEFO = accounts[1]
//		const boolRtmvbNe = await OnXFinancex3NYE1l.transferownership.call(addressMkdPjsH, {from: accounts[1]});
//		const booltBSn9VC = await OnXFinancex3NYE1l.transfer.call(addressaf0eEFO, uintSi6gbOx, {from: accounts[4]});

		await expect(OnXFinancex3NYE1l.transferownership.call(addressMkdPjsH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintW08OtWX = BigInt("9")
		const OnXFinanceT7dVxiB = await OnXFinance.new(stringlv7uv9X, stringWd0Gq1d, uintW08OtWX, {from: accounts[3]});
		const uintsFf0Wsi = BigInt("409")
		const addressuYykryQ = accounts[6]
		const uintKsKM2OJ = BigInt("1030")
		const addressgzY8kEb = accounts[3]
		const boolCg7FQWl = await OnXFinanceT7dVxiB.transfer.call(addressuYykryQ, uintsFf0Wsi, {from: accounts[3]});
//		const boolFaphMMo = await OnXFinanceT7dVxiB.approveAndCall.call(addressgzY8kEb, uintKsKM2OJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCg7FQWl, true)
		await expect(OnXFinanceT7dVxiB.approveAndCall.call(addressgzY8kEb, uintKsKM2OJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintP1IPpPH = BigInt("9")
		const OnXFinanceT7dVxiB = await OnXFinance.new(stringlv7uv9X, stringWd0Gq1d, uintP1IPpPH, {from: accounts[3]});
		const uintledt1A9 = BigInt("1097")
		const addressNmvXrai = accounts[2]
		const uintuXwhIhG = BigInt("409")
		const addresswpzmJdB = accounts[5]
		const uintPUT5XUd = BigInt("1731")
		const addressMUFBnHa = "0x0000000000000000000000000000000000000001"
		const boolwmtx43k = await OnXFinanceT7dVxiB.approveAndCall.call(addressNmvXrai, uintledt1A9, {from: accounts[3]});
		const boolCg7FQWl = await OnXFinanceT7dVxiB.transfer.call(addresswpzmJdB, uintuXwhIhG, {from: accounts[3]});
//		const boolxdC4Ho = await OnXFinanceT7dVxiB.transfer.call(addressMUFBnHa, uintPUT5XUd, {from: accounts[5]});

		assert.equal(boolCg7FQWl, true)
		assert.equal(boolwmtx43k, true)
		await expect(OnXFinanceT7dVxiB.transfer.call(addressMUFBnHa, uintPUT5XUd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintOHtWB8w = BigInt("9")
		const OnXFinanceT7dVxiB = await OnXFinance.new(stringlv7uv9X, stringWd0Gq1d, uintOHtWB8w, {from: accounts[3]});
		const uintKC3MHlY = BigInt("514")
		const addressVYqwq2C = accounts[4]
		const uintCd8Qk4Y = BigInt("1068")
		const addressOsLfuIk = accounts[2]
		const uintbYnY8yN = BigInt("0")
		const addressdecvr7a = accounts[5]
		const uintvuIqWz8 = BigInt("2041")
		const addressIYC12df = accounts[1]
		const boolPJamzAl = await OnXFinanceT7dVxiB.approve.call(addressVYqwq2C, uintKC3MHlY, {from: accounts[2]});
		const boolwmtx43k = await OnXFinanceT7dVxiB.approveAndCall.call(addressOsLfuIk, uintCd8Qk4Y, {from: accounts[3]});
		const boolCg7FQWl = await OnXFinanceT7dVxiB.transfer.call(addressdecvr7a, uintbYnY8yN, {from: accounts[3]});
		const stringmtAgSC = await OnXFinanceT7dVxiB.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringIeK2C1V = await OnXFinanceT7dVxiB.symbol.call({from: accounts[4]});
//		const boolhc0YN2g = await OnXFinanceT7dVxiB.transfer.call(addressIYC12df, uintvuIqWz8, {from: accounts[1]});
//		const uint8XOd5PFN = await OnXFinanceT7dVxiB.decimals.call({from: accounts[2]});

		assert.equal(boolCg7FQWl, true)
		assert.equal(boolPJamzAl, true)
		assert.equal(boolwmtx43k, true)
		assert.equal(stringIeK2C1V, "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv")
		assert.equal(stringmtAgSC, "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv")
		await expect(OnXFinanceT7dVxiB.transfer.call(addressIYC12df, uintvuIqWz8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})