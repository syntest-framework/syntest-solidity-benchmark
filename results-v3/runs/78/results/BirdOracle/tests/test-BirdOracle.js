const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleKQIgqjN = await BirdOracle.new({from: accounts[1]});
		const stringOf3twSo = "BwxT9Y0vPjVmriGFXJF0pGsAe1a7yabefYY"
		const uintKY45Zrj = BigInt("1357")
		const stringY1IxYJU = "ZkjG6zNGArHzbHj7UsoE5D449r4KDdPRodF2uthUz7r2N9phVzaGLW5RKUz7Tl375d7VjYDYNXG4g8v3sdenPducv88"
		const addressewpRv1 = accounts[4]
		const stringIUUSPSD = "Evk16hcoEzB1WFOgI5821YKJoFDiMsk1BoX4TlBuvUsHvW"
		const stringGAMs71 = "7y3kq5JFK961NMPb5bufzzg"
		const address2zBhdB = await BirdOracleKQIgqjN.parseAddr.call(stringOf3twSo, {from: accounts[0]});
		const stringDrBZd3l = await BirdOracleKQIgqjN.substring.call(stringY1IxYJU, uintKY45Zrj, {from: accounts[4]});
		const uintDjSpxUS = await BirdOracleKQIgqjN.getRating.call({from: accounts[4]});
		const uintqqYF400 = await BirdOracleKQIgqjN.getRatingByAddress.call(addressewpRv1, {from: accounts[2]});
		const 
