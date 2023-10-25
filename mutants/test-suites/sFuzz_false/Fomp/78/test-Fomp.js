const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressN1xSdm = accounts[3]
		const Fomp0ZON0T = await Fomp.new(addressN1xSdm, {from: accounts[2]});
		const uintfbYo48 = BigInt("917")
		const addressq6D7dMO = accounts[1]
		const byted6yQO4 = "0x10150f1f1212160d13100e0e1b160814131109171a020d1f0d13151b20191705"
		const byte3902s0 = "0x031715071d1a1320190c171f071e07081b18030a161e10062017180e170e1a1f"
		const uintEc9o2BB = BigInt("88")
		const uintG8WHIhJ = BigInt("784")
		const uintIWaa93W = BigInt("1621")
		const addressh7B2cpt = accounts[0]
		const addressvRkN8ZK = accounts[2]
		const addressYRbXZXY = accounts[0]
		const addressAunAaIQ = accounts[4]
		const addressNFGI4Hu = accounts[1]
		const boolaDFAYLo = await Fomp0ZON0T.approve.call(addressq6D7dMO, uintfbYo48, {from: accounts[0]});
//		const addresseH9vAT4 = await Fomp0ZON0T.delegateBySig.call(addressh7B2cpt, uintIWaa93W, uintG8WHIhJ, uintEc9o2BB, byte3902s0, byted6yQO4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressb8huXtl = await Fomp0ZON0T.delegate.call(addressvRkN8ZK, {from: accounts[1]});
//		const uintQGgITEZ = await Fomp0ZON0T.allowance.call(addressAunAaIQ, addressYRbXZXY, {from: accounts[2]});
//		const uintE7l6MQl = await Fomp0ZON0T.balanceOf.call(addressNFGI4Hu, {from: accounts[3]});

		assert.equal(boolaDFAYLo, true)
		await expect(Fomp0ZON0T.delegateBySig.call(addressh7B2cpt, uintIWaa93W, uintG8WHIhJ, uintEc9o2BB, byte3902s0, byted6yQO4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressPqWS9uU = accounts[0]
		const FompBk3oea = await Fomp.new(addressPqWS9uU, {from: accounts[5]});
		const uintvNK7vyj = BigInt("500")
		const addressz6PpP7H = accounts[0]
		const addresslrmZYFZ = accounts[4]
		const addressaK0wz4T = "0x0000000000000000000000000000000000000001"
		const addressiiLJziN = accounts[4]
		const addressbKHQQ2B = accounts[1]
		const addressT4haVQn = accounts[0]
		const uintpJnt3WC = BigInt("1657")
		const addressAzUVaGI = accounts[0]
//		const boolvOOZZ3y = await FompBk3oea.transferFrom.call(addresslrmZYFZ, addressz6PpP7H, uintvNK7vyj, {from: accounts[4]});
//		const uint96mBTwVRF = await FompBk3oea.getCurrentVotes.call(addressaK0wz4T, {from: accounts[1]});
//		const uint96bgfjqwg = await FompBk3oea.getCurrentVotes.call(addressiiLJziN, {from: accounts[0]});
//		const addressc1GY5KP = await FompBk3oea.delegate.call(addressbKHQQ2B, {from: accounts[5]});
//		const addressQd4a0FR = await FompBk3oea.delegate.call(addressT4haVQn, {from: accounts[4]});
//		const boolA30hdz4 = await FompBk3oea.approve.call(addressAzUVaGI, uintpJnt3WC, {from: accounts[5]});

		await expect(FompBk3oea.transferFrom.call(addresslrmZYFZ, addressz6PpP7H, uintvNK7vyj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressv1IpVwQ = accounts[4]
		const FompqYz20g8 = await Fomp.new(addressv1IpVwQ, {from: accounts[3]});
		const uintlkNThKl = BigInt("1937")
		const addressU5OB7YJ = accounts[2]
		const addressotIxBm = accounts[2]
		const addressjxc4W0 = accounts[0]
//		const boolHQHd60 = await FompqYz20g8.transferFrom.call(addressotIxBm, addressU5OB7YJ, uintlkNThKl, {from: accounts[0]});
//		const uintjabMM2 = await FompqYz20g8.balanceOf.call(addressjxc4W0, {from: accounts[3]});

		await expect(FompqYz20g8.transferFrom.call(addressotIxBm, addressU5OB7YJ, uintlkNThKl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjmUMTYy = accounts[2]
		const FompEfSgIkD = await Fomp.new(addressjmUMTYy, {from: accounts[5]});
		const addressn8jPdcO = accounts[1]
		const addressO8udO2m = accounts[0]
		const addressTMufYAi = accounts[4]
		const uint96oKHuw0o = await FompEfSgIkD.getCurrentVotes.call(addressn8jPdcO, {from: accounts[5]});
		const addressGcmfGWH = await FompEfSgIkD.delegate.call(addressO8udO2m, {from: accounts[4]});
		const uintMV4vBjw = await FompEfSgIkD.balanceOf.call(addressTMufYAi, {from: accounts[3]});

		assert.equal(uint96oKHuw0o, BigInt("0"))
		assert.equal(uintMV4vBjw, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressvlVFLLy = accounts[2]
		const Fompp7mWcuL = await Fomp.new(addressvlVFLLy, {from: accounts[1]});
		const addressmlh7Tue = accounts[0]
		const uintWFjdNj8 = BigInt("1732")
		const addressugPwGR = accounts[1]
		const uintfpWqCwb = await Fompp7mWcuL.balanceOf.call(addressmlh7Tue, {from: accounts[1]});
//		const boolr3x0YDj = await Fompp7mWcuL.transfer.call(addressugPwGR, uintWFjdNj8, {from: accounts[3]});

		assert.equal(uintfpWqCwb, BigInt("0"))
		await expect(Fompp7mWcuL.transfer.call(addressugPwGR, uintWFjdNj8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZMQtSS4 = accounts[3]
		const FompcZFAFnX = await Fomp.new(addressZMQtSS4, {from: accounts[4]});
		const addressRvI5L97 = accounts[5]
		const uintJn5mb0 = BigInt("504")
		const addressmi7Ot8E = accounts[2]
		const uintE3uHxjO = BigInt("974")
		const addressJAa7gOR = accounts[0]
		const uintU5Tytj0 = await FompcZFAFnX.balanceOf.call(addressRvI5L97, {from: accounts[5]});
		const boolQ1GGJPL = await FompcZFAFnX.transfer.call(addressmi7Ot8E, uintJn5mb0, {from: accounts[3]});
		const boolG4eH22N = await FompcZFAFnX.approve.call(addressJAa7gOR, uintE3uHxjO, {from: accounts[1]});

		assert.equal(boolG4eH22N, true)
		assert.equal(boolQ1GGJPL, true)
		assert.equal(uintU5Tytj0, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressw70PdUV = accounts[3]
		const FompTlWrjGt = await Fomp.new(addressw70PdUV, {from: accounts[1]});
		const uintnvrn72I = BigInt("1269")
		const addressM1WaR59 = accounts[5]
		const uintZO8vRn2 = BigInt("1093")
		const addressAhct1Rg = accounts[3]
		const uintvd0cRr = BigInt("1437")
		const addressG6XJeaz = accounts[3]
		const uintEgte6MB = BigInt("1189")
		const addressc9ns1F = accounts[0]
		const addressMNbJZFg = accounts[2]
		const addresscey99CN = accounts[0]
		const addresswxMTzmq = accounts[3]
		const boolZXVhBFk = await FompTlWrjGt.approve.call(addressM1WaR59, uintnvrn72I, {from: accounts[5]});
		const uint96WOIVweV = await FompTlWrjGt.getPriorVotes.call(addressAhct1Rg, uintZO8vRn2, {from: accounts[0]});
		const boolx37HMVF = await FompTlWrjGt.approve.call(addressG6XJeaz, uintvd0cRr, {from: accounts[3]});
//		const boollzlzgbn = await FompTlWrjGt.transferFrom.call(addressMNbJZFg, addressc9ns1F, uintEgte6MB, {from: accounts[4]});
//		const uintDknhLz = await FompTlWrjGt.allowance.call(addresswxMTzmq, addresscey99CN, {from: accounts[4]});

		assert.equal(boolZXVhBFk, true)
		assert.equal(boolx37HMVF, true)
		assert.equal(uint96WOIVweV, BigInt("0"))
		await expect(FompTlWrjGt.transferFrom.call(addressMNbJZFg, addressc9ns1F, uintEgte6MB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYLYoGbG = accounts[4]
		const FompqYz20g8 = await Fomp.new(addressYLYoGbG, {from: accounts[3]});
		const addresssOM5yJ3 = "0x0000000000000000000000000000000000000001"
		const addressj9u5vC3 = accounts[3]
		const uintHGBdOh9 = BigInt("1937")
		const addressYFJXjrq = accounts[2]
		const addresskBiQFxU = accounts[2]
		const addressQjl5iPs = accounts[0]
		const uintk5F3GVD = await FompqYz20g8.allowance.call(addressj9u5vC3, addresssOM5yJ3, {from: accounts[3]});
//		const boolHQHd60 = await FompqYz20g8.transferFrom.call(addresskBiQFxU, addressYFJXjrq, uintHGBdOh9, {from: accounts[0]});
//		const uintjabMM2 = await FompqYz20g8.balanceOf.call(addressQjl5iPs, {from: accounts[3]});

		assert.equal(uintk5F3GVD, BigInt("0"))
		await expect(FompqYz20g8.transferFrom.call(addresskBiQFxU, addressYFJXjrq, uintHGBdOh9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresswAIMeRn = accounts[3]
		const FompcZFAFnX = await Fomp.new(addresswAIMeRn, {from: accounts[4]});
		const addresstrAp9wA = accounts[2]
		const addressTbQXswd = accounts[3]
		const addressFAzqjlD = accounts[5]
		const uintXVLKQiF = await FompcZFAFnX.balanceOf.call(addresstrAp9wA, {from: accounts[2]});
		const addressmTu3jA = await FompcZFAFnX.delegate.call(addressTbQXswd, {from: accounts[3]});
		const uintU5Tytj0 = await FompcZFAFnX.balanceOf.call(addressFAzqjlD, {from: accounts[5]});

		assert.equal(uintU5Tytj0, BigInt("0"))
		assert.equal(uintXVLKQiF, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressEkuBHr = accounts[3]
		const FompcZFAFnX = await Fomp.new(addressEkuBHr, {from: accounts[4]});
		const addressGwo2y2z = accounts[2]
		const uintL2ocWRW = BigInt("35")
		const addressZXuxucV = accounts[5]
		const addressllUYGvf = accounts[5]
		const addressK5anzV = await FompcZFAFnX.delegate.call(addressGwo2y2z, {from: accounts[5]});
		const uint96xtGHviI = await FompcZFAFnX.getPriorVotes.call(addressZXuxucV, uintL2ocWRW, {from: accounts[3]});
		const uintU5Tytj0 = await FompcZFAFnX.balanceOf.call(addressllUYGvf, {from: accounts[5]});

		assert.equal(uint96xtGHviI, BigInt("0"))
		assert.equal(uintU5Tytj0, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressH6Wb35b = accounts[5]
		const FompCVieZKN = await Fomp.new(addressH6Wb35b, {from: "0x0000000000000000000000000000000000000001"});
		const addressxekOvsV = accounts[5]
		const byteBxi18q6 = "0x1120061008021404140a0f071e171c0b161c081e141404091b16011607190119"
		const byteuLbhyFy = "0x0e0919190a0d0b120f03060d0d0d18171e0b101d110903071d0d050e0f020716"
		const uintNPwgHLo = BigInt("8")
		const uintahd7bi1 = BigInt("1913")
		const uintvLIxKgj = BigInt("96")
		const addressHlJMj6H = accounts[4]
		const addresskLjEnVX = accounts[3]
		const uintnwBxyw = BigInt("1482")
		const addressXmkwvfJ = accounts[4]
		const addressJcp9ahz = accounts[1]
		const uintmv09sgd = await FompCVieZKN.balanceOf.call(addressxekOvsV, {from: accounts[3]});
		const addressZlv20ja = await FompCVieZKN.delegateBySig.call(addressHlJMj6H, uintvLIxKgj, uintahd7bi1, uintNPwgHLo, byteuLbhyFy, byteBxi18q6, {from: accounts[3]});
		const uint96uprQ1na = await FompCVieZKN.getCurrentVotes.call(addresskLjEnVX, {from: accounts[2]});
		const boolaNJprPw = await FompCVieZKN.transfer.call(addressXmkwvfJ, uintnwBxyw, {from: accounts[0]});
		const uint96LIek6f3 = await FompCVieZKN.getCurrentVotes.call(addressJcp9ahz, {from: accounts[0]});
	});
})