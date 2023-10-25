const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleV7PmAA = await BirdOracle.new({from: accounts[4]});
		const uintha8kGEc = BigInt("1194")
		const uintfCxPPe2 = BigInt("901")
		const stringqaPAhwx = "WqVrJ8hz1juVncIWm1DFYtLWMKogsgmkgX5m6411u4UDvnuUUXIg3Q7g4tMSC3cwUZeGA85zFer7RutAcD"
		const stringBOflur1 = "2nIWF9bif6D62KJoSv"
		const uintT8b5pxT = BigInt("1223")
		const uintRpHLZua = BigInt("2023")
		const stringLLAX2Ab = "pVP61I767rkmd4Lh4dECLhB2UIfpc9lwnV4Xd9UBdob9Dpne6m0cZTMpGR8mDfxTssc5je"
		const stringOV10HnG = await BirdOracleV7PmAA.substring.call(stringqaPAhwx, uintfCxPPe2, uintha8kGEc, {from: accounts[3]});
		const uintMA6bwwP = await BirdOracleV7PmAA.getRatingByAddressString.call(stringBOflur1, {from: accounts[1]});
		const uintqcxyos = await BirdOracleV7PmAA.getRating.call({from: "0x0000000000000000000000000000000000000001"});
		const stringz8Fgcp9 = await BirdOracleV7PmAA.substring.call(stringLLAX2Ab, uintRpHLZua, uintT8b5pxT, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemBlxvaF = await BirdOracle.new({from: accounts[2]});
		const stringoWQ4QXl = "pueNfvOFP27bL"
		const stringx8OYExo = "mKwgoXsTonSREWrC63zXUFOYSOCh1giha4qMARgOLv4BYvdhdW2cp0gEFYNPw0W2tmCYO89"
		const stringj0OSrR = "TNilUNpOz"
		const stringRU9xzNV = await BirdOraclemBlxvaF.extractAddress.call(stringoWQ4QXl, {from: accounts[0]});
		const stringhUGiCkh = await BirdOraclemBlxvaF.extractAddress.call(stringx8OYExo, {from: accounts[4]});
		const stringDuIvDae = await BirdOraclemBlxvaF.extractAddress.call(stringj0OSrR, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracledKMgimd = await BirdOracle.new({from: accounts[0]});
		const uinth46DCsf = BigInt("186")
		const stringT45FPV6 = "u"
		const uintCADDq1m = BigInt("1797")
		const uintvtlJP79 = BigInt("931")
		const uintsxH9x4g = BigInt("1021")
		const stringFcOpj6P = "HKem6dADuntX4PhdfVliWtSVxsPCoBBs4I6QgO2XRNjXgfGv9HMvOWM9DQKI7Or8v4t52esvA3TeiPqvEtMGlQLv1B4W4x"
		const stringn3zbbq7 = await BirdOracledKMgimd.substring.call(stringT45FPV6, uinth46DCsf, {from: accounts[5]});
		const 
xgrGO3 = await BirdOracledKMgimd.updatedChainRequest.call(uintvtlJP79, uintCADDq1m, {from: accounts[0]});
		const stringAaw3ZZ = await BirdOracledKMgimd.substring.call(stringFcOpj6P, uintsxH9x4g, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleQjtgyl = await BirdOracle.new({from: accounts[3]});
		const uintBQC9XR = BigInt("11")
		const stringsht0Vhm = "uDTYmSHUTDMmz8PBhQIMdxJUvcclByTLRJIMw8WBFMVW0CCvJDCTaqXPeTw8gVM6qXAUoVwwhZf2kd8spm8qYgQv"
		const uintbHQCxF6 = BigInt("708")
		const uintWBe7nzK = BigInt("236")
		const stringSpKKXvw = "2BY4Xg7BbdXrLEiJLgqVhG4jKsUQmSVwtTlxCOorDGUO3EREHKRppC8p4pB"
		const uintAFczf6x = BigInt("2044")
		const stringMRfeubd = "wxsHWxnoKPgnnhFS2rE5M9vFQBjEvw7PPDIOqsapRGCQSzo5nTOX8Nlkhzhm3jS"
		const stringsjAEEZz = await BirdOracleQjtgyl.substring.call(stringsht0Vhm, uintBQC9XR, {from: accounts[0]});
		const 
w2g3cuP = await BirdOracleQjtgyl.updatedChainRequest.call(uintWBe7nzK, uintbHQCxF6, {from: accounts[0]});
		const stringLAbwClw = await BirdOracleQjtgyl.extractAddress.call(stringSpKKXvw, {from: accounts[5]});
		const stringZRVg90K = await BirdOracleQjtgyl.substring.call(stringMRfeubd, uintAFczf6x, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleWO5uK8A = await BirdOracle.new({from: accounts[5]});
		const uintD8Nol0k = BigInt("1538")
		const stringNVpMs7I = "dNPU9kM9QDHOu5qx4tIzK0KP67L2J7JFrPcYo5Xcb"
		const stringWT5C2Y = "8INAjRnGjkvdioY29bNUlsSB"
		const uintCDNU1O3 = BigInt("269")
		const stringq9qOVV5 = "n1XUHgUiX6VK6HTnJu9RAmasCDj6DRHEkHmejUaLoICetzgXq6LOVE2heR7iYoHLiQ16RUkvIJcmg9sExLV2aNDu"
		const stringe6JI6SC = await BirdOracleWO5uK8A.substring.call(stringNVpMs7I, uintD8Nol0k, {from: accounts[4]});
		const uintI2iKJS3 = await BirdOracleWO5uK8A.getRatingByAddressString.call(stringWT5C2Y, {from: accounts[5]});
		const stringxQAvUp8 = await BirdOracleWO5uK8A.substring.call(stringq9qOVV5, uintCDNU1O3, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclextyBwt1 = await BirdOracle.new({from: accounts[3]});
		const stringNPK7o4P = "gWDdebV4mDqw7JwlkKtfIpCei07Kc6HE9tQr0PvMrs37eQXaO3qFIY5BxgvTdwtU9b2NCrLIy1dECmeTaLhW"
		const stringNzRoBS3 = "7izYfPyB2Xn9sanqWynBgBI"
		const addressiFJY8a = accounts[0]
		const stringXm0QIVk = "egJnllgp4r2cb97ykGrm4iiGa8OsGLTi3D5zHuGUlcUfG03ttAnzp3zvBCHFfQ8ldL0lqS7O4axW8NKSEkAcpLRUnBv77"
		const stringS0ZexPp = ""
		const uintNMSADi3 = BigInt("611")
		const uintTohyf4T = BigInt("1866")
		const stringMnuT0rw = "MMrXuD33csWn6TpA5Gfh"
		const 
YlHDpMb = await BirdOraclextyBwt1.newChainRequest.call(stringNzRoBS3, stringNPK7o4P, {from: accounts[2]});
		const uintk1SFMxy = await BirdOraclextyBwt1.getRatingByAddress.call(addressiFJY8a, {from: accounts[4]});
		const 
eQEBc5 = await BirdOraclextyBwt1.newChainRequest.call(stringS0ZexPp, stringXm0QIVk, {from: accounts[2]});
		const 
OoR2QvZ = await BirdOraclextyBwt1.updatedChainRequest.call(uintTohyf4T, uintNMSADi3, {from: accounts[0]});
		const addressXvz1Lq7 = await BirdOraclextyBwt1.parseAddr.call(stringMnuT0rw, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL2oMSY6 = await BirdOracle.new({from: accounts[0]});
		const uintfT0Dote = BigInt("508")
		const uintElAQcIO = BigInt("1460")
		const stringlPVuZ5P = "S1m9CMBGpThYld9uxLlPGRdD5WqFKsoIguam"
		const uintZGQou94 = BigInt("1813")
		const uintcSnPALY = BigInt("1682")
		const stringug2UHYp = "tKOtvJWX4RPhconGJqmIv4RDjWsgX2cfdCrE86Y"
		const stringEjmBJXy = "sKvlIHD3i54Tae32XBTn2CqL8VITsWGjoIVMHoKRsuIcgzSuc5yxLtuZtHLJbTvHd97h7viswFeqdjFZQVhW9sOortui"
		const uintLPH8Yy = BigInt("1914")
		const uintrsCvlZJ = BigInt("1199")
		const stringZUo3EJZ = "NueH4WYT"
		const stringAICtLR5 = "NkOkqNRezH3nLMz55p2wolzdSGu8vg5BDxlMJD2L"
		const stringk1ZqRBC = await BirdOracleL2oMSY6.substring.call(stringlPVuZ5P, uintElAQcIO, uintfT0Dote, {from: accounts[4]});
		const stringhKZgQI = await BirdOracleL2oMSY6.substring.call(stringug2UHYp, uintcSnPALY, uintZGQou94, {from: accounts[3]});
		const stringUlS1PEH = await BirdOracleL2oMSY6.extractAddress.call(stringEjmBJXy, {from: accounts[0]});
		const 
jaEuTi = await BirdOracleL2oMSY6.updatedChainRequest.call(uintrsCvlZJ, uintLPH8Yy, {from: accounts[1]});
		const uintwumthjY = await BirdOracleL2oMSY6.getRatingByAddressString.call(stringZUo3EJZ, {from: accounts[3]});
		const stringtbKlP4 = await BirdOracleL2oMSY6.extractAddress.call(stringAICtLR5, {from: accounts[1]});
		const uintRKGCGSI = await BirdOracleL2oMSY6.getRating.call({from: accounts[2]});
		const uintCyk99me = await BirdOracleL2oMSY6.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleQD9sFS = await BirdOracle.new({from: accounts[3]});
		const stringnm6de5N = "mvop9JV6gqPRo1B3DBZmXpPbiacjpTkmMS6prVc9cQIGaGs7lYYk3UwDGVRJVFrVG8xy9A2X8O2OrGWHF"
		const stringXoYt2t1 = "c0yo1dMU"
		const stringYB3GXRi = "Ed73OJeXn28zcOmaDzpd7RdrAdvkqAMgt9VWPRITNtRnnQDuoaIei44f9JT7mLBE6Y"
		const stringwW5CVN5 = "uuemIeGMT5m7Xc8Vzp3APbmmVhoWusGpVmm3I8nL6bGBrB8xEMVXOgP9"
		const addressSvpxmqT = await BirdOracleQD9sFS.parseAddr.call(stringnm6de5N, {from: accounts[0]});
		const 
oB44d2 = await BirdOracleQD9sFS.newChainRequest.call(stringYB3GXRi, stringXoYt2t1, {from: accounts[2]});
		const addressoD1wQ4c = await BirdOracleQD9sFS.parseAddr.call(stringwW5CVN5, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL2oMSY6 = await BirdOracle.new({from: accounts[0]});
		const stringVlEIJt = "V2GsWePIpe5yvb6O8ueUn5HLhJu21ViASW6b2vKZJb"
		const uintcKFEB5V = BigInt("1813")
		const uintGNdQIhw = BigInt("1682")
		const stringug2UHYp = "tKOtvJWX4RPhconGJqmIv4RDjWsgX2cfdCrE86Y"
		const addressGUPiBP = accounts[0]
		const uint4OUc97 = BigInt("1914")
		const uintENS6KU4 = BigInt("1199")
		const stringZUo3EJZ = "NueH4WYT"
		const stringAICtLR5 = "NkOkqNRezH3nLMz55p2wolzdSGu8vg5BDxlMJD2L"
		const stringF3eASGb = "bBq9s57xhnfX2lsWlLDM2ya6xZ7ScXhEX9rIUy6o4ikx5VrmLdukWQiCgX7r0qXIrN"
		const uintB9lRy8K = await BirdOracleL2oMSY6.getRatingByAddressString.call(stringVlEIJt, {from: accounts[3]});
		const stringhKZgQI = await BirdOracleL2oMSY6.substring.call(stringug2UHYp, uintGNdQIhw, uintcKFEB5V, {from: accounts[3]});
		const uintIQRlvg4 = await BirdOracleL2oMSY6.getRatingByAddress.call(addressGUPiBP, {from: accounts[0]});
		const 
jaEuTi = await BirdOracleL2oMSY6.updatedChainRequest.call(uintENS6KU4, uint4OUc97, {from: accounts[1]});
		const uintXDhk5ie = await BirdOracleL2oMSY6.getRating.call({from: accounts[1]});
		const uintwumthjY = await BirdOracleL2oMSY6.getRatingByAddressString.call(stringZUo3EJZ, {from: accounts[3]});
		const stringtbKlP4 = await BirdOracleL2oMSY6.extractAddress.call(stringAICtLR5, {from: accounts[1]});
		const uintRKGCGSI = await BirdOracleL2oMSY6.getRating.call({from: accounts[2]});
		const addressMn8ytiz = await BirdOracleL2oMSY6.parseAddr.call(stringF3eASGb, {from: accounts[0]});
		const uintCyk99me = await BirdOracleL2oMSY6.getRating.call({from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL2oMSY6 = await BirdOracle.new({from: accounts[0]});
		const uintluEwkgx = BigInt("1510")
		const uintuY8tyrI = BigInt("1421")
		const uintNIJijzb = BigInt("1813")
		const uintTkjZAbM = BigInt("1682")
		const stringug2UHYp = "tKOtvJWX4RPhconGJqmIv4RDjWsgX2cfdCrE86Y"
		const addressAl7Dtnp = accounts[0]
		const uintI9jC93P = BigInt("1914")
		const uintCtBjWfT = BigInt("1199")
		const stringZUo3EJZ = "NueH4WYT"
		const stringAICtLR5 = "NkOkqNRezH3nLMz55p2wolzdSGu8vg5BDxlMJD2L"
		const stringHVPJr57 = "DqLETz2s3Uq6g5ymVfu507"
		const 
ujBFsbc = await BirdOracleL2oMSY6.updatedChainRequest.call(uintuY8tyrI, uintluEwkgx, {from: "0x0000000000000000000000000000000000000001"});
		const stringhKZgQI = await BirdOracleL2oMSY6.substring.call(stringug2UHYp, uintTkjZAbM, uintNIJijzb, {from: accounts[3]});
		const uintP1nSP3u = await BirdOracleL2oMSY6.getRatingByAddress.call(addressAl7Dtnp, {from: accounts[1]});
		const 
jaEuTi = await BirdOracleL2oMSY6.updatedChainRequest.call(uintCtBjWfT, uintI9jC93P, {from: accounts[1]});
		const uintYysiTSY = await BirdOracleL2oMSY6.getRating.call({from: accounts[1]});
		const uintwumthjY = await BirdOracleL2oMSY6.getRatingByAddressString.call(stringZUo3EJZ, {from: accounts[3]});
		const stringtbKlP4 = await BirdOracleL2oMSY6.extractAddress.call(stringAICtLR5, {from: accounts[1]});
		const stringhZgxZy = await BirdOracleL2oMSY6.extractAddress.call(stringHVPJr57, {from: accounts[4]});
		const uintRKGCGSI = await BirdOracleL2oMSY6.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehRT4Phy = await BirdOracle.new({from: accounts[3]});
		const stringJ3CHYug = "4BIWgVIUS9bFESKlNqW7jhK6yKaWU2X0yzN1ORSEdS8oAtWpUi2UkD"
		const addresse6qmbym = accounts[5]
		const stringT4HA9dU = "ipfzjkP9XWYjDtljVE"
		const stringfzbbtC3 = "Gn6TLOjTAr5d08MHLzMcAXrV2I55wR8552CWfXmFVrUp6EiMWqFHH8bNB3YQnqiz0k3v1VESi"
		const stringYdlYsxe = "v25JKep2T6YcLquW1LAYQ6CRFCDXR3ABPxKKCB9W4G"
		const addressYx0acf6 = await BirdOraclehRT4Phy.parseAddr.call(stringJ3CHYug, {from: accounts[2]});
		const uintEyAjuvM = await BirdOraclehRT4Phy.getRatingByAddress.call(addresse6qmbym, {from: "0x0000000000000000000000000000000000000001"});
		const stringkpHVkh1 = await BirdOraclehRT4Phy.extractAddress.call(stringT4HA9dU, {from: accounts[2]});
		const 
saJ3z6 = await BirdOraclehRT4Phy.newChainRequest.call(stringYdlYsxe, stringfzbbtC3, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleL9AK6i = await BirdOracle.new({from: accounts[2]});
		const uintqTMwiht = BigInt("1470")
		const stringgi1V9aL = "nl7r8gMNiLzzWD4wdtqyrjlCx9lWcQCl4r9T7AI"
		const stringgbHiz4u = "PEIKnGWgq1nMvH9BlgnIsKiV"
		const stringSZAFrpZ = await BirdOracleL9AK6i.substring.call(stringgi1V9aL, uintqTMwiht, {from: accounts[2]});
		const addressvOs3StD = await BirdOracleL9AK6i.parseAddr.call(stringgbHiz4u, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehRT4Phy = await BirdOracle.new({from: accounts[3]});
		const stringT4HA9dU = "ipf0jiP9XWYjDtljVE"
		const stringk7iY4fI = "dmzdsJpjdv1IEq0qa1ce"
		const uintfYkBy7b = await BirdOraclehRT4Phy.getRating.call({from: accounts[4]});
		const stringkpHVkh1 = await BirdOraclehRT4Phy.extractAddress.call(stringT4HA9dU, {from: accounts[2]});
		const stringtoBgIy = await BirdOraclehRT4Phy.extractAddress.call(stringk7iY4fI, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclehRT4Phy = await BirdOracle.new({from: accounts[3]});
		const uintN1FPjDw = BigInt("246")
		const stringnGSTs3x = "yE4v1"
		const uintMgupmPI = BigInt("1269")
		const stringzJjrQjf = "KPyugpLoNM9ovMLAPvLWXeh6"
		const stringT4HA9dU = "ipfzMiP9XWYjDtljVE"
		const stringpuHC026 = await BirdOraclehRT4Phy.substring.call(stringnGSTs3x, uintN1FPjDw, {from: accounts[3]});
		const stringPLCjULN = await BirdOraclehRT4Phy.substring.call(stringzJjrQjf, uintMgupmPI, {from: accounts[0]});
		const stringkpHVkh1 = await BirdOraclehRT4Phy.extractAddress.call(stringT4HA9dU, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclerTkIud = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBhJ7v53 = BigInt("1952")
		const stringRcq0bF5 = "4tG63ocucTTErReNUTbmsKN3HIAUFOOlkbACnjkY1i2FBUoDrE7MbS6XZPNDa0VFe82qSFfPbFjrOUgLCaw5tMyvy8t"
		const uintaXeIya3 = BigInt("1399")
		const stringuAWmQy = "PN44GL7n9m8WuZfyAqLxvGJ7wCHgViHzhyDdLjHaxnMC0z"
		const stringiHwBlI7 = await BirdOraclerTkIud.substring.call(stringRcq0bF5, uintBhJ7v53, {from: accounts[0]});
		const uintXXHHWyI = await BirdOraclerTkIud.getRating.call({from: accounts[5]});
		const stringNCGcRrq = await BirdOraclerTkIud.substring.call(stringuAWmQy, uintaXeIya3, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNLGs2XT = await BirdOracle.new({from: accounts[4]});
		const uintwqPgQzk = BigInt("729")
		const stringGwcOVXY = "2cXu3KX9ggvhlwMNH7K9TIKfWIs3MuxcnJZwV7W"
		const stringv0wiXcO = "H4wVD9rxc8BkBvbAIGGfoOWlIwt5Aaalit0lF2qo3953nA9S0vmsVZtR9aFBNay57TcGo"
		const uintNS0FZqx = BigInt("412")
		const uint8nayUw = BigInt("1003")
		const stringYrge693 = "VopcBUMtuGq"
		const stringf3InZAa = await BirdOracleNLGs2XT.substring.call(stringGwcOVXY, uintwqPgQzk, {from: accounts[1]});
		const uintTGkh2ph = await BirdOracleNLGs2XT.getRatingByAddressString.call(stringv0wiXcO, {from: accounts[4]});
		const 
OeK3kbS = await BirdOracleNLGs2XT.updatedChainRequest.call(uint8nayUw, uintNS0FZqx, {from: accounts[2]});
		const uintTjkLyuB = await BirdOracleNLGs2XT.getRatingByAddressString.call(stringYrge693, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNLGs2XT = await BirdOracle.new({from: accounts[4]});
		const uintiGi6Z6 = BigInt("175")
		const stringPRzmSqs = "5BzNvDmfPnOmAuPrBPOO5bnMqTkDQaQ1pHJQO7U"
		const uintGzESiw = BigInt("220")
		const uintM7Me5F5 = BigInt("135")
		const stringBNPvy13 = "tRsKKmuBS2rgWwxWA28U6oX0mtRaEM1NSujDXBwlWuYIFTLtyewuymlJC5MbOLo5acj7UUw8bQqLkVMCrY0VDY"
		const uintsgEC902 = await BirdOracleNLGs2XT.getRating.call({from: accounts[2]});
		const uintwIXN8l = await BirdOracleNLGs2XT.getRating.call({from: accounts[3]});
		const stringtWGZvTF = await BirdOracleNLGs2XT.substring.call(stringPRzmSqs, uintiGi6Z6, {from: "0x0000000000000000000000000000000000000001"});
		const stringPwnAf8 = await BirdOracleNLGs2XT.substring.call(stringBNPvy13, uintM7Me5F5, uintGzESiw, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleNLGs2XT = await BirdOracle.new({from: accounts[4]});
		const addressZ3qBIO8 = accounts[0]
		const uintqojpBUP = BigInt("173")
		const uintHyPDRQl = BigInt("173")
		const stringBNPvy13 = "tRsKKXuBS2rgWwxWA28U6oX0mtRaEM1NSujDXBwlWuYIFTLtyewuDmlJC5MbOLo5acj7UUw8bQqLkVMCrY0VDY"
		const uintUH9Sipe = await BirdOracleNLGs2XT.getRating.call({from: accounts[4]});
		const uintJk4eGHg = await BirdOracleNLGs2XT.getRatingByAddress.call(addressZ3qBIO8, {from: accounts[4]});
		const stringPwnAf8 = await BirdOracleNLGs2XT.substring.call(stringBNPvy13, uintHyPDRQl, uintqojpBUP, {from: accounts[1]});
	});
})