OAxYtrs = await BirdOracleKQIgqjN.newChainRequest.call(stringGAMs71, stringIUUSPSD, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleMi4aldd = await BirdOracle.new({from: accounts[4]});
		const addresstndufsu = accounts[3]
		const uintheIB95 = BigInt("1814")
		const uintW7JdXDu = BigInt("307")
		const uint88M2X6 = BigInt("619")
		const uintZ4gUDrq = BigInt("2011")
		const uint9NREFW = await BirdOracleMi4aldd.getRating.call({from: accounts[4]});
		const uint8fKtCp = await BirdOracleMi4aldd.getRatingByAddress.call(addresstndufsu, {from: accounts[0]});
		const 
NSqFwbt = await BirdOracleMi4aldd.updatedChainRequest.call(uintW7JdXDu, uintheIB95, {from: accounts[5]});
		const 
ppDQGX = await BirdOracleMi4aldd.updatedChainRequest.call(uintZ4gUDrq, uint88M2X6, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleguX1AG8 = await BirdOracle.new({from: accounts[3]});
		const stringYwJN8t7 = "MrUmcR7OIEwo4gDgpn76MVBtKIGM2YPzLtGEcB8JsjxawVeEuMg5wsm00j"
		const uintcHA4WOA = BigInt("1498")
		const uintBQXlNke = BigInt("56")
		const stringI9COwH5 = "lv7UyTQEW46kvIbfXh5irh384O"
		const addresslE8pt79 = "0x0000000000000000000000000000000000000001"
		const uintw6Tw4ts = await BirdOracleguX1AG8.getRatingByAddressString.call(stringYwJN8t7, {from: accounts[2]});
		const uintRS64c2A = await BirdOracleguX1AG8.getRating.call({from: accounts[3]});
		const stringrHEQE8e = await BirdOracleguX1AG8.substring.call(stringI9COwH5, uintBQXlNke, uintcHA4WOA, {from: accounts[1]});
		const uintb9QrTI = await BirdOracleguX1AG8.getRatingByAddress.call(addresslE8pt79, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleeBTfqH = await BirdOracle.new({from: accounts[5]});
		const uintTsZQuX = BigInt("858")
		const uintVGOCVoP = BigInt("1495")
		const stringPwHznlh = "mtigecH5QXPVnKqrap3VxZeYAarik3S4rh8fr6B"
		const stringDbrbRxx = "jcx3scyvQa2KNpIK58H6YAL6cepjWYBOTWhmvScxdSAEkhmDXXhnV838JlfHQQPKOBc9t"
		const stringBYvdsk = "ngLRcakiI9lyx6A4UJTz3vTCfzOesiU0S39UOP8vaMH1A8EiVBI30q2hI5TsYRpbEHLB5Zvi5I8y1jfI1lqS"
		const string3voNQ5 = "F3"
		const stringeWSMheN = await BirdOracleeBTfqH.substring.call(stringPwHznlh, uintVGOCVoP, uintTsZQuX, {from: accounts[0]});
		const uinta6ZGhgJ = await BirdOracleeBTfqH.getRatingByAddressString.call(stringDbrbRxx, {from: accounts[1]});
		const stringMUPVhlg = await BirdOracleeBTfqH.extractAddress.call(stringBYvdsk, {from: accounts[3]});
		const uintlbvUB0 = await BirdOracleeBTfqH.getRatingByAddressString.call(string3voNQ5, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleOEGt2sw = await BirdOracle.new({from: accounts[4]});
		const stringiLGIbN = "zsH8"
		const stringSRyeaU3 = "wgi5cp8xDdldig745KIdrd8yK79Vb13Cmk1pk5s6jDhealYa"
		const uintxeQRJHc = BigInt("1766")
		const uintvMIcKXS = BigInt("1561")
		const stringTpC0mLY = "rrSb686Gf1MTA2uIHvQlxt02rTUhQaw12Y5"
		const uintBILyv0k = BigInt("1471")
		const uint9NSWNO = BigInt("1359")
		const stringrCPNqC = "AZTmiNCYBnxLXvGAeTmadJoPSyCTwlwvsP8uFqrD5fumOb825i1rUzW7BicWxWRUWfFjttPBOHz6M7s5SvEk8Zs2wf"
		const uintHITc55d = BigInt("1746")
		const uintwZonWqq = BigInt("780")
		const stringHPt6Cr3 = await BirdOracleOEGt2sw.extractAddress.call(stringiLGIbN, {from: accounts[4]});
		const stringwWbCaec = await BirdOracleOEGt2sw.extractAddress.call(stringSRyeaU3, {from: accounts[2]});
		const stringCsW9Vfu = await BirdOracleOEGt2sw.substring.call(stringTpC0mLY, uintvMIcKXS, uintxeQRJHc, {from: accounts[1]});
		const stringwoO6XIm = await BirdOracleOEGt2sw.substring.call(stringrCPNqC, uint9NSWNO, uintBILyv0k, {from: accounts[5]});
		const 
vYYCOKg = await BirdOracleOEGt2sw.updatedChainRequest.call(uintwZonWqq, uintHITc55d, {from: accounts[3]});
		const uintLHraJwR = await BirdOracleOEGt2sw.getRating.call({from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclek6BUSkR = await BirdOracle.new({from: accounts[2]});
		const stringalbCCBL = "W4kD5ug9NNYHoglmoDOwXXkH7M6JeTGuH3wPBPWn1LxhVJ6tSE16TE"
		const stringTju8RjQ = "trttqAEzgic94ZgKtFYd9"
		const stringqZif2Nu = ""
		const uintoSWNATa = BigInt("1175")
		const uintbQ0oa9c = BigInt("1629")
		const stringyDYZHg = "At2QgSApCfTLpHkZPkBYT6IJG3PLuajTREGJ"
		const stringfGa4fpX = "GkC1y8sJr94FuBLlh"
		const stringFnP6Ot6 = "M6SmuaLQs2RF3MFKnfxC09wVuLSoayGn9mcdJz1Wnr8pyyn7Y4dMAbTFbENgwnkUaiHauqbKyfwjNKMagHbR"
		const 
MDCoNXE = await BirdOraclek6BUSkR.newChainRequest.call(stringTju8RjQ, stringalbCCBL, {from: accounts[1]});
		const addressYAb9B8v = await BirdOraclek6BUSkR.parseAddr.call(stringqZif2Nu, {from: accounts[2]});
		const stringr0vKy4Q = await BirdOraclek6BUSkR.substring.call(stringyDYZHg, uintbQ0oa9c, uintoSWNATa, {from: accounts[0]});
		const stringDhdpoqS = await BirdOraclek6BUSkR.extractAddress.call(stringfGa4fpX, {from: accounts[1]});
		const uintjH6ZQvf = await BirdOraclek6BUSkR.getRatingByAddressString.call(stringFnP6Ot6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintiHU4XGM = BigInt("1865")
		const stringMpCAOM = "3fGL48F9JS6CjmEQXcZKNln2ZysJCLAW6u"
		const uintdPZnlnH = BigInt("286")
		const uintgLRITxe = BigInt("83")
		const stringcZFaOTu = "4KqGJRlMO7aYScMcvRxka7cWwXecu8CtqjTEHnpvl"
		const stringZnU5aYL = await BirdOracle1xcUnO.substring.call(stringMpCAOM, uintiHU4XGM, {from: accounts[1]});
		const uinteAJ57Rm = await BirdOracle1xcUnO.getRating.call({from: accounts[4]});
		const stringX3A3giG = await BirdOracle1xcUnO.substring.call(stringcZFaOTu, uintgLRITxe, uintdPZnlnH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintJ56Db54 = BigInt("1513")
		const stringDbvodIz = "OiMTwPYENIn3SeMGtH8Qv6KAk4CZaOUPPNY33shy9DeuKSW6hGWBuwMgUPM25OsDlcLFaYBf7o"
		const uintBpJB6PU = BigInt("286")
		const uintmNnCgkC = BigInt("95")
		const stringcZFaOTu = "4KqJRlMO7aYScMcvRxka7cWwXecu8CtqjTEHnpvl"
		const stringdiQj8FE = await BirdOracle1xcUnO.substring.call(stringDbvodIz, uintJ56Db54, {from: accounts[3]});
		const uintVd01TPE = await BirdOracle1xcUnO.getRating.call({from: accounts[4]});
		const stringX3A3giG = await BirdOracle1xcUnO.substring.call(stringcZFaOTu, uintmNnCgkC, uintBpJB6PU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHtqSmzf = await BirdOracle.new({from: accounts[3]});
		const uintUChvjcO = BigInt("895")
		const stringenbQU9d = "YDLQCBntF6kkKmS4SuhT4aoWIPrHGQz5TGuby7InK47A76Mkkj"
		const uintQHiBaIE = BigInt("489")
		const uintHYehjQ2 = BigInt("278")
		const stringRjRkYzR = "2Y5hsktPNMoMDUxwHC5B7oaMDY3yhBOOWnikQIHukeQLnFj4SiqBi1fUoRnb4bhPfwDNB7r4fV"
		const stringyTjcxcd = "Ndj7NtgV8BbTwl7ULNIATr6O3a5g9bzx3JejInBUE"
		const stringyQY6SNc = "uqrHvmkNaKnvUc1coDr3sMd5aMt0kPOVk7EYaA5xqMv1sHHaJ8UcvYnPsjZw3ZBtKsPfSngrwtt3dQ1VLGqeWsdOK7"
		const stringxrzxruf = "LzGgntNzQmFgbbdFpez2GFJxr9lQUw1kEZ5b4akFylOrbMN8LKezHKQ9Xoy1YMkBCSIWRmzm2"
		const stringPePFn07 = await BirdOracleHtqSmzf.substring.call(stringenbQU9d, uintUChvjcO, {from: accounts[0]});
		const stringois1F1 = await BirdOracleHtqSmzf.substring.call(stringRjRkYzR, uintHYehjQ2, uintQHiBaIE, {from: accounts[1]});
		const uintHASyp85 = await BirdOracleHtqSmzf.getRatingByAddressString.call(stringyTjcxcd, {from: accounts[2]});
		const stringiOj0Efu = await BirdOracleHtqSmzf.extractAddress.call(stringyQY6SNc, {from: accounts[1]});
		const addressmSvpCN2 = await BirdOracleHtqSmzf.parseAddr.call(stringxrzxruf, {from: accounts[1]});
		const uintPYUfR3t = await BirdOracleHtqSmzf.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintoOESDj6 = BigInt("123")
		const stringBxwHMa5 = "TTfrW5xnyvaHQUHSHFnm2FVr273JvyTlGFvnLkiIoYqcjbp6gZWWdNUfddbkKWozfse"
		const stringmXAUox2 = "51cUefY4AW7fS4v7tH2xxzZ1RuP8WNBYaNBy5YVLmxkr8tLKYhIQWOhPPAJPTFLouyigYAvjafSar2IWvzMjRbndnOysWo"
		const uintoBlgwRz = BigInt("2032")
		const uintfJL9oFj = BigInt("837")
		const stringarvEOIM = "C1YlMlrfcbM5wUq7MLpd5j69YQRgmOWNWtlSvhPbb37sp7LAKLnUklR56shBsfW8sMVbXNkuZtb"
		const stringvwcRZjf = "OhcOitLguOlGBIdpDBzbtdw5NtCxMouM4PloNwV99Tr"
		const stringErnavzS = await BirdOracle1xcUnO.substring.call(stringBxwHMa5, uintoOESDj6, {from: "0x0000000000000000000000000000000000000001"});
		const uintFlJRRw9 = await BirdOracle1xcUnO.getRatingByAddressString.call(stringmXAUox2, {from: accounts[1]});
		const stringdQX6Nw1 = await BirdOracle1xcUnO.substring.call(stringarvEOIM, uintfJL9oFj, uintoBlgwRz, {from: accounts[3]});
		const stringEMbh7UE = await BirdOracle1xcUnO.extractAddress.call(stringvwcRZjf, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleXjCvQXS = await BirdOracle.new({from: accounts[1]});
		const uintvRFzssT = BigInt("1691")
		const stringb4sHDpG = "nGRh2LzNAQkRV3GHevxP7VEJ1RE8rzUzOTdJqgiJeuEowQddxwOl2zVPQ3Jv"
		const addressRyat9l9 = accounts[1]
		const uintmnL8dJu = BigInt("1136")
		const stringQVpu4TJ = "UTwCSnOw48SkF"
		const stringNIlOnkH = await BirdOracleXjCvQXS.substring.call(stringb4sHDpG, uintvRFzssT, {from: accounts[4]});
		const uintrmZNbrw = await BirdOracleXjCvQXS.getRating.call({from: accounts[3]});
		const uintdGfpHgt = await BirdOracleXjCvQXS.getRatingByAddress.call(addressRyat9l9, {from: accounts[1]});
		const stringTGl1Zh0 = await BirdOracleXjCvQXS.substring.call(stringQVpu4TJ, uintmnL8dJu, {from: accounts[4]});
		const uinty4YNpFl = await BirdOracleXjCvQXS.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintVMLWbYA = BigInt("1977")
		const uintq1YBeXm = BigInt("1977")
		const stringGucBsaS = "afCAi5IH5MiQ3u3m7Tdtvkcln38MOolT2zG1eztq2fvXsqKLdeUpwgosp1Cub7f4K86Luedbss48R5Rb5KOtQUUJLhBVbPtji"
		const stringHzclCCl = await BirdOracle1xcUnO.substring.call(stringGucBsaS, uintq1YBeXm, uintVMLWbYA, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintch7fUUJ = BigInt("685")
		const stringIXMk05w = "zuFMVx7d833qbIfSvHcTR7"
		const stringnn5tQ4n = "7lBG6G"
		const stringDvlsmX5 = await BirdOracle1xcUnO.substring.call(stringIXMk05w, uintch7fUUJ, {from: accounts[2]});
		const stringztBE8vl = await BirdOracle1xcUnO.extractAddress.call(stringnn5tQ4n, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle1xcUnO = await BirdOracle.new({from: accounts[1]});
		const uintJfsLDm5 = BigInt("580")
		const stringE8Yzxs4 = "Wu7wA83rp1hoULp4TCflc9dNkCvUoIribK2b8kTkvbbMueI"
		const stringnn5tQ4n = "70BF6G"
		const stringnqQKrZZ = "d1z9FnHPLLjXccBFH8NQwf8ne1DFMBw2r8fgeUaYTEe8wAH64eFgwAXX615rDOmKjkz3JvVz1DSFFPkO0DZPfR"
		const stringJxV1m30 = "caNCMnH1cYcuCNKHaJ1O3Qrq5BtDurEWweP5HYRYkXg810YJqvzAjKaPQG2MbM3IiSeeFR4AQQFUFmnjsdDj"
		const stringNauSTP = await BirdOracle1xcUnO.substring.call(stringE8Yzxs4, uintJfsLDm5, {from: accounts[5]});
		const stringztBE8vl = await BirdOracle1xcUnO.extractAddress.call(stringnn5tQ4n, {from: accounts[4]});
		const 
BIae58b = await BirdOracle1xcUnO.newChainRequest.call(stringJxV1m30, stringnqQKrZZ, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleU3hH7Vi = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringZTRiYtK = "CKtkrpDNTc1Q3xJC4pRLSdbMvwQ9pjAaC66fopvH2wsB4UMVDRqq9H7IWVE8HDqsbDR3nShFLOPenHED7h3J"
		const uintBua9ik = BigInt("120")
		const uinth6qrdA3 = BigInt("1537")
		const uintjkGHAnV = await BirdOracleU3hH7Vi.getRating.call({from: accounts[4]});
		const stringKw31F3e = await BirdOracleU3hH7Vi.extractAddress.call(stringZTRiYtK, {from: accounts[1]});
		const 
hBAsuGb = await BirdOracleU3hH7Vi.updatedChainRequest.call(uinth6qrdA3, uintBua9ik, {from: accounts[4]});
	});
})