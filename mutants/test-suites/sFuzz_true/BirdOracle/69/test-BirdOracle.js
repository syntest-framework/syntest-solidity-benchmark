const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracle6JmcAc = await BirdOracle.new({from: accounts[3]});
		const stringy9quAsw = "DSU"
		const stringZddbnev = "cFuW5sN4UPKlY61kq0rFhOwB4zu6CIUjZuPDXM4WNV4Jhjynjp8x79YROXug7ujwYCR"
		const uinthoDUjQf = BigInt("1459")
		const stringX4L7GUZ = "GR9X7gPIiGJuiQWByo98zzRif46XvwCYsOFwex9IbM3mwOSMbd"
		const stringkMKbo6M = await BirdOracle6JmcAc.extractAddress.call(stringy9quAsw, {from: accounts[3]});
		const uintnq7iSQz = await BirdOracle6JmcAc.getRatingByAddressString.call(stringZddbnev, {from: accounts[0]});
		const stringrjThmzR = await BirdOracle6JmcAc.substring.call(stringX4L7GUZ, uinthoDUjQf, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleb8roely = await BirdOracle.new({from: accounts[5]});
		const stringqin75B5 = "Qfje"
		const addressYWals1s = accounts[0]
		const addressgv4DN0X = accounts[1]
		const addressiYyWmna = await BirdOracleb8roely.parseAddr.call(stringqin75B5, {from: accounts[0]});
		const uintTXyPJsm = await BirdOracleb8roely.getRatingByAddress.call(addressYWals1s, {from: accounts[2]});
		const uintPjeUno3 = await BirdOracleb8roely.getRatingByAddress.call(addressgv4DN0X, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclelup351 = await BirdOracle.new({from: accounts[1]});
		const uintMJh2EKl = BigInt("1897")
		const uintLuXnELx = BigInt("1351")
		const stringTtn9jP7 = "P9FNTHNhzTfJQKBGFTrrMwgKSJTV6zhcwXlOPKjDAEJ4BafnF4zvXd1Y2adggWUCP0aTkDCcdUviDV14LXP"
		const uintmRzBfGe = BigInt("129")
		const uintkLMe3En = BigInt("30")
		const stringINS3vNY = "AXbS76Cz8zLwr1GUvUXaCjPMGcPwMsqvParsRtYisl3a7DMhzBFk61319TQvShxXjktqNf1ap"
		const uintad9LVsM = BigInt("713")
		const uintXUJxg1t = BigInt("913")
		const stringc1pnSN2 = "nPHAlLvSzNoDmcxQEkPyClICcd6ocMepAfdJmFcHYXKQAS"
		const stringmrfpAsV = await BirdOraclelup351.substring.call(stringTtn9jP7, uintLuXnELx, uintMJh2EKl, {from: "0x0000000000000000000000000000000000000001"});
		const stringtexF7qM = await BirdOraclelup351.substring.call(stringINS3vNY, uintkLMe3En, uintmRzBfGe, {from: accounts[3]});
		const stringQDh1CHw = await BirdOraclelup351.substring.call(stringc1pnSN2, uintXUJxg1t, uintad9LVsM, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleaBnOt3B = await BirdOracle.new({from: accounts[0]});
		const stringrAnUGO3 = "XqwAa4vwPJSRm3XfpfyQTRFuxPQdAKCnEIfKGYBoPOHEqf13twYvu2nH15gQMWXPyJncyF"
		const addressCsHWElC = accounts[3]
		const uintkH75wgv = await BirdOracleaBnOt3B.getRating.call({from: accounts[3]});
		const stringWacPJM8 = await BirdOracleaBnOt3B.extractAddress.call(stringrAnUGO3, {from: accounts[3]});
		const uintIJH6A8f = await BirdOracleaBnOt3B.getRatingByAddress.call(addressCsHWElC, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleuc9Zig0 = await BirdOracle.new({from: accounts[1]});
		const uintsGo0pxo = BigInt("1007")
		const uintuBysoM8 = BigInt("1864")
		const stringvMKuQdb = "bKYQEtlCtKrY3K6e4fnOhDwXFyLYw8idG4kwr0uxRJiJlG21Qw"
		const stringHg0rh8Q = "ebA5oJhLk4743C04kgmmHtdFznW9e9hID5jt9PyJLEHmBH2ZLmveuYuFJGTImRxxJSHLEcxEMGQYig60shVXgJJF3bNK"
		const stringXdKrcAB = "6RCmBdld2I7fHR5lVPzGjEOcT7uP8BmsDUTKtALx8X1KcWTQgSditWY"
		const 
UJg8HDj = await BirdOracleuc9Zig0.updatedChainRequest.call(uintuBysoM8, uintsGo0pxo, {from: accounts[4]});
		const stringJvCLvhO = await BirdOracleuc9Zig0.extractAddress.call(stringvMKuQdb, {from: accounts[1]});
		const 
jLA86sI = await BirdOracleuc9Zig0.newChainRequest.call(stringXdKrcAB, stringHg0rh8Q, {from: accounts[4]});
		const uintb5Hdhxr = await BirdOracleuc9Zig0.getRating.call({from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleb8roely = await BirdOracle.new({from: accounts[5]});
		const addressaUFxc8 = "0x0000000000000000000000000000000000000001"
		const stringqin75B5 = "Qfje"
		const addresstU1LoOY = accounts[2]
		const addressq8AbgMB = accounts[1]
		const addressYZDPXG5 = accounts[1]
		const uintxPNu5ow = await BirdOracleb8roely.getRatingByAddress.call(addressaUFxc8, {from: accounts[1]});
		const addressiYyWmna = await BirdOracleb8roely.parseAddr.call(stringqin75B5, {from: accounts[0]});
		const uintSJXnegB = await BirdOracleb8roely.getRatingByAddress.call(addresstU1LoOY, {from: accounts[3]});
		const uintTXyPJsm = await BirdOracleb8roely.getRatingByAddress.call(addressq8AbgMB, {from: accounts[2]});
		const uintPjeUno3 = await BirdOracleb8roely.getRatingByAddress.call(addressYZDPXG5, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclesoiYIUc = await BirdOracle.new({from: accounts[4]});
		const stringgdCy0GE = "vcDAkXWjeNe2JmpNbdCjDKE9JKgfUH2jY6EdhRA7mD0Y8ZQLDOMNFBZlTmKQ42Os7hOtxU7JvCEanZ1mf7tIgNQ3ezgg93Wu"
		const addresslgcieyS = accounts[5]
		const uintcBxafKZ = BigInt("170")
		const uintRmXLYu9 = BigInt("1198")
		const uint5tDWER = await BirdOraclesoiYIUc.getRatingByAddressString.call(stringgdCy0GE, {from: accounts[4]});
		const uintVAZ20Up = await BirdOraclesoiYIUc.getRatingByAddress.call(addresslgcieyS, {from: accounts[0]});
		const 
UsjSHbM = await BirdOraclesoiYIUc.updatedChainRequest.call(uintRmXLYu9, uintcBxafKZ, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintY1PTpRI = BigInt("1053")
		const uintLWwNuEp = BigInt("2023")
		const string5QQVML = "2ioQesXHrSAyTf2DCLmT7AO5Pi4vO87vFSArSdlDk3HJg3DSiklZhcEFCuTJWH"
		const stringEzk3PfG = "GnXQ4e"
		const stringTyA8Hz4 = "WjjrOlWHxlgbTCCQ9ILuBZqEGhfUyAszFaOYgpAvFoPoOgL"
		const uinthdrsTfk = BigInt("1597")
		const uintjKa32bR = BigInt("624")
		const stringNBsZYiZ = "9iq7UmK8Bf"
		const stringZExUFtl = await BirdOracleESBESD.substring.call(string5QQVML, uintLWwNuEp, uintY1PTpRI, {from: accounts[3]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
		const uintgstEk3M = await BirdOracleESBESD.getRatingByAddressString.call(stringTyA8Hz4, {from: accounts[3]});
		const stringbkqvrho = await BirdOracleESBESD.substring.call(stringNBsZYiZ, uintjKa32bR, uinthdrsTfk, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleHUzNEOl = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBQTpnjk = BigInt("1113")
		const uintxKwAVbs = BigInt("1110")
		const stringKnYbuo = "47QwlXpPhio3d9vCBjMcGdJU6G34HHlZyqJRsp82Xgzaolh1NmbD"
		const stringbOkr7i2 = "FeNtKNiuWomzyAVxnw791wWIkYtFAmcQssyj96"
		const stringOCFtrDD = await BirdOracleHUzNEOl.substring.call(stringKnYbuo, uintxKwAVbs, uintBQTpnjk, {from: accounts[5]});
		const uintftSJnwo = await BirdOracleHUzNEOl.getRating.call({from: accounts[3]});
		const addressg4GOr6L = await BirdOracleHUzNEOl.parseAddr.call(stringbOkr7i2, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintfgpjfDH = BigInt("1980")
		const stringwDXCa4Z = "KhRTHOUdb3LxQwRUl0ZfEoHmXpN39lhLGthXBaCES9LfluaXOjwHh9mxZRw9rb1zYv3TCkYGiGdKW7qRyCJrBPPD2vcwuiB"
		const uintDsERZhE = BigInt("183")
		const uintdIf4uCb = BigInt("179")
		const stringUc0GAjh = "BAIZOMLzMlX2buwYyloKByexSB32LSDKNJkgpJCf"
		const stringEzk3PfG = "GVQ4e"
		const stringTUjUOKv = await BirdOracleESBESD.substring.call(stringwDXCa4Z, uintfgpjfDH, {from: accounts[0]});
		const stringTsAUPy = await BirdOracleESBESD.substring.call(stringUc0GAjh, uintdIf4uCb, uintDsERZhE, {from: accounts[1]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintw8sUVAS = BigInt("179")
		const uintbu1wKZ3 = BigInt("179")
		const stringUc0GAjh = "BAIZOMLzMlX2buwYyloKByexSB32LSDKNJkgpJCf"
		const stringkLi6yRk = "8Wr6DkqABBmGUsrL783CWci8lBDCxS92itvDOhl5RH0taP2qsKHVMiLtlejvZDtox25chRZ3DWJrXXfuXjA"
		const stringTsAUPy = await BirdOracleESBESD.substring.call(stringUc0GAjh, uintbu1wKZ3, uintw8sUVAS, {from: accounts[1]});
		const stringbYW0zWi = await BirdOracleESBESD.extractAddress.call(stringkLi6yRk, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintIt2AgS = BigInt("676")
		const stringTuPKkSO = "EV9E7wjGVchJ8VRlBxmJ4GMr1gpx19DCMpkqnNF1rJuRAQaMmMK4qpk4vIISvomY"
		const stringX2v0Vq = "aFeUIEBywjaKIigNS"
		const stringEzk3PfG = "GXQ4e"
		const stringNsGt8ol = await BirdOracleESBESD.substring.call(stringTuPKkSO, uintIt2AgS, {from: accounts[1]});
		const stringcuzuDO = await BirdOracleESBESD.extractAddress.call(stringX2v0Vq, {from: accounts[0]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
		const uinthOvdBhT = await BirdOracleESBESD.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleXoiG7YX = await BirdOracle.new({from: accounts[2]});
		const uintncNHcxL = BigInt("530")
		const stringyQ07mR1 = "rqH5yeohlf7M3IIqlEB5aXIs1z6dAsvLT19Ise5SThiTV3smRm3pyAuAOp8uqeGA3zwt"
		const uintSYLtzwE = BigInt("1959")
		const uintbdqjwq = BigInt("1549")
		const stringAb94e5a = "oeG7gnHOHPj8OWTZm4KQoj4ZZn19yn9lj2fSn8wDDDRtigxZUdGxElAmgoFkoQ33T242G9KSRYJsCoebjWs3G"
		const stringFTdxsDV = await BirdOracleXoiG7YX.substring.call(stringyQ07mR1, uintncNHcxL, {from: accounts[3]});
		const stringOvippvI = await BirdOracleXoiG7YX.substring.call(stringAb94e5a, uintbdqjwq, uintSYLtzwE, {from: accounts[4]});
		const uintaA2JhLR = await BirdOracleXoiG7YX.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const stringsMWFpWC = "SOGKvGi33QcU1JOc7tUJEZgAmoBPfDOi7F6PHLO6bpZkh"
		const stringdzpbxUr = "HqxX9OecuitX3AW3ud26AxvD5RRbA84Bwdu72dy4kg2pBTWPR7MLzwZ1cXewKst1cx4YLO"
		const stringEzk3PfG = "GQ4e"
		const 
thMsTYl = await BirdOracleESBESD.newChainRequest.call(stringdzpbxUr, stringsMWFpWC, {from: accounts[1]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle3g91gO = await BirdOracle.new({from: accounts[1]});
		const stringGeqkjsF = "oxWwDB37CeN3FUUFRPbCqCifudCZloqnVeKq33Ld3YTaoNjNhacKUA1kxlXVC"
		const uintOikMBC4 = BigInt("1746")
		const stringt8VRBbJ = "RtPjgEaVfmmTucFNy"
		const stringw7j9xlN = "mdmGjRtwgGvUsJ6b3mdNkfgO4fXwrtR9mCg8rd12wWvHOP97nunjugfmUVIYM2CmHV5zluruflykgy4mA"
		const uintHcXlkzE = BigInt("199")
		const uinttUhbGX6 = BigInt("1674")
		const uintHTIEsrQ = await BirdOracle3g91gO.getRatingByAddressString.call(stringGeqkjsF, {from: accounts[3]});
		const stringQoUhdQG = await BirdOracle3g91gO.substring.call(stringt8VRBbJ, uintOikMBC4, {from: accounts[2]});
		const stringJImXGFF = await BirdOracle3g91gO.extractAddress.call(stringw7j9xlN, {from: accounts[0]});
		const 
skJoww = await BirdOracle3g91gO.updatedChainRequest.call(uinttUhbGX6, uintHcXlkzE, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintmbeLWMq = BigInt("41")
		const stringEG1867 = "hRFUCxF9XX1VSHQkDsVYnqW2kY8QbKj5"
		const uintQyAiQIn = BigInt("438")
		const uintDursRmX = BigInt("1051")
		const stringj6h6Phj = "lKlJfuRlf2jtasVrzVznmIjSOdN4ofkxAyIRi6ppQ7swcWNl9RKRDVtNqs5b991BAgG"
		const stringXrbyWbO = "w2lxWIkt9tKqGa"
		const stringEzk3PfG = "GVQ4e"
		const stringU3ted8 = await BirdOracleESBESD.substring.call(stringEG1867, uintmbeLWMq, {from: accounts[4]});
		const stringeZs2FK4 = await BirdOracleESBESD.substring.call(stringj6h6Phj, uintDursRmX, uintQyAiQIn, {from: accounts[3]});
		const stringMLwV4RC = await BirdOracleESBESD.extractAddress.call(stringXrbyWbO, {from: accounts[3]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uinttBJOAr = BigInt("144")
		const stringVUblNjz = "4jMWg3ERWOiCz8SI6JAojSFfFeOOC39yOWlp7eySTMTRQYGM5qc7PkKt9"
		const stringEzk3PfG = "GX24e"
		const stringNHZWIvH = await BirdOracleESBESD.substring.call(stringVUblNjz, uinttBJOAr, {from: accounts[5]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleESBESD = await BirdOracle.new({from: accounts[3]});
		const uintB7hXhb = BigInt("689")
		const stringN9QYhx = "A3k4CNCnvG7j4vkXB2HWL8HNcsVz4KnuU7t7pbRk0iLR3WOuvsvdUBMxZod7hs"
		const uintSQu5zQu = BigInt("1083")
		const uintLW5uZ7 = BigInt("848")
		const stringb7I5hUm = "Dr85PcNZWDXa07mBkGo4QykFW9SLZnlUOeL"
		const stringEzk3PfG = "GXQ4e"
		const uintNfnIFBp = await BirdOracleESBESD.getRating.call({from: accounts[0]});
		const stringc3D3UX1 = await BirdOracleESBESD.substring.call(stringN9QYhx, uintB7hXhb, {from: "0x0000000000000000000000000000000000000001"});
		const 
DJiXu20 = await BirdOracleESBESD.updatedChainRequest.call(uintLW5uZ7, uintSQu5zQu, {from: accounts[3]});
		const uinti4Xrvyr = await BirdOracleESBESD.getRatingByAddressString.call(stringb7I5hUm, {from: accounts[3]});
		const stringaK77ajZ = await BirdOracleESBESD.extractAddress.call(stringEzk3PfG, {from: accounts[4]});
	});
})