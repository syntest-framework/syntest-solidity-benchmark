const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringT9VGHwH = "BxNuQYvVPLhTzxK4xgoBYW6KGdMXym"
		const stringQTMrNsz = "xGLSrl8FMJehlVinUlrXHS73BjcYKL7Sfay4ssrb1kwVZI5YXHYfqPUUGwFVeXvgjR18ZA5xJ4w1cmnjnGd6So5Z86zcV9B"
		const uintKqqP4tU = BigInt("205")
		const XenoFelixCc4r1hv = await XenoFelix.new(stringT9VGHwH, stringQTMrNsz, uintKqqP4tU, {from: accounts[0]});
		const uintF4ja0f0 = BigInt("1658")
		const addressl01WZmJ = accounts[0]
		const addressdFswabR = accounts[1]
		const uinttB3MQnY = BigInt("2012")
		const addressoDNZaBN = "0x0000000000000000000000000000000000000001"
		const addressEV88TEf = accounts[5]
		const addressKFJDnOp = await XenoFelixCc4r1hv.burnFrom.call(addressl01WZmJ, uintF4ja0f0, {from: accounts[4]});
		const uint256eDaLfRr = await XenoFelixCc4r1hv.totalSupply.call({from: accounts[4]});
		const boolce4WWg = await XenoFelixCc4r1hv.isOwner.call(addressdFswabR, {from: accounts[0]});
		const boolVlH3nlL = await XenoFelixCc4r1hv.transfer.call(addressoDNZaBN, uinttB3MQnY, {from: accounts[2]});
		const uint256gdlK0gN = await XenoFelixCc4r1hv.balanceOf.call(addressEV88TEf, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uintXXzv16F = BigInt("1024")
		const uintmKakCJ1 = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uintXXzv16F, uintmKakCJ1, {from: accounts[4]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});
