const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintcXrtF0J = BigInt("71")
		const WOLFT7dVxiB = await WOLF.new(stringlv7uv9X, stringWd0Gq1d, uintcXrtF0J, {from: accounts[3]});
		const uintatWFwwj = BigInt("123")
		const addressW7FQWll = accounts[0]
		const addressH4C7gXM = accounts[4]
		const uintxdC4Ho = BigInt("1923")
		const addressnXj8k0 = accounts[1]
		const addresstJcCRsv = "0x0000000000000000000000000000000000000001"
		const addressJflIKQ7 = accounts[4]
		const boolHhvnJ25 = await WOLFT7dVxiB.transferFrom.call(addressH4C7gXM, addressW7FQWll, uintatWFwwj, {from: accounts[5]});
		const boolU37hp5M = await WOLFT7dVxiB.transferFrom.call(addresstJcCRsv, addressnXj8k0, uintxdC4Ho, {from: accounts[0]});
		const boolIn9nPcv = await WOLFT7dVxiB.transferownership.call(addressJflIKQ7, {from: accounts[1]});

		await expect(WOLFT7dVxiB.transferFrom.call(addressH4C7gXM, addressW7FQWll, uintatWFwwj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringbWFbVV8 = "sq6LkhoGGq627nkSLhrsR1li13wbWrIpOch5PYt5vQ4s9IX9"
		const stringbJsc79 = "UfoDKmRhNwbbG1lKYF6aK3LQF3Fh"
		const uintVPGxrDk = BigInt("379")
		const WOLFJ2sVuCq = await WOLF.new(stringbWFbVV8, stringbJsc79, uintVPGxrDk, {from: accounts[2]});
		const uintskJbxk = BigInt("674")
		const addressODepuUM = accounts[3]
		const uintY4GvQqD = BigInt("71")
		const address7YokVf = accounts[0]
		const uintYIQpBSb = BigInt("604")
		const addressCtnMOsx = accounts[1]
		const uintk8ax2nO = BigInt("1654")
		const addressaqnP7Kw = accounts[4]
		const addressS29FVW = accounts[4]
		const boolYqHiMnp = await WOLFJ2sVuCq.approveAndCall.call(addressODepuUM, uintskJbxk, {from: accounts[2]});
		const boolcfhL7T0 = await WOLFJ2sVuCq.approve.call(address7YokVf, uintY4GvQqD, {from: "0x0000000000000000000000000000000000000001"});
		const booldjdXFtt = await WOLFJ2sVuCq.approveAndCall.call(addressCtnMOsx, uintYIQpBSb, {from: accounts[0]});
		const boolx01kik0 = await WOLFJ2sVuCq.approveAndCall.call(addressaqnP7Kw, uintk8ax2nO, {from: accounts[2]});
		const boolgXEcskO = await WOLFJ2sVuCq.transferownership.call(addressS29FVW, {from: accounts[2]});

		assert.equal(boolYqHiMnp, true)
		assert.equal(boolcfhL7T0, true)
		await expect(WOLFJ2sVuCq.approveAndCall.call(addressCtnMOsx, uintYIQpBSb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringODQOeqS = "HSqBspXNmnEQGMJN2AFJ9t9OMColMrBMAHrUocqrYfg6dPy3aj"
		const stringzVsDDbY = "YUTak7y07wJCuc"
		const uinthp3QTjZ = BigInt("740")
		const WOLFE0L3ihl = await WOLF.new(stringODQOeqS, stringzVsDDbY, uinthp3QTjZ, {from: accounts[0]});
		const uintunOniXJ = BigInt("480")
		const addressRmh7Un = accounts[0]
		const addressJKPybeC = accounts[4]
		const boolaKhgffK = await WOLFE0L3ihl.approve.call(addressRmh7Un, uintunOniXJ, {from: accounts[1]});
		const boolRzbekEr = await WOLFE0L3ihl.transferownership.call(addressJKPybeC, {from: accounts[4]});

		assert.equal(boolaKhgffK, true)
		await expect(WOLFE0L3ihl.transferownership.call(addressJKPybeC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtcctv3T = "IYxWeTq7A6PCqcQmG6CPuGD6JAwOSMaFstm42hYXbygImFfpRqyy"
		const stringcGxtwub = "tCsXoqlrt36e5GVW1isOvoWq9OnfDYiHeckFOLT5kn1wu9NvGxgvQ5QSGvj4b"
		const uinth87L7rn = BigInt("1532")
		const WOLFFyZRpVt = await WOLF.new(stringtcctv3T, stringcGxtwub, uinth87L7rn, {from: accounts[0]});
		const uintjIAMvR = BigInt("1947")
		const addressGhdiizD = accounts[2]
		const uintHGEEdbJ = BigInt("2015")
		const address5QpIUL = accounts[5]
		const uintichPx8d = BigInt("532")
		const addressb8UjfS5 = accounts[3]
		const addressVHgmGn = accounts[4]
		const addressddxIKE = "0x0000000000000000000000000000000000000001"
		const uintaKf2xsC = BigInt("1987")
		const addressiwvoK59 = accounts[1]
		const addressp7qPOV = accounts[5]
		const boolYMawDOM = await WOLFFyZRpVt.transfer.call(addressGhdiizD, uintjIAMvR, {from: accounts[5]});
		const boolFBU3Ila = await WOLFFyZRpVt.approve.call(address5QpIUL, uintHGEEdbJ, {from: accounts[3]});
		const boolYOggBb = await WOLFFyZRpVt.transferFrom.call(addressVHgmGn, addressb8UjfS5, uintichPx8d, {from: accounts[4]});
		const boolldKITk1 = await WOLFFyZRpVt.transferownership.call(addressddxIKE, {from: accounts[2]});
		const boolRlZH68 = await WOLFFyZRpVt.transferFrom.call(addressp7qPOV, addressiwvoK59, uintaKf2xsC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFFyZRpVt.transfer.call(addressGhdiizD, uintjIAMvR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringbWFbVV8 = "sq6LkhoGGq627nkSLhrsR1li13wbWrIpOch5PYt5vQ4s9IX9"
		const stringbJsc79 = "UfoDKmRhNwbbG1lKYF6aK3LQF3Fh"
		const uintsgRLFPs = BigInt("379")
		const WOLFJ2sVuCq = await WOLF.new(stringbWFbVV8, stringbJsc79, uintsgRLFPs, {from: accounts[2]});
		const uintEadPnw3 = BigInt("674")
		const addressTlnwKcP = accounts[3]
		const uintNlwJxjr = BigInt("1654")
		const addressEG1sGps = accounts[4]
		const addressx6y8ZO = accounts[4]
		const boolYqHiMnp = await WOLFJ2sVuCq.approveAndCall.call(addressTlnwKcP, uintEadPnw3, {from: accounts[2]});
		const boolx01kik0 = await WOLFJ2sVuCq.approveAndCall.call(addressEG1sGps, uintNlwJxjr, {from: accounts[2]});
		const boolgXEcskO = await WOLFJ2sVuCq.transferownership.call(addressx6y8ZO, {from: accounts[2]});

		assert.equal(boolYqHiMnp, true)
		assert.equal(boolgXEcskO, true)
		assert.equal(boolx01kik0, true)
	});

	it('test for WOLF', async () => {
		const stringyZttUyK = "djtQF4nIamQ4TVbaCL86WM0Fs3xCNHgakeGVybuKNU1XDIyoFOxe"
		const stringWBfFttA = "UaDZpdn6eBe2Nd17GSED9Yl4C8bWUTcUVG8cuEJkSRC8O"
		const uint7a2iy6 = BigInt("996")
		const WOLFk4gK0aq = await WOLF.new(stringyZttUyK, stringWBfFttA, uint7a2iy6, {from: "0x0000000000000000000000000000000000000001"});
		const address3gzJ76 = accounts[2]
		const uintVUI06af = BigInt("1300")
		const addressuggXKIm = accounts[0]
		const boolKaH69oF = await WOLFk4gK0aq.transferownership.call(address3gzJ76, {from: accounts[4]});
		const boolJMKYOwQ = await WOLFk4gK0aq.approve.call(addressuggXKIm, uintVUI06af, {from: accounts[1]});
	});

	it('test for WOLF', async () => {
		const stringODQOeqS = "HSqBspXNmnEQGMJN2AFJ9t9OMColMrBMAHrUocqrYfg6dPy3aj"
		const stringzVsDDbY = "YUTak7y07wJCuc"
		const uintc8aut52 = BigInt("740")
		const WOLFE0L3ihl = await WOLF.new(stringODQOeqS, stringzVsDDbY, uintc8aut52, {from: accounts[0]});
		const uintnYZlNk = BigInt("480")
		const addressSsp4A1 = accounts[1]
		const uintogv8cWA = BigInt("951")
		const addressu7wE6rv = accounts[0]
		const uintKCwgy1T = BigInt("1281")
		const addresss3pvOJq = accounts[0]
		const uintzGBjiGm = BigInt("1200")
		const addressZqkqBls = accounts[0]
		const addressfJDbnwp = accounts[2]
		const boolaKhgffK = await WOLFE0L3ihl.approve.call(addressSsp4A1, uintnYZlNk, {from: accounts[1]});
		const boolnn1mIsI = await WOLFE0L3ihl.transfer.call(addressu7wE6rv, uintogv8cWA, {from: accounts[0]});
		const boolW6ApePX = await WOLFE0L3ihl.approve.call(addresss3pvOJq, uintKCwgy1T, {from: accounts[4]});
		const boolPgB2YlR = await WOLFE0L3ihl.transferFrom.call(addressfJDbnwp, addressZqkqBls, uintzGBjiGm, {from: accounts[1]});

		assert.equal(boolW6ApePX, true)
		assert.equal(boolaKhgffK, true)
		assert.equal(boolnn1mIsI, true)
		await expect(WOLFE0L3ihl.transferFrom.call(addressfJDbnwp, addressZqkqBls, uintzGBjiGm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringlv7uv9X = "Ms6ACZneMX3KSKJpHkomTS2eVqykU6SnjLSwm4hLsWy9nQc3a5iuM0h"
		const stringWd0Gq1d = "xLZX1l4g4hHe5RoMNEOmnwkbUOK0MxVe8elPLoVkTkQugI9Fr1KNHEBT3wAjxovz56Dy8cX2dIsTUSfMv"
		const uintxNufIm = BigInt("71")
		const WOLFT7dVxiB = await WOLF.new(stringlv7uv9X, stringWd0Gq1d, uintxNufIm, {from: accounts[3]});
		const uintRHgvubv = BigInt("0")
		const addressZ3vr93W = accounts[0]
		const addressnM3F53z = accounts[0]
		const booliPP1360 = await WOLFT7dVxiB.transferFrom.call(addressnM3F53z, addressZ3vr93W, uintRHgvubv, {from: accounts[4]});

		assert.equal(booliPP1360, true)
	});

	it('test for WOLF', async () => {
		const stringtcctv3T = "IYxWeTq7A6PCqcQmG6CPuGD6JAwOSMaFstm42hYXbygImFfpRqyy"
		const stringcGxtwub = "tCsXoqlrt36e5GVW1isOvoWq9OnfDYiHeckFOLT5kn1wu9NvGxgvQ5QSGvj4b"
		const uint8y8pjL = BigInt("1532")
		const WOLFFyZRpVt = await WOLF.new(stringtcctv3T, stringcGxtwub, uint8y8pjL, {from: accounts[0]});
		const uintxttBrGZ = BigInt("0")
		const addressRzyp62C = accounts[0]
		const uintUad3pQy = BigInt("1124")
		const addressLY47OS = "0x0000000000000000000000000000000000000002"
		const boolDtuphtL = await WOLFFyZRpVt.approveAndCall.call(addressRzyp62C, uintxttBrGZ, {from: accounts[0]});
		const booluq7RZZ8 = await WOLFFyZRpVt.approveAndCall.call(addressLY47OS, uintUad3pQy, {from: accounts[4]});

		assert.equal(boolDtuphtL, true)
		await expect(WOLFFyZRpVt.approveAndCall.call(addressLY47OS, uintUad3pQy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})