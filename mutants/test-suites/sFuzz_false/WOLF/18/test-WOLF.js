const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringGshhQjr = "UxnPOEUX1g7QbuTaETRTbGo"
		const stringI4WC3E5 = "lhTSuJphF7vXeScINERlx7sYCkwDrPbpo3FASKrUh7fGW8eQ4zPP2gM7yydbQpHzmBb"
		const uintw7G4L87 = BigInt("273")
		const WOLFhAc8PfQ = await WOLF.new(stringGshhQjr, stringI4WC3E5, uintw7G4L87, {from: accounts[4]});
		const uintJEDyVgu = BigInt("565")
		const addresshaeSTXM = accounts[0]
		const uintCbQYbeR = BigInt("304")
		const addressO0CkbIG = accounts[0]
		const boolAdMrLT8 = await WOLFhAc8PfQ.approve.call(addresshaeSTXM, uintJEDyVgu, {from: accounts[4]});
		const boolLUTKZFs = await WOLFhAc8PfQ.approve.call(addressO0CkbIG, uintCbQYbeR, {from: accounts[0]});

		assert.equal(boolAdMrLT8, true)
		assert.equal(boolLUTKZFs, true)
	});

	it('test for WOLF', async () => {
		const stringKwrcbCU = "HCsH1EqRPAxduHfvv10CQafCPJvxXBamlFMgb8PTGJRRWlkawoSftXhGBfI18BS9uJ7cuo7KtOUJrNSpaPt2j7UALp"
		const stringgkAxRVy = "UswX8Ah3ftIK464htf"
		const uint4w5bJq = BigInt("8")
		const WOLFTNq2fZK = await WOLF.new(stringKwrcbCU, stringgkAxRVy, uint4w5bJq, {from: accounts[4]});
		const uintfmIOG1 = BigInt("1719")
		const addressvBgbPbg = accounts[3]
		const addressONaXcEh = accounts[3]
		const uintXc7c1em = BigInt("1440")
		const addressJnJWDx = accounts[3]
		const uintbcdU6j = BigInt("1071")
		const addressSw2nJWT = accounts[4]
		const addressjEbc9fh = accounts[3]
		const addresscEEQn9 = "0x0000000000000000000000000000000000000001"
		const boolqqrjL2f = await WOLFTNq2fZK.approveAndCall.call(addressvBgbPbg, uintfmIOG1, {from: accounts[4]});
//		const boolgUkhQse = await WOLFTNq2fZK.transferownership.call(addressONaXcEh, {from: accounts[2]});
//		const boolhSzL1e = await WOLFTNq2fZK.approveAndCall.call(addressJnJWDx, uintXc7c1em, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYsXA89w = await WOLFTNq2fZK.transferFrom.call(addressjEbc9fh, addressSw2nJWT, uintbcdU6j, {from: accounts[1]});
//		const boolY8eDKDy = await WOLFTNq2fZK.transferownership.call(addresscEEQn9, {from: accounts[3]});

		assert.equal(boolqqrjL2f, true)
		await expect(WOLFTNq2fZK.transferownership.call(addressONaXcEh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringgMZUUhh = "uKbRBsxYSUGccEX3QY3xzT8"
		const stringuWYG82X = "D2VF6mA75hHzxl0iXuOcf3yS0ZRjjEE3rwwuX1vlotuYjxTQSWPZPdhIMarlMvWDUGfArGOsCCKuQuue8r5vBbNq7RVRtSxB4"
		const uintQIVZTXu = BigInt("404")
		const WOLFsD3uGm7 = await WOLF.new(stringgMZUUhh, stringuWYG82X, uintQIVZTXu, {from: accounts[0]});
		const uintbAmvErK = BigInt("293")
		const addresshdb6TR9 = accounts[1]
		const uintOBnHcZA = BigInt("1227")
		const addressqLljvf = accounts[1]
		const uintAl4PQgW = BigInt("934")
		const addressGPjteJz = accounts[4]
		const uintwzU9ME = BigInt("1314")
		const addressVdroij0 = accounts[2]
		const addressGyvGYgx = accounts[1]
		const addressz1yvyNY = accounts[5]
		const boolcuSmCre = await WOLFsD3uGm7.approve.call(addresshdb6TR9, uintbAmvErK, {from: accounts[0]});
		const boolhZU4qnD = await WOLFsD3uGm7.approve.call(addressqLljvf, uintOBnHcZA, {from: accounts[5]});
		const boolu9qU7FV = await WOLFsD3uGm7.approve.call(addressGPjteJz, uintAl4PQgW, {from: accounts[1]});
//		const booljWSjTvv = await WOLFsD3uGm7.transferFrom.call(addressGyvGYgx, addressVdroij0, uintwzU9ME, {from: accounts[4]});
//		const boolkmW3go = await WOLFsD3uGm7.transferownership.call(addressz1yvyNY, {from: accounts[0]});

		assert.equal(boolcuSmCre, true)
		assert.equal(boolhZU4qnD, true)
		assert.equal(boolu9qU7FV, true)
		await expect(WOLFsD3uGm7.transferFrom.call(addressGyvGYgx, addressVdroij0, uintwzU9ME, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringxQXNtTb = "Gx65OO1kv51u"
		const stringU6LEqzm = "wqgBT5k6eBHXq7NF0O2IpJ9ttVkPji7nOoNEoOjNz02zqc7A1waJ"
		const uintxc21Ccf = BigInt("188")
		const WOLFJeoAXNa = await WOLF.new(stringxQXNtTb, stringU6LEqzm, uintxc21Ccf, {from: accounts[5]});
		const uintGSsobOh = BigInt("379")
		const addresskjN2mhl = accounts[2]
		const addresssxv2vR9 = accounts[2]
		const uintPQXtcRP = BigInt("1181")
		const addressTJmrg5 = accounts[4]
		const addressyn4VLf6 = accounts[2]
		const uintEKj7ah0 = BigInt("640")
		const addressg2qN40b = accounts[0]
		const addressjNd0hr = accounts[2]
		const uintrUe7H1b = BigInt("1844")
		const addressr9cYiyF = accounts[4]
//		const boolVAeaLXP = await WOLFJeoAXNa.transferFrom.call(addresssxv2vR9, addresskjN2mhl, uintGSsobOh, {from: accounts[2]});
//		const boolNvOkDX8 = await WOLFJeoAXNa.transferFrom.call(addressyn4VLf6, addressTJmrg5, uintPQXtcRP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolax0Dkh = await WOLFJeoAXNa.transferFrom.call(addressjNd0hr, addressg2qN40b, uintEKj7ah0, {from: accounts[2]});
//		const boolYL6KODX = await WOLFJeoAXNa.approve.call(addressr9cYiyF, uintrUe7H1b, {from: accounts[0]});

		await expect(WOLFJeoAXNa.transferFrom.call(addresssxv2vR9, addresskjN2mhl, uintGSsobOh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringS5h1YmG = "vBWvvfazZvM0BOSzhvr23"
		const stringPfsRigl = "SkVzbaoYjvyDLr57ayyALQmxLMvmB0jiYcS2eZJVlfc7XCVLGnh0i0UC7rkD1wfR0YGCUygXJ1yb"
		const uintez9CqEg = BigInt("150")
		const WOLFIIzXSgk = await WOLF.new(stringS5h1YmG, stringPfsRigl, uintez9CqEg, {from: accounts[3]});
		const uinta6EaWVt = BigInt("2016")
		const addressFQlY1q9 = accounts[5]
		const uintAwg4vRg = BigInt("1946")
		const addressiFuAWuO = accounts[0]
		const addresssx3xTrS = accounts[1]
		const uinti7OTyce = BigInt("1921")
		const addressv2KSjXW = accounts[3]
		const uintAziRqku = BigInt("1569")
		const addressojdnYQ = accounts[4]
		const addressk6IawQU = accounts[3]
//		const boolbY8bKkL = await WOLFIIzXSgk.transfer.call(addressFQlY1q9, uinta6EaWVt, {from: accounts[1]});
//		const boolE0pMLWC = await WOLFIIzXSgk.transferFrom.call(addresssx3xTrS, addressiFuAWuO, uintAwg4vRg, {from: accounts[0]});
//		const boollB0bkr9 = await WOLFIIzXSgk.approveAndCall.call(addressv2KSjXW, uinti7OTyce, {from: accounts[1]});
//		const booleLqEK3D = await WOLFIIzXSgk.transferFrom.call(addressk6IawQU, addressojdnYQ, uintAziRqku, {from: accounts[1]});

		await expect(WOLFIIzXSgk.transfer.call(addressFQlY1q9, uinta6EaWVt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringMo4ooC = "S7M6BB5iHH3tTGJtMwcX6xqkn9ie59Xe4RmQR7ytFJIItnyfVovUw8f1lBtcIHJC5QeNbhX7qN9k"
		const stringu5GbGPW = "s3UJSn2HyM5IOXK2hDKKhWx6UPvgg7bTvpA6aBqzNgWo1KPD7upn9D14g2hauvwgivzqipa2BJBceT3Jg935dd3FxIRNynai"
		const uintkIAudTM = BigInt("1628")
		const WOLFS5OLbZr = await WOLF.new(stringMo4ooC, stringu5GbGPW, uintkIAudTM, {from: "0x0000000000000000000000000000000000000001"});
		const uintaR3eC8K = BigInt("942")
		const addressfL1MrZF = "0x0000000000000000000000000000000000000001"
		const uintjsdI1Nc = BigInt("104")
		const addressaIfXDB3 = accounts[2]
		const addressPQLljCU = accounts[4]
		const uintkB4P8MG = BigInt("822")
		const addressI3sh9xt = accounts[1]
		const boolmIj1mYo = await WOLFS5OLbZr.approveAndCall.call(addressfL1MrZF, uintaR3eC8K, {from: accounts[3]});
		const boolzKaJDRr = await WOLFS5OLbZr.transferFrom.call(addressPQLljCU, addressaIfXDB3, uintjsdI1Nc, {from: accounts[4]});
		const boolqv1CDlL = await WOLFS5OLbZr.transfer.call(addressI3sh9xt, uintkB4P8MG, {from: accounts[5]});
	});

	it('test for WOLF', async () => {
		const stringE0y4HZ2 = "Oect"
		const stringZMFGwYJ = "1VB59jei4KMBaHRecgvFBcwEWcFty7FjYC3xNMMeMmuAhflzkLAIDbFiF1bRumhnqAIN97b8sR"
		const uintebPp3A8 = BigInt("1246")
		const WOLFd1dZWaf = await WOLF.new(stringE0y4HZ2, stringZMFGwYJ, uintebPp3A8, {from: accounts[5]});
		const uintRtl0znj = BigInt("1204")
		const addresszlthrS4 = accounts[5]
		const uintOm3A1yo = BigInt("1400")
		const addressDoULfne = accounts[5]
		const uintAm9uZ6u = BigInt("1014")
		const addressXDmvERg = accounts[3]
		const addressOoIe1uu = accounts[1]
		const uinta3ZWOQd = BigInt("64")
		const addressBB9Dcr1 = "0x0000000000000000000000000000000000000001"
		const uintpI9bJjO = BigInt("361")
		const addresscvuQCUb = accounts[2]
		const uintBd9ByS7 = BigInt("164")
		const addressOmJzPHH = accounts[1]
		const addressZAlKRle = accounts[4]
//		const boolBgga71 = await WOLFd1dZWaf.transfer.call(addresszlthrS4, uintRtl0znj, {from: accounts[3]});
//		const boolGfT6AYd = await WOLFd1dZWaf.approve.call(addressDoULfne, uintOm3A1yo, {from: accounts[0]});
//		const boola1NiS7h = await WOLFd1dZWaf.transferFrom.call(addressOoIe1uu, addressXDmvERg, uintAm9uZ6u, {from: accounts[5]});
//		const boolf1yV4wP = await WOLFd1dZWaf.approve.call(addressBB9Dcr1, uinta3ZWOQd, {from: accounts[5]});
//		const boolSXya17E = await WOLFd1dZWaf.approveAndCall.call(addresscvuQCUb, uintpI9bJjO, {from: accounts[0]});
//		const boolR6gPHF4 = await WOLFd1dZWaf.transferFrom.call(addressZAlKRle, addressOmJzPHH, uintBd9ByS7, {from: accounts[4]});

		await expect(WOLFd1dZWaf.transfer.call(addresszlthrS4, uintRtl0znj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringxQXNtTb = "Gx65OO1kv51u"
		const stringU6LEqzm = "wqgBT5k6eBHXq7NF0O2IpJ9ttVkPji7nOoNEoOjNz02zqc7A1waJ"
		const uintRxKCjI = BigInt("188")
		const WOLFJeoAXNa = await WOLF.new(stringxQXNtTb, stringU6LEqzm, uintRxKCjI, {from: accounts[5]});
		const uintl0eOQsK = BigInt("0")
		const addressywO3byU = accounts[2]
		const addressmlxrw3Q = "0x0000000000000000000000000000000000000001"
		const uintxa677RO = BigInt("27")
		const addressFsdiEg9 = accounts[3]
		const uintuHK4qmU = BigInt("422")
		const addressICNs0h = accounts[3]
		const address81pFHW = "0x0000000000000000000000000000000000000001"
		const booldvOy5kh = await WOLFJeoAXNa.transferFrom.call(addressmlxrw3Q, addressywO3byU, uintl0eOQsK, {from: accounts[0]});
//		const boolOBqvFmO = await WOLFJeoAXNa.transfer.call(addressFsdiEg9, uintxa677RO, {from: accounts[0]});
//		const boolycCub9e = await WOLFJeoAXNa.transferFrom.call(address81pFHW, addressICNs0h, uintuHK4qmU, {from: accounts[2]});

		assert.equal(booldvOy5kh, true)
		await expect(WOLFJeoAXNa.transfer.call(addressFsdiEg9, uintxa677RO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringxQXNtTb = "Gx65OO1kv51u"
		const stringU6LEqzm = "wqgBT5k6eBHXq7NF0O2IpJ9ttVkPji7nOoNEoOjNz02zqc7A1waJ"
		const uintnWpLit1 = BigInt("188")
		const WOLFJeoAXNa = await WOLF.new(stringxQXNtTb, stringU6LEqzm, uintnWpLit1, {from: accounts[5]});
		const uintTzelUaw = BigInt("0")
		const addressKj7j0Ex = accounts[4]
		const boolHZwNDVO = await WOLFJeoAXNa.approveAndCall.call(addressKj7j0Ex, uintTzelUaw, {from: accounts[5]});

		assert.equal(boolHZwNDVO, true)
	});
})