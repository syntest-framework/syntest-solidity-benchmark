const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringLefmHY = "Ad7olnvwHkYdN"
		const stringIFSWsYo = "3YDIOsU0HoqMSDFvlwxhPr3UHVzaoaT7xDNvOxr9vBclvUAffgNTDtdqF0m"
		const uintvQNsj4f = BigInt("817")
		const FinaloteF6Hs = await Final.new(stringLefmHY, stringIFSWsYo, uintvQNsj4f, {from: accounts[0]});
		const uintGyrboto = BigInt("1933")
		const addressv63dqOr = accounts[3]
		const uintdgNvZAv = BigInt("431")
		const address6qR5Cd = accounts[3]
		const uintPnPhzjV = BigInt("1753")
		const addressikWG8Rh = accounts[3]
		const addressg80LkVq = accounts[1]
		const uintAlOhA2J = BigInt("447")
		const addressPXt92Xg = accounts[3]
		const boolQkxMpFA = await FinaloteF6Hs.approve.call(addressv63dqOr, uintGyrboto, {from: accounts[4]});
//		const boolBo7Z2jK = await FinaloteF6Hs.decreaseAllowance.call(address6qR5Cd, uintdgNvZAv, {from: accounts[2]});
//		const uintP92v1Ix = await FinaloteF6Hs.totalSupply.call({from: accounts[3]});
//		const bool0raUIu = await FinaloteF6Hs.transferFrom.call(addressg80LkVq, addressikWG8Rh, uintPnPhzjV, {from: accounts[0]});
//		const boolIp6jebS = await FinaloteF6Hs.approve.call(addressPXt92Xg, uintAlOhA2J, {from: accounts[4]});

		assert.equal(boolQkxMpFA, true)
		await expect(FinaloteF6Hs.decreaseAllowance.call(address6qR5Cd, uintdgNvZAv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringY4HUJH = "oJv89eaOG"
		const stringlqsq6qj = "U96yPLMm9y"
		const uintAm0rBcO = BigInt("38")
		const FinalVRe01q4 = await Final.new(stringY4HUJH, stringlqsq6qj, uintAm0rBcO, {from: accounts[3]});
		const addressESDJDZ = accounts[3]
		const addressglgu0N = accounts[3]
		const addressX27rm8V = accounts[4]
		const uintZE9f6WX = BigInt("575")
		const addressGStKKp = accounts[2]
		const uintck8ARk = await FinalVRe01q4.allowance.call(addressglgu0N, addressESDJDZ, {from: accounts[4]});
		const stringCJH3R40 = await FinalVRe01q4.name.call({from: accounts[3]});
		const boolVL4Jmvw = await FinalVRe01q4.transferownership.call(addressX27rm8V, {from: accounts[3]});
//		const boolBRUc3f5 = await FinalVRe01q4.approveAndCall.call(addressGStKKp, uintZE9f6WX, {from: accounts[4]});

		assert.equal(boolVL4Jmvw, true)
		assert.equal(stringCJH3R40, "oJv89eaOG")
		assert.equal(uintck8ARk, BigInt("0"))
		await expect(FinalVRe01q4.approveAndCall.call(addressGStKKp, uintZE9f6WX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringO2xXDRB = "LEuAlP6xDUJ89DPgkRdvSpQ6Im2hHrjitunhxt9JdTb2BDIFOsFoBgiuD6A24jkhDk5mrr"
		const stringWjcrgD6 = "qteU4LypaHIVzYn3unJMeEIeBbv4s3AXgx9cJHbh9XIKLa"
		const uintkZrl210 = BigInt("171")
		const Final20bO9O = await Final.new(stringO2xXDRB, stringWjcrgD6, uintkZrl210, {from: accounts[2]});
		const addressLDkJv4z = accounts[1]
		const addresspRuj9DV = accounts[1]
		const uintggcB8Px = BigInt("1980")
		const addressdG0xjkW = accounts[3]
		const uintXDjRXOz = await Final20bO9O.allowance.call(addresspRuj9DV, addressLDkJv4z, {from: accounts[4]});
		const boolOwAEtI = await Final20bO9O.approveAndCall.call(addressdG0xjkW, uintggcB8Px, {from: accounts[2]});

		assert.equal(boolOwAEtI, true)
		assert.equal(uintXDjRXOz, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringGqooStA = "whjhTdakCmtqClrWs1vf6aAcU6vLMp2Gh"
		const stringubJqf2n = "IbBug5lDjBQjWFfDykApMN3CQwR6lnTrPLamhklbPNN8Mxfbp70P1XFU8wTuy4TYWIfHK346T6IA7PNbL6Uk"
		const uintWj3e2bB = BigInt("83")
		const FinalQXUvzYT = await Final.new(stringGqooStA, stringubJqf2n, uintWj3e2bB, {from: accounts[0]});
		const uinta5Lvl0D = BigInt("1537")
		const addressuYxlLiK = accounts[5]
		const addressd4hZOlw = accounts[1]
		const uint8fF4Gj3N = await FinalQXUvzYT.decimals.call({from: accounts[0]});
//		const boolOsVzMAp = await FinalQXUvzYT.transferFrom.call(addressd4hZOlw, addressuYxlLiK, uinta5Lvl0D, {from: accounts[1]});
//		const uint8qhuFEdL = await FinalQXUvzYT.decimals.call({from: accounts[5]});

		assert.equal(uint8fF4Gj3N, BigInt("18"))
		await expect(FinalQXUvzYT.transferFrom.call(addressd4hZOlw, addressuYxlLiK, uinta5Lvl0D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringYsadc6F = "MGuvCfV6NSF29DcJ1LB1qF5tSJyY7bRQxpE8W2zbl2YlRJAp9WztyIUXUBELuSSKvs88Xzq"
		const stringEnJXHjr = "6VxZcf9jJyEOxsgdO220nUdfvn5nzTvjzfOQHdPECy4bWpXDqysX9AdQSXA18F6bc3sSv9g"
		const uintSIiN6lk = BigInt("199")
		const FinaldDpwKYF = await Final.new(stringYsadc6F, stringEnJXHjr, uintSIiN6lk, {from: accounts[2]});
		const uintv9Cfsy = BigInt("883")
		const addressIdjzba = accounts[2]
		const uintV99zhWs = BigInt("586")
		const addressQEqZSEZ = "0x0000000000000000000000000000000000000001"
		const uintqQM4qmD = BigInt("778")
		const addressCnO2bmb = accounts[5]
		const uintfZhDXO2 = BigInt("1980")
		const addressd2ePIXr = accounts[3]
//		const boolyNJa0v = await FinaldDpwKYF.transfer.call(addressIdjzba, uintv9Cfsy, {from: accounts[3]});
//		const boolMaVja5h = await FinaldDpwKYF.decreaseAllowance.call(addressQEqZSEZ, uintV99zhWs, {from: accounts[4]});
//		const booluvIg4J7 = await FinaldDpwKYF.transfer.call(addressCnO2bmb, uintqQM4qmD, {from: accounts[5]});
//		const boolpO83U0 = await FinaldDpwKYF.approve.call(addressd2ePIXr, uintfZhDXO2, {from: accounts[4]});

		await expect(FinaldDpwKYF.transfer.call(addressIdjzba, uintv9Cfsy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringO2xXDRB = "LEuAlP6xDUJ89DPgkRdvSpQ6Im2hHrjitunhxt9JdTb2BDIFOsFoBgiuD6A24jkhDk5mrr"
		const stringWjcrgD6 = "qteU4LypaHIVzYn3unJMeEIeBbv4s3AXgx9cJHbh9XIKLa"
		const uintiQ1FMQZ = BigInt("171")
		const Final20bO9O = await Final.new(stringO2xXDRB, stringWjcrgD6, uintiQ1FMQZ, {from: accounts[2]});
		const addressQ8GV2Mm = accounts[1]
		const addresst1MwvH7 = accounts[2]
		const uintM8RGZ0 = BigInt("1435")
		const addressoeYglmP = accounts[4]
		const addressdiCl6RS = accounts[5]
		const uintjGk6jWU = BigInt("25")
		const addressQCBDX0T = accounts[3]
		const uintXDjRXOz = await Final20bO9O.allowance.call(addresst1MwvH7, addressQ8GV2Mm, {from: accounts[4]});
//		const boolsBHW99 = await Final20bO9O.transferFrom.call(addressdiCl6RS, addressoeYglmP, uintM8RGZ0, {from: accounts[1]});
//		const boolMYBS86 = await Final20bO9O.approveAndCall.call(addressQCBDX0T, uintjGk6jWU, {from: accounts[4]});

		assert.equal(uintXDjRXOz, BigInt("0"))
		await expect(Final20bO9O.transferFrom.call(addressdiCl6RS, addressoeYglmP, uintM8RGZ0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringZVO0mpl = "toAS"
		const stringw4pwYHF = "kBdgYcOAxqG0Ur"
		const uintVuoU4JX = BigInt("128")
		const FinalpDCjIxR = await Final.new(stringZVO0mpl, stringw4pwYHF, uintVuoU4JX, {from: "0x0000000000000000000000000000000000000001"});
		const uinttEZ9no8 = BigInt("180")
		const addressq5pBepK = accounts[1]
		const uint1oHmES = BigInt("101")
		const address0zad5w = accounts[4]
		const addressTwh0WwM = accounts[3]
		const addressGmydJIY = "0x0000000000000000000000000000000000000001"
		const bool1xj8K0 = await FinalpDCjIxR.transfer.call(addressq5pBepK, uinttEZ9no8, {from: accounts[0]});
		const boolsrWXS9w = await FinalpDCjIxR.increaseAllowance.call(address0zad5w, uint1oHmES, {from: accounts[2]});
		const uint8Rxd1D2 = await FinalpDCjIxR.decimals.call({from: accounts[1]});
		const uinthnw9Pkn = await FinalpDCjIxR.allowance.call(addressGmydJIY, addressTwh0WwM, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringO2xXDRB = "LEuAlP6xDUJ89DPgkRdvSpQ6Im2hHrjitunhxt9JdTb2BDIFOsFoBgiuD6A24jkhDk5mrr"
		const stringWjcrgD6 = "qteU4LypaHIVzYn3unJMeEIeBbv4s3AXgx9cJHbh9XIKLa"
		const uintgD2v1Vj = BigInt("171")
		const Final20bO9O = await Final.new(stringO2xXDRB, stringWjcrgD6, uintgD2v1Vj, {from: accounts[2]});
		const addresskeo8H0z = "0x00000000000000000000000000000000000000-1"
		const addresszzfzQuz = accounts[3]
		const uintLxRX451 = BigInt("1110")
		const addressMgY2RR3 = accounts[5]
		const uintfArve4F = BigInt("1434")
		const addressjTJoLOK = accounts[2]
		const addressKVdqzeP = accounts[4]
		const stringamn5rNF = await Final20bO9O.name.call({from: accounts[4]});
//		const uintXDjRXOz = await Final20bO9O.allowance.call(addresszzfzQuz, addresskeo8H0z, {from: accounts[4]});
//		const boolnzRGnSz = await Final20bO9O.approveAndCall.call(addressMgY2RR3, uintLxRX451, {from: accounts[2]});
//		const boolfpEuk3s = await Final20bO9O.transferFrom.call(addressKVdqzeP, addressjTJoLOK, uintfArve4F, {from: accounts[5]});

		assert.equal(stringamn5rNF, "LEuAlP6xDUJ89DPgkRdvSpQ6Im2hHrjitunhxt9JdTb2BDIFOsFoBgiuD6A24jkhDk5mrr")
		await expect(Final20bO9O.allowance.call(addresszzfzQuz, addresskeo8H0z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})