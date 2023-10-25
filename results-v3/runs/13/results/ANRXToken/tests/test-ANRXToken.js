const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintxnlNHfl = BigInt("718")
		const stringabqSRE = "fqkgPChF4ntJdWUwlWs5Z17heHfXc9D2G0JxCEKE4JeAJNxhazdIvJNzB3MJFP"
		const string1fqcUB = "CJKrGzSWQtkm3C146b6k6ElvNFUrBKfQNslzQrmeTqGPts6njMao"
		const uintQ7Gn3cG = BigInt("1212")
		const ANRXTokenisY01P = await ANRXToken.new(uintxnlNHfl, stringabqSRE, string1fqcUB, uintQ7Gn3cG, {from: accounts[1]});
		const uintYdBHI5y = BigInt("176")
		const addressdgFfs2a = accounts[1]
		const address1GyX7l = accounts[5]
		const addressXncKENt = "0x0000000000000000000000000000000000000001"
		const uintwyLIdL1 = BigInt("1591")
		const addressgiSrt9O = "0x0000000000000000000000000000000000000001"
		const uintzvaDxFG = BigInt("607")
		const boolNptHEO = await ANRXTokenisY01P.transferFrom.call(address1GyX7l, addressdgFfs2a, uintYdBHI5y, {from: accounts[4]});
		const uintopfspB6 = await ANRXTokenisY01P.balanceOf.call(addressXncKENt, {from: "0x0000000000000000000000000000000000000001"});
		const boolzbWUB4K = await ANRXTokenisY01P.transfer.call(addressgiSrt9O, uintwyLIdL1, {from: accounts[2]});
		const uintRIkEgk4 = await ANRXTokenisY01P.redeem.call(uintzvaDxFG, {from: accounts[4]});

		await expect(ANRXTokenisY01P.transferFrom.call(address1GyX7l, addressdgFfs2a, uintYdBHI5y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintkImd1Zy = BigInt("358")
		const string61SlQT = "xhsS6Xfumts8FCouGF6qI9m"
		const stringsgy3Lk = "13mNU5JhQxvDHkiPozlpKvVFwaWT7b"
		const uinta58LcvA = BigInt("353")
		const ANRXTokenfRWCtub = await ANRXToken.new(uintkImd1Zy, string61SlQT, stringsgy3Lk, uinta58LcvA, {from: accounts[1]});
		const addressvanVbR = "0x0000000000000000000000000000000000000001"
		const uintOkkivgG = BigInt("118")
		const addressJt8eQt0 = accounts[2]
		const uinthHY3NlP = BigInt("1047")
		const addressosuaftS = accounts[4]
		const addressUV3B8m6 = accounts[5]
		const uintPIJyDnb = BigInt("702")
		const uintIJkWO7R = BigInt("1292")
		const addressW3RVoV9 = accounts[4]
		const uintrgKWkWf = await ANRXTokenfRWCtub.totalSupply.call({from: accounts[3]});
		const addresso6Ddmx = await ANRXTokenfRWCtub.deprecate.call(addressvanVbR, {from: accounts[2]});
		const boolZ0xyPzH = await ANRXTokenfRWCtub.transfer.call(addressJt8eQt0, uintOkkivgG, {from: "0x0000000000000000000000000000000000000001"});
		const boolgZoSP3l = await ANRXTokenfRWCtub.transferFrom.call(addressUV3B8m6, addressosuaftS, uinthHY3NlP, {from: accounts[3]});
		const uintJSQmltk = await ANRXTokenfRWCtub.redeem.call(uintPIJyDnb, {from: accounts[3]});
		const boolgjMPOgH = await ANRXTokenfRWCtub.approve.call(addressW3RVoV9, uintIJkWO7R, {from: accounts[3]});

		assert.equal(uintrgKWkWf, BigInt("358"))
		await expect(ANRXTokenfRWCtub.deprecate.call(addressvanVbR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintgPzBet = BigInt("1006")
		const stringzkWC8D = "Y8sTBOfW9BZhSZphfwtnCT4i4Cj3MyAGeTiXcsjbrvd1PG6MrjgQl4"
		const stringO2VFeY = "xRfHdFBMEZ3BE1xBFOQid3QJGaWJTEfMON1u4OOdku5UHfTMOkgcw8bx48"
		const uintNRTJ8mP = BigInt("971")
		const ANRXTokennHXHuFl = await ANRXToken.new(uintgPzBet, stringzkWC8D, stringO2VFeY, uintNRTJ8mP, {from: accounts[1]});
		const uintMv7AgPj = BigInt("729")
		const addressHJXsAqb = accounts[4]
		const uintk3VYFok = BigInt("1756")
		const addresso9tkqYO = accounts[3]
		const addressB346mdk = accounts[4]
		const uintIsnBxp9 = BigInt("444")
		const uintcEoERLR = BigInt("772")
		const addressCbiQxSk = accounts[4]
		const uintAJ9XsgH = BigInt("1406")
		const boolBJ43Pzm = await ANRXTokennHXHuFl.approve.call(addressHJXsAqb, uintMv7AgPj, {from: accounts[0]});
		const boolAA1z9d6 = await ANRXTokennHXHuFl.transferFrom.call(addressB346mdk, addresso9tkqYO, uintk3VYFok, {from: accounts[4]});
		const uintf0jTeX = await ANRXTokennHXHuFl.redeem.call(uintIsnBxp9, {from: accounts[4]});
		const boolLvLDgUZ = await ANRXTokennHXHuFl.transfer.call(addressCbiQxSk, uintcEoERLR, {from: accounts[1]});
		const uintg7VTUUf = await ANRXTokennHXHuFl.issue.call(uintAJ9XsgH, {from: accounts[2]});

		assert.equal(boolBJ43Pzm, true)
		await expect(ANRXTokennHXHuFl.transferFrom.call(addressB346mdk, addresso9tkqYO, uintk3VYFok, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinttwxuLmi = BigInt("713")
		const stringVcFW616 = "8BGr7Bc8l"
		const stringm9doLG = "uTflOmLQRh2fl69NOLTl6orlW32C01b6mEjF3UJMFY"
		const uintCQcYGwL = BigInt("1673")
		const ANRXTokenzKfNP82 = await ANRXToken.new(uinttwxuLmi, stringVcFW616, stringm9doLG, uintCQcYGwL, {from: accounts[0]});
		const addressNQnZiH = accounts[2]
		const addressb82Pfa2 = accounts[0]
		const uintDzKX6L = await ANRXTokenzKfNP82.balanceOf.call(addressNQnZiH, {from: accounts[1]});
		const addresswMo32WC = await ANRXTokenzKfNP82.deprecate.call(addressb82Pfa2, {from: accounts[5]});

		assert.equal(uintDzKX6L, BigInt("0"))
		await expect(ANRXTokenzKfNP82.deprecate.call(addressb82Pfa2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvEutO3h = BigInt("225")
		const stringdq3Ap7Y = "uJmqxzqFHAS9QxX3297q02pVmx1j1TutI4e3caxZPu5iIvjPYXaY3KTtiDA5N7Q59m4OvzjIvoJnoSXe"
		const stringcxe25yK = "VTxMgO8H3PJzZlWJCvuiJPdFwMCZBW1SwTee92XcO1BpjuYnxrsgPmsx3WK15XK05iCXqGwBwlm58Z8"
		const uintEmNKTGO = BigInt("1760")
		const ANRXTokenL1hRCWU = await ANRXToken.new(uintvEutO3h, stringdq3Ap7Y, stringcxe25yK, uintEmNKTGO, {from: accounts[3]});
		const addressqj2YoC = accounts[0]
		const addressLNSskZI = accounts[4]
		const addressVk4lBDp = "0x0000000000000000000000000000000000000001"
		const addressnaJ1g3 = accounts[0]
		const uintrswxVg3 = await ANRXTokenL1hRCWU.allowance.call(addressLNSskZI, addressqj2YoC, {from: accounts[4]});
		const uintSUrDUem = await ANRXTokenL1hRCWU.balanceOf.call(addressVk4lBDp, {from: accounts[0]});
		const addressvuhJrJX = await ANRXTokenL1hRCWU.deprecate.call(addressnaJ1g3, {from: accounts[1]});

		assert.equal(uintSUrDUem, BigInt("0"))
		assert.equal(uintrswxVg3, BigInt("0"))
		await expect(ANRXTokenL1hRCWU.deprecate.call(addressnaJ1g3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxtgK5Up = BigInt("1215")
		const stringJROEndI = "yilmkOD2dyA4ViByJbdhnVC8IrqMSf"
		const stringiZl3Fp6 = "ki46Fvskb4oL3qHJVDw6gBnzihJzonzNzJNfqcYlCdMnNKqYINOjob"
		const uintTk9NtAX = BigInt("1500")
		const ANRXTokenFoiRbJg = await ANRXToken.new(uintxtgK5Up, stringJROEndI, stringiZl3Fp6, uintTk9NtAX, {from: accounts[3]});
		const uintELWZnec = BigInt("303")
		const address5oA6NQ = accounts[3]
		const uintlK3IPB5 = BigInt("1534")
		const boolcAf7p3 = await ANRXTokenFoiRbJg.transfer.call(address5oA6NQ, uintELWZnec, {from: accounts[2]});
		const uintcN5aZLr = await ANRXTokenFoiRbJg.redeem.call(uintlK3IPB5, {from: accounts[5]});

		await expect(ANRXTokenFoiRbJg.transfer.call(address5oA6NQ, uintELWZnec, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinth49psq = BigInt("903")
		const stringpcMQQco = "k6f4o2yWczHN5z9an1JMGys12AgYEFyq8S44MLxUKG4uklJcw31MGK7RGPXo14RBKPl8KOB"
		const stringVXzQTF = "r4oVSV37pvlNhqocTJ2NfsdGPzGCswwJOMYBohqKFiDWUi2NveLTzfQPHUo"
		const uintwOROVfY = BigInt("1855")
		const ANRXTokenEMgQkP7 = await ANRXToken.new(uinth49psq, stringpcMQQco, stringVXzQTF, uintwOROVfY, {from: accounts[1]});
		const addressQXWWFsS = "0x0000000000000000000000000000000000000001"
		const addressEWdNMwv = accounts[4]
		const uintwtXw1V = BigInt("765")
		const uintj7O05aj = BigInt("483")
		const uintdsK4drJ = await ANRXTokenEMgQkP7.allowance.call(addressEWdNMwv, addressQXWWFsS, {from: accounts[3]});
		const uintfPXLVA2 = await ANRXTokenEMgQkP7.redeem.call(uintwtXw1V, {from: accounts[1]});
		const uintMr1xEGV = await ANRXTokenEMgQkP7.issue.call(uintj7O05aj, {from: accounts[0]});

		assert.equal(uintdsK4drJ, BigInt("0"))
		await expect(ANRXTokenEMgQkP7.issue.call(uintj7O05aj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSCa1OTY = BigInt("1462")
		const stringrkTl0xF = "CiyUNnr9yrgZh1KuUnCCZMye5fH3jIcLMdeUUMJqeLKnMdOL3i2v18CvuiY"
		const stringkhvpsM = "gOhstnvzr5TuzpEX6IG3hM7q3p4P5CjebNejxalVoQGNFBIqDMWVTP121xYddRFbe7X83V"
		const uintQvWPwl = BigInt("1538")
		const ANRXTokengan8kRM = await ANRXToken.new(uintSCa1OTY, stringrkTl0xF, stringkhvpsM, uintQvWPwl, {from: accounts[1]});
		const addressA00NAda = accounts[4]
		const addressbJTPcT0 = "0x0000000000000000000000000000000000000001"
		const addressQKC05cM = accounts[2]
		const uintJIf8Bu2 = BigInt("92")
		const addressoX4dBT = "0x0000000000000000000000000000000000000001"
		const address7dxIW0 = accounts[1]
		const uintORp0X3D = BigInt("478")
		const addresshnUnr6V = accounts[1]
		const addressVfvTwNz = await ANRXTokengan8kRM.deprecate.call(addressA00NAda, {from: accounts[1]});
		const uintTqzeWTZ = await ANRXTokengan8kRM.allowance.call(addressQKC05cM, addressbJTPcT0, {from: accounts[1]});
		const boolEyShJx = await ANRXTokengan8kRM.transferFrom.call(address7dxIW0, addressoX4dBT, uintJIf8Bu2, {from: accounts[1]});
		const boolbjx6cb = await ANRXTokengan8kRM.approve.call(addresshnUnr6V, uintORp0X3D, {from: accounts[3]});

		assert.equal(uintTqzeWTZ, BigInt("0"))
		await expect(ANRXTokengan8kRM.transferFrom.call(address7dxIW0, addressoX4dBT, uintJIf8Bu2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmkjQwm9 = BigInt("225")
		const stringdq3Ap7Y = "uJmqxzqFHAS9QxX3297q02pVmx1j1TutI4e3caxZPu5iIvjPYXaY3KTtiDA5N7Q59m4OvzjIvoJnoSXe"
		const stringcxe25yK = "VTxMgO8H3PJzZlWJCvuiJPdFwMCZBW1SwTee92XcO1BpjuYnxrsgPmsx3WK15XK05iCXqGwBwlm58Z8"
		const uintKo48PRn = BigInt("1760")
		const ANRXTokenL1hRCWU = await ANRXToken.new(uintmkjQwm9, stringdq3Ap7Y, stringcxe25yK, uintKo48PRn, {from: accounts[3]});
		const uintM23z5gQ = BigInt("1201")
		const addressFeP986L = accounts[5]
		const uintySXbNeU = BigInt("1947")
		const addresssspwGz = accounts[3]
		const addressdBKlKEb = accounts[4]
		const uintIY5Xika = await ANRXTokenL1hRCWU.issue.call(uintM23z5gQ, {from: accounts[3]});
		const addressrLtXeVK = await ANRXTokenL1hRCWU.deprecate.call(addressFeP986L, {from: accounts[1]});
		const uintTA02IZQ = await ANRXTokenL1hRCWU.redeem.call(uintySXbNeU, {from: accounts[3]});
		const uintrswxVg3 = await ANRXTokenL1hRCWU.allowance.call(addressdBKlKEb, addresssspwGz, {from: accounts[4]});

		await expect(ANRXTokenL1hRCWU.deprecate.call(addressFeP986L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnhM4bVm = BigInt("1462")
		const stringrkTl0xF = "CiyUNnr9yrgZh1KuUnCCZMye5fH3jIcLMdeUUMJqeLKnMdOL3i2v18CvuiY"
		const stringkhvpsM = "gOhstnvzr5TuzpEX6IG3hM7q3p4P5CjebNejxalVoQGNFBIqDMWVTP121xYddRFbe7X83V"
		const uintSE701N7 = BigInt("1538")
		const ANRXTokengan8kRM = await ANRXToken.new(uintnhM4bVm, stringrkTl0xF, stringkhvpsM, uintSE701N7, {from: accounts[1]});
		const uintO7Jwta6 = BigInt("92")
		const addressB93I79w = "0x00000000000000000000000000000000000000-1"
		const addressQpqPPnu = accounts[1]
		const addressZo7ehIi = accounts[0]
		const addressaCZbKlH = accounts[3]
		const boolEyShJx = await ANRXTokengan8kRM.transferFrom.call(addressQpqPPnu, addressB93I79w, uintO7Jwta6, {from: accounts[1]});
		const uintzGQdqBV = await ANRXTokengan8kRM.allowance.call(addressaCZbKlH, addressZo7ehIi, {from: accounts[1]});

		await expect(ANRXTokengan8kRM.transferFrom.call(addressQpqPPnu, addressB93I79w, uintO7Jwta6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintsvQzqTV = BigInt("1172")
		const stringrK63oVI = "BwAWMWPRRCE2vGHwI4YekaohgriD6xfAIT17xyfSF8Qvs8S2bWN7COlsbK3GR7kn4OiQXWdgHZBQdizPQlxFEzb"
		const stringpRoa4EI = "B"
		const uintVkGSM5v = BigInt("1460")
		const ANRXTokendNyYLiK = await ANRXToken.new(uintsvQzqTV, stringrK63oVI, stringpRoa4EI, uintVkGSM5v, {from: accounts[3]});
		const uintHMMOIO = BigInt("1231")
		const uintsqllWo = BigInt("594")
		const uintABI2J37 = BigInt("859")
		const uintpUOD8mN = BigInt("1306")
		const addressLeBAc6i = accounts[2]
		const addressl3XNFia = accounts[4]
		const uintLzK0nrn = await ANRXTokendNyYLiK.issue.call(uintHMMOIO, {from: accounts[3]});
		const uintZ5f4bal = await ANRXTokendNyYLiK.setParams.call(uintABI2J37, uintsqllWo, {from: accounts[3]});
		const uintrwppZA4 = await ANRXTokendNyYLiK.issue.call(uintpUOD8mN, {from: accounts[3]});
		const uint1DuQrZ = await ANRXTokendNyYLiK.allowance.call(addressl3XNFia, addressLeBAc6i, {from: accounts[2]});

		await expect(ANRXTokendNyYLiK.setParams.call(uintABI2J37, uintsqllWo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinteTvzF38 = BigInt("98")
		const stringRv5vJon = "Iu2uD2oSm7UUsNui3oR93iFdVrkRgVX2EvndPqmujk1mck0PGK54"
		const stringv1SLdIb = "EIQBAcOr2p23Q1iQCYPqqRXJCz88dlQy3MKDL4LIkcROQMZRp81r4QJXuO9a1h9TMig8EivaRkLhOKjWG72z4G"
		const uintFekLEq = BigInt("1427")
		const ANRXTokenPaEqCBE = await ANRXToken.new(uinteTvzF38, stringRv5vJon, stringv1SLdIb, uintFekLEq, {from: "0x0000000000000000000000000000000000000001"});
		const uintDR0u2Qd = BigInt("93")
		const uintY8RmtVw = BigInt("1525")
		const uint4vozEh = await ANRXTokenPaEqCBE.redeem.call(uintDR0u2Qd, {from: accounts[3]});
		const uintlaYvb8 = await ANRXTokenPaEqCBE.issue.call(uintY8RmtVw, {from: accounts[2]});
		const uintxJHo10A = await ANRXTokenPaEqCBE.totalSupply.call({from: accounts[3]});
	});
})