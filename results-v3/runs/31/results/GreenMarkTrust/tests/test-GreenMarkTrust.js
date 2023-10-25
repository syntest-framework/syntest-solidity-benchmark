const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintHYw6XMv = BigInt("841")
		const stringllvZ2qS = "5A3H8fHfwe"
		const strings9cvLDX = "8NfGbivN5gX1FqGxvPy4PcoVB6jAntyk"
		const GreenMarkTrustrXJDhgp = await GreenMarkTrust.new(uintHYw6XMv, stringllvZ2qS, strings9cvLDX, {from: accounts[3]});
		const bytetxTVW2S = "0x1e1e08"
		const uintBiBozkC = BigInt("235")
		const addressfgRMYkl = "0x0000000000000000000000000000000000000001"
		const uintILNIN9 = BigInt("872")
		const addresstBrlsv0 = accounts[1]
		const byteBKZ7qkd = "0x1f15111f09"
		const uintenwXrq9 = BigInt("168")
		const addressbugAmds = accounts[0]
		const uintPorS723 = BigInt("2025")
		const addressYVWjFb5 = accounts[2]
		const addressJP7dsPY = accounts[0]
		const boolXKRAJ8 = await GreenMarkTrustrXJDhgp.approveAndCall.call(addressfgRMYkl, uintBiBozkC, bytetxTVW2S, {from: accounts[5]});
		const boolQeLtZRm = await GreenMarkTrustrXJDhgp.burnFrom.call(addresstBrlsv0, uintILNIN9, {from: "0x0000000000000000000000000000000000000001"});
		const boolkPVKdbD = await GreenMarkTrustrXJDhgp.approveAndCall.call(addressbugAmds, uintenwXrq9, byteBKZ7qkd, {from: accounts[3]});
		const boolZYiu38w = await GreenMarkTrustrXJDhgp.transferFrom.call(addressJP7dsPY, addressYVWjFb5, uintPorS723, {from: accounts[5]});

		await expect(GreenMarkTrustrXJDhgp.approveAndCall.call(addressfgRMYkl, uintBiBozkC, bytetxTVW2S, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintB3rOaMU = BigInt("0")
		const stringauYmwdq = "wYX4T91oSdz4MujRVnUYyOs2mK6HVkQVW3rmnnXkRSQpz7SqLMfVM9f1kOsHWFgdpJhl5mHZUVbnDydX"
		const stringuq8KcMF = "5rMYf9PPCKsPK4ob9e"
		const GreenMarkTrustF9vEX16 = await GreenMarkTrust.new(uintB3rOaMU, stringauYmwdq, stringuq8KcMF, {from: accounts[5]});
		const uintMAYOkz4 = BigInt("498")
		const addressODPwAH3 = accounts[5]
		const addressxZLLR9V = accounts[1]
		const uintkqkcT7S = BigInt("692")
		const addressj8InAYG = accounts[5]
		const uintazuyAN = BigInt("2035")
		const addressFDcioeD = accounts[4]
		const byteeuUhrcl = "0x1e0f201919030f06100006081b0408171d0412050f14080813110713"
		const uintNFmgLFj = BigInt("1736")
		const addressR06EtE1 = accounts[1]
		const boolmEsrcEX = await GreenMarkTrustF9vEX16.transferFrom.call(addressxZLLR9V, addressODPwAH3, uintMAYOkz4, {from: accounts[0]});
		const boolDDcEGII = await GreenMarkTrustF9vEX16.approve.call(addressj8InAYG, uintkqkcT7S, {from: accounts[3]});
		const boolUAn4iip = await GreenMarkTrustF9vEX16.transfer.call(addressFDcioeD, uintazuyAN, {from: accounts[1]});
		const boolxJM804A = await GreenMarkTrustF9vEX16.approveAndCall.call(addressR06EtE1, uintNFmgLFj, byteeuUhrcl, {from: accounts[4]});

		await expect(GreenMarkTrustF9vEX16.transferFrom.call(addressxZLLR9V, addressODPwAH3, uintMAYOkz4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintEzlb3oR = BigInt("1386")
		const stringifSutVf = "4Y6e8k9NYbvDRmfCgNaSWOTebmzWObFiC8EItvfUnntp1L4Wh"
		const stringJl6l5wj = "c2"
		const GreenMarkTrust5Kr9fi = await GreenMarkTrust.new(uintEzlb3oR, stringifSutVf, stringJl6l5wj, {from: accounts[3]});
		const uintratt6vX = BigInt("384")
		const byten5Zfmtu = "0x1e0113160714111619121e0b1b1c05010a1a090a1f05"
		const uintISiy8zi = BigInt("487")
		const addressk1dGL8O = "0x0000000000000000000000000000000000000001"
		const bytew0Rc1C5 = "0x0f101c0a131c1e0f08090f180d1b1815050b031e191f"
		const uinttY6oz5G = BigInt("1665")
		const addressW9OlOd = accounts[1]
		const uintaOx4vTZ = BigInt("1339")
		const boolndh5DYP = await GreenMarkTrust5Kr9fi.burn.call(uintratt6vX, {from: accounts[4]});
		const boolK0plgfk = await GreenMarkTrust5Kr9fi.approveAndCall.call(addressk1dGL8O, uintISiy8zi, byten5Zfmtu, {from: accounts[1]});
		const boolqtFBcWu = await GreenMarkTrust5Kr9fi.approveAndCall.call(addressW9OlOd, uinttY6oz5G, bytew0Rc1C5, {from: "0x0000000000000000000000000000000000000001"});
		const boolFZYah2h = await GreenMarkTrust5Kr9fi.burn.call(uintaOx4vTZ, {from: accounts[5]});

		await expect(GreenMarkTrust5Kr9fi.burn.call(uintratt6vX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintksAQNoD = BigInt("858")
		const stringcaRFUWU = "bDLv4vWWIuFQHuFJ6pD2DQyGf6Cn9NmvoQXPg9UWIyEgo6KO2nS81pyQuHOPRZsOyyCZrfoxE2CFPRNemGdNL8dYA2iXK"
		const stringqhjKEK2 = "3bvoO6caNLn1xYv0U1dqgqlz2ffSO5oy9J17DCS1r2tLayUoylWTn9U4FEaZ4FSW5Wcsawb7mltZRHdgey"
		const GreenMarkTrustA7iM7r4 = await GreenMarkTrust.new(uintksAQNoD, stringcaRFUWU, stringqhjKEK2, {from: accounts[0]});
		const uintIMifg1F = BigInt("1057")
		const addressw8UUs5 = "0x0000000000000000000000000000000000000001"
		const uintj5CStQF = BigInt("1705")
		const byteWNrKdb0 = "0x1b0f1c1308121a0d1500010d021e120e0f1502061c0f15180619171a12"
		const uintC43MlPp = BigInt("35")
		const addressMdOzx80 = accounts[4]
		const booljlDl8jb = await GreenMarkTrustA7iM7r4.transfer.call(addressw8UUs5, uintIMifg1F, {from: accounts[1]});
		const boolc4ikOww = await GreenMarkTrustA7iM7r4.burn.call(uintj5CStQF, {from: accounts[0]});
		const boolpMmZAKg = await GreenMarkTrustA7iM7r4.approveAndCall.call(addressMdOzx80, uintC43MlPp, byteWNrKdb0, {from: accounts[5]});

		await expect(GreenMarkTrustA7iM7r4.transfer.call(addressw8UUs5, uintIMifg1F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintrV441H8 = BigInt("1552")
		const stringcdjHB5g = "gATifVjq7hpq1oALbztUGld878bx6nmDLRg1czUg3zkXbawTG6MkM5dOwwZnDWd27sHCJ"
		const stringqDk0j0A = "RP5RtMIq7VIQ9mT2lMWdxsLfQeqDZvyMRjSuHCuh6NpdhvIGCXo8NaxjCJhBH79WI6S"
		const GreenMarkTrustrhflKEf = await GreenMarkTrust.new(uintrV441H8, stringcdjHB5g, stringqDk0j0A, {from: "0x0000000000000000000000000000000000000001"});
		const bytevBpDYJz = "0x000a100f19130316011c191c0a1914110e19101b"
		const uintI4UwNya = BigInt("603")
		const addresspTdjtZ = accounts[3]
		const byteQKoxKJG = "0x031b130a1b1e190304001b040706060c001e0900"
		const uintlAUTLNE = BigInt("1978")
		const addressqc6TbbN = accounts[0]
		const boolmwM66K2 = await GreenMarkTrustrhflKEf.approveAndCall.call(addresspTdjtZ, uintI4UwNya, bytevBpDYJz, {from: accounts[0]});
		const boolBmmbl6 = await GreenMarkTrustrhflKEf.approveAndCall.call(addressqc6TbbN, uintlAUTLNE, byteQKoxKJG, {from: accounts[3]});
	});

	it('test for GreenMarkTrust', async () => {
		const uinteT9jRf = BigInt("1705")
		const stringTaMYQ2g = "THhg4xwQe6I"
		const stringmjmODKe = "AxraUY4QT521VOSAtAe9eLTceR6B"
		const GreenMarkTrustwvSZhnQ = await GreenMarkTrust.new(uinteT9jRf, stringTaMYQ2g, stringmjmODKe, {from: accounts[3]});
		const uintAq2VTiI = BigInt("1305")
		const addressnlnrYTp = accounts[0]
		const uintQPLg1MQ = BigInt("844")
		const addressGvLXm1S = accounts[2]
		const addressVkeqI9f = accounts[2]
		const byteIcxnviF = "0x0d131c1d020819110713"
		const uinthsOkZmo = BigInt("1457")
		const addresshF3Uzrh = accounts[0]
		const boolVvTAVoS = await GreenMarkTrustwvSZhnQ.burnFrom.call(addressnlnrYTp, uintAq2VTiI, {from: accounts[5]});
		const booldBURjsi = await GreenMarkTrustwvSZhnQ.transferFrom.call(addressVkeqI9f, addressGvLXm1S, uintQPLg1MQ, {from: accounts[5]});
		const boolvtkQHrv = await GreenMarkTrustwvSZhnQ.approveAndCall.call(addresshF3Uzrh, uinthsOkZmo, byteIcxnviF, {from: accounts[2]});

		await expect(GreenMarkTrustwvSZhnQ.burnFrom.call(addressnlnrYTp, uintAq2VTiI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})