const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintNS2pr3z = BigInt("1556")
		const stringrGOIBgh = "Irtj1fm4CrIvuY93zu8xQNzhlTqUqykRsKWDWl7fRnaja9sJBfzQaCIerLImArbwCKeAwGJclO182p0cofyeIqRVBEKSyYqw4pm"
		const stringWN7nVaF = "QYYjMV9HttN8QfOS84ezP5pNz3nWDmoZIRmN1Xcp4dqtO8uKc6nVYCb"
		const uintFnWIn52 = BigInt("92")
		const ANRXTokenk2ap3u = await ANRXToken.new(uintNS2pr3z, stringrGOIBgh, stringWN7nVaF, uintFnWIn52, {from: accounts[2]});
		const uintBQnxL0R = BigInt("1912")
		const uintUBIWDxj = BigInt("404")
		const uintsNnaRpT = BigInt("1129")
		const addressXaI1l0k = accounts[5]
		const addressfgPNhYC = accounts[2]
		const uintWXGAtDb = await ANRXTokenk2ap3u.issue.call(uintBQnxL0R, {from: accounts[1]});
		const uintAb0JADR = await ANRXTokenk2ap3u.redeem.call(uintUBIWDxj, {from: accounts[3]});
		const boolR06A0Dp = await ANRXTokenk2ap3u.transferFrom.call(addressfgPNhYC, addressXaI1l0k, uintsNnaRpT, {from: accounts[1]});

		await expect(ANRXTokenk2ap3u.issue.call(uintBQnxL0R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvCzQQ3R = BigInt("1475")
		const stringN2nzqO = "UeeVTPiUFSFVRdHDzd1XOJGmj1DalqEOmJxmCsbiG1ft4zs3rHYutQznUmPqjZbzpmC"
		const stringWIeBvL1 = "SJ5NzTEyM82QqOU6"
		const uintsdxJ3Ct = BigInt("1294")
		const ANRXTokenJ6cr0Na = await ANRXToken.new(uintvCzQQ3R, stringN2nzqO, stringWIeBvL1, uintsdxJ3Ct, {from: accounts[4]});
		const uintSxVvagS = BigInt("580")
		const address6LSJH6 = accounts[1]
		const uintsZZQh1s = BigInt("186")
		const addressD6ItsmC = "0x0000000000000000000000000000000000000001"
		const addressRsVkLAC = accounts[1]
		const uintG0x0U09 = BigInt("202")
		const uintUXLL1M = BigInt("172")
		const boolNSUy4D = await ANRXTokenJ6cr0Na.approve.call(address6LSJH6, uintSxVvagS, {from: accounts[4]});
		const uintiEhknWR = await ANRXTokenJ6cr0Na.totalSupply.call({from: accounts[2]});
		const boolytyLOFy = await ANRXTokenJ6cr0Na.transferFrom.call(addressRsVkLAC, addressD6ItsmC, uintsZZQh1s, {from: accounts[1]});
		const uintxSXhC7v = await ANRXTokenJ6cr0Na.setParams.call(uintUXLL1M, uintG0x0U09, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNSUy4D, true)
		assert.equal(uintiEhknWR, BigInt("1475"))
		await expect(ANRXTokenJ6cr0Na.transferFrom.call(addressRsVkLAC, addressD6ItsmC, uintsZZQh1s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintfaaCjlX = BigInt("320")
		const stringthKZS7c = "xpGSetamT5Q5Dt6AjgNTr14"
		const stringIyyJOn = "kQfvym443YRO7ZuTdNWOxq0TzqUlCPmeNSknjruI4CDZPB3pK4igU0Cg4WWtvtZo1CS1GjBVq"
		const uintdzSTPoM = BigInt("143")
		const ANRXTokenpKsdrJi = await ANRXToken.new(uintfaaCjlX, stringthKZS7c, stringIyyJOn, uintdzSTPoM, {from: accounts[1]});
		const addressJSH8US = accounts[4]
		const addressgShm2B6 = accounts[1]
		const uintmUsm5Gv = BigInt("398")
		const addressl4v3h9D = accounts[4]
		const addressSUmBicl = accounts[3]
		const uintno2htzx = BigInt("253")
		const uintPnXL9RS = BigInt("112")
		const addressztJM0zV = accounts[0]
		const uintVuhN2Ih = await ANRXTokenpKsdrJi.balanceOf.call(addressJSH8US, {from: accounts[4]});
		const addressZXd7gpg = await ANRXTokenpKsdrJi.deprecate.call(addressgShm2B6, {from: accounts[5]});
		const boolccEjRBC = await ANRXTokenpKsdrJi.transferFrom.call(addressSUmBicl, addressl4v3h9D, uintmUsm5Gv, {from: accounts[1]});
		const uintG8rNDbN = await ANRXTokenpKsdrJi.redeem.call(uintno2htzx, {from: accounts[5]});
		const boolfx0ieCv = await ANRXTokenpKsdrJi.approve.call(addressztJM0zV, uintPnXL9RS, {from: accounts[2]});

		assert.equal(uintVuhN2Ih, BigInt("0"))
		await expect(ANRXTokenpKsdrJi.deprecate.call(addressgShm2B6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUYZyEj6 = BigInt("2")
		const stringDnUIAUC = "7kyWh41EKUTDgjNjwbecsvluEK2wXCTpPWQv4ZP9CIPBbatDkKs"
		const strings4FNlpB = "srTATufCKyjdjOLNEsh6Cx4J3decKsv8cUcLFCxdGJ26i8lgComj"
		const uintQZawSEu = BigInt("749")
		const ANRXTokenWKafX28 = await ANRXToken.new(uintUYZyEj6, stringDnUIAUC, strings4FNlpB, uintQZawSEu, {from: accounts[0]});
		const addressfhsqK62 = accounts[0]
		const uintfxBLeGW = BigInt("277")
		const uintaRo96Ne = BigInt("1968")
		const addressRSSb5fo = accounts[1]
		const addressMpRjfH6 = accounts[4]
		const uintxGTrYoZ = BigInt("1712")
		const addressKe05Jef = accounts[4]
		const addressezuERGa = await ANRXTokenWKafX28.deprecate.call(addressfhsqK62, {from: accounts[0]});
		const uintONeAoOX = await ANRXTokenWKafX28.redeem.call(uintfxBLeGW, {from: "0x0000000000000000000000000000000000000001"});
		const booljXV2NtA = await ANRXTokenWKafX28.transferFrom.call(addressMpRjfH6, addressRSSb5fo, uintaRo96Ne, {from: accounts[4]});
		const boolwwia9BK = await ANRXTokenWKafX28.approve.call(addressKe05Jef, uintxGTrYoZ, {from: accounts[1]});

		await expect(ANRXTokenWKafX28.redeem.call(uintfxBLeGW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuzMNI6J = BigInt("2047")
		const stringwDP1Ycc = "KajPJuSKtPlpw6pBsdSARsNQKa83dh7sz88817VdSoPUeLVJDvU"
		const stringCxBssC2 = "XA26IbCaDpJtBTPGCYaGkLGcQWLLPTbdUNHgoIerccuo0xiphr"
		const uintC0YDrMe = BigInt("1522")
		const ANRXTokenQ59tLhz = await ANRXToken.new(uintuzMNI6J, stringwDP1Ycc, stringCxBssC2, uintC0YDrMe, {from: accounts[2]});
		const addressCCm7Hz6 = "0x0000000000000000000000000000000000000001"
		const addressvncKQnU = accounts[4]
		const addressTOSHFEW = "0x0000000000000000000000000000000000000001"
		const uintXMmQEKi = BigInt("580")
		const uintbxnT1pv = await ANRXTokenQ59tLhz.allowance.call(addressvncKQnU, addressCCm7Hz6, {from: accounts[1]});
		const uintxQDU75O = await ANRXTokenQ59tLhz.balanceOf.call(addressTOSHFEW, {from: accounts[4]});
		const uintaglVQoF = await ANRXTokenQ59tLhz.redeem.call(uintXMmQEKi, {from: accounts[0]});

		assert.equal(uintbxnT1pv, BigInt("0"))
		assert.equal(uintxQDU75O, BigInt("0"))
		await expect(ANRXTokenQ59tLhz.redeem.call(uintXMmQEKi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintW0hTnTt = BigInt("164")
		const stringW2Edlhe = "2zMFMvgcNMZmFWkrclNjMvNL87LC3BW14AetDTPjrzXzHItsEzRhIxyuJcLrWWLrHyz4iFvzdoOuO"
		const stringd4WhieZ = "QT9ypV"
		const uintXUj1SW5 = BigInt("1798")
		const ANRXTokeni2vRmnf = await ANRXToken.new(uintW0hTnTt, stringW2Edlhe, stringd4WhieZ, uintXUj1SW5, {from: accounts[5]});
		const uintbaTOhOt = BigInt("1059")
		const uintvN6W6x = BigInt("1042")
		const uintdxdo30c = BigInt("1819")
		const uintOHsSEE = await ANRXTokeni2vRmnf.redeem.call(uintbaTOhOt, {from: accounts[5]});
		const uintrHpZBEa = await ANRXTokeni2vRmnf.setParams.call(uintdxdo30c, uintvN6W6x, {from: accounts[1]});

		await expect(ANRXTokeni2vRmnf.redeem.call(uintbaTOhOt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvEwRmp5 = BigInt("2")
		const stringDnUIAUC = "7kyWh41EKUTDgjNjwbecsvluEK2wXCTpPWQv4ZP9CIPBbatDkKs"
		const strings4FNlpB = "srTATufCKyjdjOLNEsh6Cx4J3decKsv8cUcLFCxdGJ26i8lgComj"
		const uintNHbVlRL = BigInt("749")
		const ANRXTokenWKafX28 = await ANRXToken.new(uintvEwRmp5, stringDnUIAUC, strings4FNlpB, uintNHbVlRL, {from: accounts[0]});
		const uints3KHWiH = BigInt("1518")
		const addressaJjyaZ1 = accounts[4]
		const addresstaJ8SCM = accounts[5]
		const addressWotqVKk = accounts[3]
		const uintKcmQDj7 = BigInt("862")
		const addresskoaUXpH = accounts[5]
		const boolj155LWw = await ANRXTokenWKafX28.transfer.call(addressaJjyaZ1, uints3KHWiH, {from: accounts[4]});
		const uint9m23DC = await ANRXTokenWKafX28.allowance.call(addressWotqVKk, addresstaJ8SCM, {from: accounts[4]});
		const boolwDjLRd2 = await ANRXTokenWKafX28.approve.call(addresskoaUXpH, uintKcmQDj7, {from: accounts[2]});

		await expect(ANRXTokenWKafX28.transfer.call(addressaJjyaZ1, uints3KHWiH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuRZgkz3 = BigInt("1256")
		const stringCdACsCX = "FDswXKswVKstHvNSBB1AmyT1Pjb6DIvxBKWHvo6QnZHD2"
		const stringCE4P1vU = "nls5zKnXHS2qu9jVXTgDFzqwI5vvcmCLscO0R8arLbbBkP6npRwNoAB7SbiVkyH2Btky3oh27Jxb"
		const uinthOZKXhq = BigInt("1514")
		const ANRXToken4yO32d = await ANRXToken.new(uintuRZgkz3, stringCdACsCX, stringCE4P1vU, uinthOZKXhq, {from: "0x0000000000000000000000000000000000000001"});
		const addressiDep4vE = accounts[0]
		const addressTalsDCG = accounts[3]
		const addressAjtWW3G = await ANRXToken4yO32d.deprecate.call(addressiDep4vE, {from: accounts[1]});
		const uintnJK2DO5 = await ANRXToken4yO32d.balanceOf.call(addressTalsDCG, {from: accounts[4]});
		const uintEBm4g4n = await ANRXToken4yO32d.totalSupply.call({from: accounts[1]});
	});

	it('test for ANRXToken', async () => {
		const uinto4lssCE = BigInt("2")
		const stringDnUIAUC = "7kyWh41EKUTDgjNjwbecsvluEK2wXCTpPWQv4ZP9CIPBbatDkKs"
		const strings4FNlpB = "srTATufCKyjdjOLNEsh6Cx4J3decKsv8cUcLFCxdGJ26i8lgComj"
		const uinty3ZInD = BigInt("749")
		const ANRXTokenWKafX28 = await ANRXToken.new(uinto4lssCE, stringDnUIAUC, strings4FNlpB, uinty3ZInD, {from: accounts[0]});
		const uintsXUFvwy = BigInt("411")
		const uintuvsa1B3 = BigInt("1598")
		const addressJ0Cs2y8 = accounts[0]
		const uintvT86MWv = BigInt("1978")
		const addressULuIm3g = accounts[1]
		const addresssIrefw0 = accounts[4]
		const uintvCh8Zyo = await ANRXTokenWKafX28.issue.call(uintsXUFvwy, {from: accounts[0]});
		const boolO9XJMT = await ANRXTokenWKafX28.approve.call(addressJ0Cs2y8, uintuvsa1B3, {from: accounts[0]});
		const booljXV2NtA = await ANRXTokenWKafX28.transferFrom.call(addresssIrefw0, addressULuIm3g, uintvT86MWv, {from: accounts[4]});

		assert.equal(boolO9XJMT, true)
		await expect(ANRXTokenWKafX28.transferFrom.call(addresssIrefw0, addressULuIm3g, uintvT86MWv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintEThMuJB = BigInt("784")
		const stringeFq9Sj = "4WUyuB7ZWNPjQuzZFzYGT2NX0hvavu"
		const stringSn6P0wI = "XgSsRduPO1inXg"
		const uintPytRZbz = BigInt("1751")
		const ANRXTokenejuwu1G = await ANRXToken.new(uintEThMuJB, stringeFq9Sj, stringSn6P0wI, uintPytRZbz, {from: accounts[2]});
		const addressYoaGuqc = accounts[1]
		const addressygtKDz = accounts[1]
		const addressXXzW18 = accounts[0]
		const addressUaEzXSi = accounts[4]
		const uintOe7M2s5 = BigInt("1870")
		const uintWNJF1oT = BigInt("1180")
		const uintyjNB8g = BigInt("1046")
		const uintjY3YYFY = await ANRXTokenejuwu1G.allowance.call(addressygtKDz, addressYoaGuqc, {from: accounts[2]});
		const uinthWn4gK = await ANRXTokenejuwu1G.allowance.call(addressUaEzXSi, addressXXzW18, {from: accounts[1]});
		const uintYltDv7S = await ANRXTokenejuwu1G.setParams.call(uintWNJF1oT, uintOe7M2s5, {from: accounts[2]});
		const uintzeSkOZH = await ANRXTokenejuwu1G.redeem.call(uintyjNB8g, {from: accounts[0]});

		assert.equal(uinthWn4gK, BigInt("0"))
		assert.equal(uintjY3YYFY, BigInt("0"))
		await expect(ANRXTokenejuwu1G.setParams.call(uintWNJF1oT, uintOe7M2s5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintswYOP10 = BigInt("1395")
		const stringuu18OqY = "zBqmWXEgPiAcWzPB0kThqerXgPLC5AEJejSkgNBXuAjEKhK5pYg9jd"
		const stringggncVnT = "ckhsRNmrCIGdhnVnKscuNnoz4N1jCfPm0xJKi1Vn273aDVl"
		const uintoYApJLA = BigInt("1945")
		const ANRXTokencogasF8 = await ANRXToken.new(uintswYOP10, stringuu18OqY, stringggncVnT, uintoYApJLA, {from: accounts[4]});
		const addressLpr2ZRV = "0x0000000000000000000000000000000000000001"
		const addressTABtdyu = accounts[0]
		const uintRFpt2Zn = BigInt("105")
		const addressgJLzvs3 = accounts[2]
		const addressMaIwunJ = accounts[0]
		const addressW5pCkv = accounts[3]
		const addressicKwcNl = accounts[4]
		const uintzApClvC = await ANRXTokencogasF8.totalSupply.call({from: accounts[4]});
		const uintnl8OTft = await ANRXTokencogasF8.allowance.call(addressTABtdyu, addressLpr2ZRV, {from: "0x0000000000000000000000000000000000000001"});
		const uintlWlHCpY = await ANRXTokencogasF8.redeem.call(uintRFpt2Zn, {from: accounts[4]});
		const uintJsG16u = await ANRXTokencogasF8.allowance.call(addressMaIwunJ, addressgJLzvs3, {from: accounts[1]});
		const uinthDzW34z = await ANRXTokencogasF8.allowance.call(addressicKwcNl, addressW5pCkv, {from: accounts[2]});

		assert.equal(uintJsG16u, BigInt("0"))
		assert.equal(uinthDzW34z, BigInt("0"))
		assert.equal(uintnl8OTft, BigInt("0"))
		assert.equal(uintzApClvC, BigInt("1395"))
	});
})