//		await XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]});

		await expect(XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringJlw1iut = "v0hg7IfFtXqrTGcdeDWb9BgMFHQOkZdEVMPrtfYM2c11FTlMGORpVyMlUOi2YxWAcpL3byo0raj1faeSDdN5jgSwl9z1vP2IQ7s"
		const stringxYPDNBq = "UA7fnfDTourso8lX29LHl1"
		const uintrwhKtpZ = BigInt("170")
		const XenoFelixeBHyFCp = await XenoFelix.new(stringJlw1iut, stringxYPDNBq, uintrwhKtpZ, {from: accounts[2]});
		const uintRQjYYVc = BigInt("770")
		const addressV04SxqZ = accounts[4]
		const addressQZHvTi = accounts[3]
		const uintEeyjYG1 = BigInt("1203")
		const addressK7G5yP4 = accounts[5]
		const uint256cF3HVHD = await XenoFelixeBHyFCp.burn.call(uintRQjYYVc, {from: accounts[1]});
		const booli7fxyDn = await XenoFelixeBHyFCp.acceptOwnership.call({from: accounts[5]});
		const uint8yHOojIf = await XenoFelixeBHyFCp.decimals.call({from: accounts[3]});
		const uint256kojfrwu = await XenoFelixeBHyFCp.allowance.call(addressQZHvTi, addressV04SxqZ, {from: accounts[2]});
		await XenoFelixeBHyFCp.unpause.call({from: accounts[1]});
		const boolQwwc8L = await XenoFelixeBHyFCp.transfer.call(addressK7G5yP4, uintEeyjYG1, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixwKlzi9E = await XenoFelix.new({from: accounts[2]});
		const uinti827n7 = BigInt("2014")
		const addressv8qFn3R = accounts[5]
		const uintPlpcpTI = BigInt("279")
		const addresstJGQNt = accounts[1]
		const boollPYA2Ur = await XenoFelixwKlzi9E.transfer.call(addressv8qFn3R, uinti827n7, {from: accounts[3]});
		const boolT6qKJSh = await XenoFelixwKlzi9E.transfer.call(addresstJGQNt, uintPlpcpTI, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringS8SMeAa = "1cXcu2cibaLXi4YiyP"
		const stringFx5B93 = "4zDCU1mL"
		const uint8bE4v8 = BigInt("171")
		const XenoFelixTI6mpds = await XenoFelix.new(stringS8SMeAa, stringFx5B93, uint8bE4v8, {from: accounts[4]});
		const uintgQYNbtk = BigInt("689")
		const addressdUMns2h = accounts[2]
		const addressypQXorW = accounts[5]
		const uintihquJKB = BigInt("1529")
		const addressjaXWB2Q = accounts[1]
		const addressaxTdnH1 = accounts[2]
		const boolwlYFt1r = await XenoFelixTI6mpds.transfer.call(addressdUMns2h, uintgQYNbtk, {from: accounts[3]});
		const addressZJi3coS = await XenoFelixTI6mpds.removePauser.call(addressypQXorW, {from: accounts[0]});
		const boolQSgNVpj = await XenoFelixTI6mpds.decreaseAllowance.call(addressjaXWB2Q, uintihquJKB, {from: accounts[5]});
		const uint256iShuMAO = await XenoFelixTI6mpds.balanceOf.call(addressaxTdnH1, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringsbJ9Dd9 = "NAa4FNb3YobFjhuq4vBachDCy4FmMRXSv7a5cUxQWixAt30mFbBGqsKterIYc"
		const string7HaSv8 = "dLJXO3pNgxukcxdPWsVCcLoei8cvFYOVP54wOf4R1W5FriVcZJPiCk7fGx7V9t5yovVyfYKj2JKmwJ"
		const uintBbp4VD9 = BigInt("104")
		const XenoFelixlpp3Ejw = await XenoFelix.new(stringsbJ9Dd9, string7HaSv8, uintBbp4VD9, {from: accounts[5]});
		const uintDXPtgcj = BigInt("1756")
		const addressCl0fU4Q = accounts[0]
		const addressi2Q9zfh = accounts[2]
		const uintHST3Zqv = BigInt("513")
		const addressoYI4qRn = accounts[3]
		const boolB1zcviR = await XenoFelixlpp3Ejw.transferFrom.call(addressi2Q9zfh, addressCl0fU4Q, uintDXPtgcj, {from: "0x0000000000000000000000000000000000000001"});
		const addressApIQaW = await XenoFelixlpp3Ejw.burnFrom.call(addressoYI4qRn, uintHST3Zqv, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uinttD4yppw = BigInt("1024")
		const uintdIVJ2Wp = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uinttD4yppw, uintdIVJ2Wp, {from: accounts[4]});
		const uintUI8CU47 = BigInt("371")
		const addressfB7fuuq = accounts[2]
		const addressjLa110 = accounts[0]
//		const addressWiJo0Iu = await XenoFelixhTAAaZ.burnFrom.call(addressfB7fuuq, uintUI8CU47, {from: accounts[0]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});
//		await XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]});
//		const uint2568qTtbz = await XenoFelixhTAAaZ.balanceOf.call(addressjLa110, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixhTAAaZ.burnFrom.call(addressfB7fuuq, uintUI8CU47, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uint4sYX1C = BigInt("1024")
		const uintQdef28r = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uint4sYX1C, uintQdef28r, {from: accounts[4]});
		const addressZmMxOuW = "0x0000000000000000000000000000000000000001"
		const uintRDHbPgN = BigInt("330")
		const uintwy3OZfF = BigInt("41")
		const addressojsuBh = accounts[4]
//		const boolEg7Ml4B = await XenoFelixhTAAaZ.unfreezeAccount.call(addressZmMxOuW, {from: accounts[3]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});
//		const boolS9doioT = await XenoFelixhTAAaZ.lock.call(addressojsuBh, uintwy3OZfF, uintRDHbPgN, {from: accounts[2]});
//		await XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]});

		await expect(XenoFelixhTAAaZ.unfreezeAccount.call(addressZmMxOuW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintlvgjJa = BigInt("1158")
		const uintHerKogm = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintlvgjJa, uintHerKogm, {from: accounts[0]});
		const addressU6XGqKX = accounts[5]
		const addressClNCyWu = accounts[3]
		const addressm3DTnPU = accounts[5]
		const addressODHhY1R = accounts[3]
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressU6XGqKX, {from: accounts[4]});
//		const addressMWokH7H = await XenoFelixIloTvdq.notFrozenAndTransaction.call(addressm3DTnPU, addressClNCyWu, {from: accounts[2]});
//		const address78KnM7 = await XenoFelixIloTvdq.removePauser.call(addressODHhY1R, {from: accounts[4]});

		assert.equal(uint25641yCjB, BigInt("0"))
		await expect(XenoFelixIloTvdq.notFrozenAndTransaction.call(addressm3DTnPU, addressClNCyWu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uintKEi3Liu = BigInt("1024")
		const uintYRdPWzb = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uintKEi3Liu, uintYRdPWzb, {from: accounts[4]});
		const uintfhOywHc = BigInt("1033")
		const addressaHHmzSg = accounts[3]
//		const boolpVICzd = await XenoFelixhTAAaZ.decreaseAllowance.call(addressaHHmzSg, uintfhOywHc, {from: accounts[0]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});
//		await XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]});

		await expect(XenoFelixhTAAaZ.decreaseAllowance.call(addressaHHmzSg, uintfhOywHc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uinttKNdV2b = BigInt("1024")
		const uintLe1BCvH = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uinttKNdV2b, uintLe1BCvH, {from: accounts[4]});
//		await XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]});

		await expect(XenoFelixhTAAaZ.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintQyF7Wt3 = BigInt("1158")
		const uintNsvoJjA = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintQyF7Wt3, uintNsvoJjA, {from: accounts[0]});
		const addressUDWH1C = accounts[6]
		const uintptSKC5 = BigInt("435")
		const addressraPAUXt = accounts[3]
		const addressKYKtIK = accounts[3]
		const addressXkFtopw = accounts[5]
		const addressaPS0yPM = accounts[3]
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressUDWH1C, {from: accounts[4]});
		const boolp73rd6 = await XenoFelixIloTvdq.transfer.call(addressraPAUXt, uintptSKC5, {from: accounts[0]});
//		const addressMWokH7H = await XenoFelixIloTvdq.notFrozenAndTransaction.call(addressXkFtopw, addressKYKtIK, {from: accounts[2]});
//		const address78KnM7 = await XenoFelixIloTvdq.removePauser.call(addressaPS0yPM, {from: accounts[4]});

		assert.equal(boolp73rd6, true)
		assert.equal(uint25641yCjB, BigInt("0"))
		await expect(XenoFelixIloTvdq.notFrozenAndTransaction.call(addressXkFtopw, addressKYKtIK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringrqDQsbS = "3fo"
		const stringnYSaWMF = "m4fvqz0edA4kWlY8fEqaxlz2yX1Lfu9W"
		const uintSc4d88v = BigInt("173")
		const XenoFelixklT5Lq = await XenoFelix.new(stringrqDQsbS, stringnYSaWMF, uintSc4d88v, {from: "0x0000000000000000000000000000000000000001"});
		const uintEpIRtGq = BigInt("1440")
		const addresspUhgo3 = accounts[3]
		const uintjT126A = BigInt("305")
		const addressxcjwuk = accounts[4]
		const boolBBJfApC = await XenoFelixklT5Lq.approve.call(addresspUhgo3, uintEpIRtGq, {from: accounts[2]});
		const boolsqzAse1 = await XenoFelixklT5Lq.burnOwner.call(addressxcjwuk, uintjT126A, {from: accounts[4]});
		await XenoFelixklT5Lq.onlyPauser.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uintymHNW81 = BigInt("1024")
		const uintDB2FtHQ = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uintymHNW81, uintDB2FtHQ, {from: accounts[4]});
		const addressOFanhzr = accounts[4]
//		const addresslC80itf = await XenoFelixhTAAaZ.addPauser.call(addressOFanhzr, {from: accounts[4]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});

		await expect(XenoFelixhTAAaZ.addPauser.call(addressOFanhzr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintITqYdsv = BigInt("1158")
		const uintL3JVAB9 = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintITqYdsv, uintL3JVAB9, {from: accounts[0]});
		const uintc7iD3XS = BigInt("246")
		const addressm5TYts = accounts[2]
		const addressmvS6Y1 = accounts[1]
		const addressgQSdDNI = accounts[6]
		const addressrXI6Kl0 = accounts[3]
//		const boolbBy7Sp = await XenoFelixIloTvdq.transferFrom.call(addressmvS6Y1, addressm5TYts, uintc7iD3XS, {from: accounts[2]});
//		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressgQSdDNI, {from: accounts[4]});
//		const address78KnM7 = await XenoFelixIloTvdq.removePauser.call(addressrXI6Kl0, {from: accounts[4]});
//		await XenoFelixIloTvdq.whenNotPaused.call({from: accounts[4]});

		await expect(XenoFelixIloTvdq.transferFrom.call(addressmvS6Y1, addressm5TYts, uintc7iD3XS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintxGxojDq = BigInt("1158")
		const uintLXkKJXb = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintxGxojDq, uintLXkKJXb, {from: accounts[0]});
		const addressc1mQYKP = accounts[0]
		const addressVdiSZ7D = accounts[3]
		const addressXXGqVu = accounts[6]
		const uint256SbJB77C = await XenoFelixIloTvdq.allowance.call(addressVdiSZ7D, addressc1mQYKP, {from: accounts[2]});
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressXXGqVu, {from: accounts[4]});

		assert.equal(uint25641yCjB, BigInt("0"))
		assert.equal(uint256SbJB77C, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintfb9O2LR = BigInt("1158")
		const uintcEft15C = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintfb9O2LR, uintcEft15C, {from: accounts[0]});
		const addressAzZAs3s = accounts[6]
		const uintSwzzzcK = BigInt("937")
		const addressbC5qK5e = accounts[2]
		const uintXw4nsp6 = BigInt("109")
		const addressP0mv1pe = accounts[0]
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressAzZAs3s, {from: accounts[4]});
		const boolbWrL0Uo = await XenoFelixIloTvdq.increaseAllowance.call(addressbC5qK5e, uintSwzzzcK, {from: accounts[1]});
//		const boollbvGKpT = await XenoFelixIloTvdq.transfer.call(addressP0mv1pe, uintXw4nsp6, {from: accounts[5]});

		assert.equal(boolbWrL0Uo, true)
		assert.equal(uint25641yCjB, BigInt("0"))
		await expect(XenoFelixIloTvdq.transfer.call(addressP0mv1pe, uintXw4nsp6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintneG2aXW = BigInt("1158")
		const uintin4vrTA = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintneG2aXW, uintin4vrTA, {from: accounts[0]});
		const addressboQSMZc = accounts[5]
		const addressoGt23h = accounts[0]
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressboQSMZc, {from: accounts[4]});
		const boolaLBz6iP = await XenoFelixIloTvdq.isOwner.call(addressoGt23h, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaLBz6iP, true)
		assert.equal(uint25641yCjB, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uintIZo4xPw = BigInt("1024")
		const uintKXuwZ8K = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uintIZo4xPw, uintKXuwZ8K, {from: accounts[4]});
		const uintilC0eNU = BigInt("13")
		const addresszmof1Bj = accounts[0]
		const uint256y4kb3jz = await XenoFelixhTAAaZ.totalSupply.call({from: accounts[0]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});
//		const boolZWf4V7k = await XenoFelixhTAAaZ.burnOwner.call(addresszmof1Bj, uintilC0eNU, {from: accounts[0]});

		assert.equal(uint256y4kb3jz, BigInt("15532699009162645360912998341633552072647879577652120711346191223075977035776"))
		await expect(XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uinti6Sqfa0 = BigInt("1158")
		const uinte002rbq = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uinti6Sqfa0, uinte002rbq, {from: accounts[0]});
		const uinteB6DK8 = BigInt("1450")
		const uintWnQfx7M = BigInt("39")
		const addressFNebsD = accounts[3]
//		const uint256xnfw0h = await XenoFelixIloTvdq.burn.call(uinteB6DK8, {from: accounts[2]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addressFNebsD, uintWnQfx7M, {from: accounts[3]});

		await expect(XenoFelixIloTvdq.burn.call(uinteB6DK8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintFpwCHI7 = BigInt("1158")
		const uintpoBEgCs = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintFpwCHI7, uintpoBEgCs, {from: accounts[0]});
		const uintJabtR1d = BigInt("39")
		const addressafnyoq4 = accounts[2]
		const uint8ZroNfMT = await XenoFelixIloTvdq.decimals.call({from: accounts[2]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addressafnyoq4, uintJabtR1d, {from: accounts[3]});

		assert.equal(uint8ZroNfMT, BigInt("245"))
		await expect(XenoFelixIloTvdq.transfer.call(addressafnyoq4, uintJabtR1d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsfDckB = "vzYEeACmXUGjrQ6LjELFuWMQTfMVhSHnXqrnatkh"
		const stringHDC4oFX = "gR3XqVz3Y8E9gVjbrvcY3sKV7gXzEE3qNO95Y2uwvbHMbyu3orJ1GU9irNzpntU"
		const uintDCbflwA = BigInt("1024")
		const uintoa9PoQy = BigInt("208")
		const XenoFelixhTAAaZ = await XenoFelix.new(stringsfDckB, stringHDC4oFX, uintDCbflwA, uintoa9PoQy, {from: accounts[4]});
		const addressUI79M4X = "0x0000000000000000000000000000000000000001"
		const uintuDOTCnh = BigInt("765")
		const addressXCXups = accounts[4]
		const addressemGikzC = accounts[0]
		const boolNAmfwKP = await XenoFelixhTAAaZ.freezeAccount.call(addressUI79M4X, {from: accounts[4]});
//		const booljY66OZs = await XenoFelixhTAAaZ.transferFrom.call(addressemGikzC, addressXCXups, uintuDOTCnh, {from: accounts[0]});
//		await XenoFelixhTAAaZ.onlyPauser.call({from: accounts[4]});

		assert.equal(boolNAmfwKP, true)
		await expect(XenoFelixhTAAaZ.transferFrom.call(addressemGikzC, addressXCXups, uintuDOTCnh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintiNITpEy = BigInt("1158")
		const uintZ2no0W = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintiNITpEy, uintZ2no0W, {from: accounts[0]});
		const addressopeJYrU = accounts[3]
		const uintDEkU5u8 = BigInt("39")
		const addressBKsgNS = accounts[3]
		const addressBxVRX7o = await XenoFelixIloTvdq.transferOwnership.call(addressopeJYrU, {from: accounts[0]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addressBKsgNS, uintDEkU5u8, {from: accounts[3]});
//		const stringtDTJoMr = await XenoFelixIloTvdq.symbol.call({from: accounts[3]});
//		await XenoFelixIloTvdq.whenPaused.call({from: accounts[0]});

		await expect(XenoFelixIloTvdq.transfer.call(addressBKsgNS, uintDEkU5u8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintDwIhuCW = BigInt("1158")
		const uintM1vKJ8m = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintDwIhuCW, uintM1vKJ8m, {from: accounts[0]});
		const addressUkUsZC7 = accounts[5]
		const addressuFCqbl8 = accounts[0]
		const addressfsvGSwf = "0x0000000000000000000000000000000000000001"
		const uintZAaBvMI = BigInt("945")
		const addressBRk1FvI = accounts[3]
		const addresslKcPfa = accounts[4]
		const uintCFNMxR = BigInt("246")
		const addresswJxrFtj = accounts[2]
		const address1IZfcQ = accounts[2]
		const uint256Mb72SB = await XenoFelixIloTvdq.allowance.call(addressuFCqbl8, addressUkUsZC7, {from: accounts[4]});
//		const boolKe5Oz4c = await XenoFelixIloTvdq.unfreezeAccount.call(addressfsvGSwf, {from: accounts[0]});
//		const boolpAhsneV = await XenoFelixIloTvdq.transferFrom.call(addresslKcPfa, addressBRk1FvI, uintZAaBvMI, {from: accounts[5]});
//		const boolbBy7Sp = await XenoFelixIloTvdq.transferFrom.call(address1IZfcQ, addresswJxrFtj, uintCFNMxR, {from: accounts[2]});
//		await XenoFelixIloTvdq.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256Mb72SB, BigInt("0"))
		await expect(XenoFelixIloTvdq.unfreezeAccount.call(addressfsvGSwf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintX5DuKsf = BigInt("1158")
		const uinteiglWRY = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintX5DuKsf, uinteiglWRY, {from: accounts[0]});
		const addressGRyKX2s = accounts[6]
		const stringO6iWWaL = await XenoFelixIloTvdq.symbol.call({from: accounts[2]});
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressGRyKX2s, {from: accounts[4]});

		assert.equal(stringO6iWWaL, "GyHRumEj9cK75fj7S1L38t2I1VrD4013G")
		assert.equal(uint25641yCjB, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringc6vMULU = "dD38egzVariuhSTvOcm"
		const stringydmD5Jr = "5R2PEttIrOKfvsGYO9QBend"
		const uintLOQI7Ma = BigInt("230")
		const XenoFelixBTK6SA0 = await XenoFelix.new(stringc6vMULU, stringydmD5Jr, uintLOQI7Ma, {from: accounts[3]});
		const uintohFD3b0 = BigInt("964")
		const addressSa6avGS = accounts[5]
		const uintjLqYtjv = BigInt("1262")
		const addresshQtHfA = accounts[0]
		const boolZ7pBrY2 = await XenoFelixBTK6SA0.burnOwner.call(addressSa6avGS, uintohFD3b0, {from: accounts[3]});
		await XenoFelixBTK6SA0.onlyNewOwner.call({from: accounts[5]});
		const addressZasJYEP = await XenoFelixBTK6SA0.burnFrom.call(addresshQtHfA, uintjLqYtjv, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintIVQBZQ = BigInt("1158")
		const uintIhAZHw = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintIVQBZQ, uintIhAZHw, {from: accounts[0]});
		const uintc9OuD4B = BigInt("81")
		const addressltiQjbu = accounts[2]
		const stringaii45YA = await XenoFelixIloTvdq.name.call({from: accounts[2]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addressltiQjbu, uintc9OuD4B, {from: accounts[3]});
//		await XenoFelixIloTvdq.onlyOwner.call({from: accounts[1]});

		assert.equal(stringaii45YA, "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d")
		await expect(XenoFelixIloTvdq.transfer.call(addressltiQjbu, uintc9OuD4B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintbMaDKcM = BigInt("1158")
		const uintzPyG54s = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintbMaDKcM, uintzPyG54s, {from: accounts[0]});
		const uintKZIle8 = BigInt("1363")
		const uintN3Ak6Ut = BigInt("383")
		const addressz4OMIHv = accounts[2]
		const uintBBbqeEe = BigInt("561")
		const uintRus49K2 = BigInt("131")
		const addressiq7TJej = accounts[3]
		const addressHC4wQS1 = accounts[6]
//		const boolBt7MsvV = await XenoFelixIloTvdq.lock.call(addressz4OMIHv, uintN3Ak6Ut, uintKZIle8, {from: accounts[0]});
//		const uint256HPNMqyf = await XenoFelixIloTvdq.burn.call(uintBBbqeEe, {from: accounts[3]});
//		const boolZT9EY18 = await XenoFelixIloTvdq.unlock.call(addressiq7TJej, uintRus49K2, {from: accounts[0]});
//		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressHC4wQS1, {from: accounts[4]});

		await expect(XenoFelixIloTvdq.lock.call(addressz4OMIHv, uintN3Ak6Ut, uintKZIle8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintQe2uyt = BigInt("1158")
		const uintRoHMS3w = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintQe2uyt, uintRoHMS3w, {from: accounts[0]});
		const addressPwRGKX7 = accounts[6]
		const uinteh9Jkq4 = BigInt("2012")
		const addressd4AzpK6 = accounts[2]
		const uintS3GLj5S = BigInt("904")
		const addressRwq8gFh = accounts[3]
		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressPwRGKX7, {from: accounts[4]});
		const boolCt6MMfq = await XenoFelixIloTvdq.increaseAllowance.call(addressd4AzpK6, uinteh9Jkq4, {from: accounts[4]});
//		const boolZ0BmHLT = await XenoFelixIloTvdq.burnOwner.call(addressRwq8gFh, uintS3GLj5S, {from: accounts[0]});

		assert.equal(boolCt6MMfq, true)
		assert.equal(uint25641yCjB, BigInt("0"))
		await expect(XenoFelixIloTvdq.burnOwner.call(addressRwq8gFh, uintS3GLj5S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintQxOMMob = BigInt("1158")
		const uintrgKwq8L = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintQxOMMob, uintrgKwq8L, {from: accounts[0]});
		const uintquVTzdt = BigInt("563")
		const addressK8PBz6H = accounts[2]
		const addressNqWDQru = accounts[4]
		const addressol8PJwx = accounts[2]
		const addressMJh1Z3 = accounts[5]
		const boolnL0ikH = await XenoFelixIloTvdq.approve.call(addressK8PBz6H, uintquVTzdt, {from: accounts[4]});
//		const addressDIfVLO = await XenoFelixIloTvdq.notFrozenAndTransaction.call(addressol8PJwx, addressNqWDQru, {from: accounts[3]});
//		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressMJh1Z3, {from: accounts[4]});

		assert.equal(boolnL0ikH, true)
		await expect(XenoFelixIloTvdq.notFrozenAndTransaction.call(addressol8PJwx, addressNqWDQru, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintAWxDDw6 = BigInt("1158")
		const uintD3Tjqpq = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintAWxDDw6, uintD3Tjqpq, {from: accounts[0]});
		const addresspFBvM9Z = accounts[4]
		const uintaPfBQB8 = BigInt("231")
		const addresskqjnUwr = accounts[2]
		const addresshjddKQX = accounts[1]
		const uint8TqPj71r = await XenoFelixIloTvdq.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressEW6V366 = await XenoFelixIloTvdq.removePauser.call(addresspFBvM9Z, {from: accounts[0]});
//		await XenoFelixIloTvdq.pause.call({from: accounts[4]});
//		const boolbBy7Sp = await XenoFelixIloTvdq.transferFrom.call(addresshjddKQX, addresskqjnUwr, uintaPfBQB8, {from: accounts[2]});

		assert.equal(uint8TqPj71r, BigInt("245"))
		await expect(XenoFelixIloTvdq.removePauser.call(addresspFBvM9Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzn76t3 = "duQTig28qCEcrKyEvUprWcCuCpueU7bEbv7AZMA4eaTWnztSuk5462beIeHcHXvp59rsPcAs9859"
		const stringIRU5hr = "hzNTGbzZMYwfNWGI5zW8NDohbdIwJVXR9u7EbXAx"
		const uinttjueWWr = BigInt("150")
		const XenoFelixStUksPZ = await XenoFelix.new(stringzn76t3, stringIRU5hr, uinttjueWWr, {from: accounts[1]});
		const addressyiFN5tr = accounts[5]
		const uintQFwEd1r = BigInt("1231")
		const addressLiBUhh = accounts[4]
		const address5ktLkR = accounts[3]
		const addressg13UyGa = await XenoFelixStUksPZ.removePauser.call(addressyiFN5tr, {from: accounts[5]});
		const boolBtfTHNy = await XenoFelixStUksPZ.increaseAllowance.call(addressLiBUhh, uintQFwEd1r, {from: accounts[0]});
		const boolesUj4qn = await XenoFelixStUksPZ.acceptOwnership.call({from: accounts[0]});
		await XenoFelixStUksPZ.unpause.call({from: accounts[0]});
		const addressJEurw9Y = await XenoFelixStUksPZ.transferOwnership.call(address5ktLkR, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintWsbkGah = BigInt("1158")
		const uintZ203vx3 = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintWsbkGah, uintZ203vx3, {from: accounts[0]});
		const uintqvuYfKc = BigInt("39")
		const addresseGsVomw = accounts[2]
		const boolQl8UFmi = await XenoFelixIloTvdq.paused.call({from: accounts[3]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addresseGsVomw, uintqvuYfKc, {from: accounts[3]});

		assert.equal(boolQl8UFmi, false)
		await expect(XenoFelixIloTvdq.transfer.call(addresseGsVomw, uintqvuYfKc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uinteifxWBO = BigInt("1158")
		const uintcYdR2NV = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uinteifxWBO, uintcYdR2NV, {from: accounts[0]});
		const addressCRlLk7b = accounts[6]
//		await XenoFelixIloTvdq.pause.call({from: accounts[0]});
//		const uint25641yCjB = await XenoFelixIloTvdq.balanceOf.call(addressCRlLk7b, {from: accounts[4]});

		await expect(XenoFelixIloTvdq.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpWY9cOj = "z29a7AQ3oaBtW4PVpX4JlFy84l6az6lfPE9TSBjwzMJDVRJhfxysDmm5LnP3Z8Z"
		const stringEH1ibVF = "JW3261LjaYdGGpMwTlNLRLGKHTIXS1Pj"
		const uintTUyDpgR = BigInt("148")
		const uintVYxlBsJ = BigInt("50")
		const XenoFelixtHqijbW = await XenoFelix.new(stringpWY9cOj, stringEH1ibVF, uintTUyDpgR, uintVYxlBsJ, {from: "0x0000000000000000000000000000000000000001"});
		const addresscDYUKq = accounts[5]
		await XenoFelixtHqijbW.onlyPauser.call({from: accounts[2]});
		await XenoFelixtHqijbW.onlyPauser.call({from: accounts[2]});
		await XenoFelixtHqijbW.onlyNewOwner.call({from: accounts[0]});
		const uint256eDNMUD = await XenoFelixtHqijbW.balanceOf.call(addresscDYUKq, {from: accounts[4]});
		const stringOEhfcsS = await XenoFelixtHqijbW.name.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringW5WXjak = "eol35GYYIImP54kuZz2Lo4liwBMjXW9d7vzvH8pXmbhqCLnIpKoTTZmj3QVDY4ibGPGyNMXyqGZnn84Gy9WoWt4d"
		const stringc7Yhb4w = "GyHRumEj9cK75fj7S1L38t2I1VrD4013G"
		const uintnyRItzI = BigInt("1158")
		const uinton18740 = BigInt("245")
		const XenoFelixIloTvdq = await XenoFelix.new(stringW5WXjak, stringc7Yhb4w, uintnyRItzI, uinton18740, {from: accounts[0]});
		const uintv6UTZTA = BigInt("1321")
		const uintoHVJNdu = BigInt("1594")
		const addressVGJ3yHe = accounts[4]
		const uintYVEdXXp = BigInt("36")
		const addressI2MTnSJ = accounts[2]
		const boolmomgkIE = await XenoFelixIloTvdq.transferWithLock.call(addressVGJ3yHe, uintoHVJNdu, uintv6UTZTA, {from: accounts[0]});
//		const boole2jX6FF = await XenoFelixIloTvdq.transfer.call(addressI2MTnSJ, uintYVEdXXp, {from: accounts[3]});

		assert.equal(boolmomgkIE, true)
		await expect(XenoFelixIloTvdq.transfer.call(addressI2MTnSJ, uintYVEdXXp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})